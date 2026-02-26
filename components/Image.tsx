import { useState, ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

// Get base URL from Vite (handles GitHub Pages subdirectory)
const getBaseUrl = () => {
  return import.meta.env.BASE_URL || '/';
};

// Helper to ensure image paths work with base URL
const resolveImagePath = (src: string): string => {
  const baseUrl = getBaseUrl();
  
  // If src already starts with http:// or https://, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If src starts with /, prepend base URL
  if (src.startsWith('/')) {
    // If baseUrl is just '/', use src as-is to avoid double slashes
    if (baseUrl === '/') {
      return src;
    }
    // Otherwise, remove trailing slash from base and prepend
    const base = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    return `${base}${src}`;
  }
  
  // Otherwise, prepend base URL (ensuring no double slashes)
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}${src}`;
};

export function Image({ src, alt, fallbackSrc, className, ...props }: ImageProps) {
  const resolvedSrc = resolveImagePath(src);
  const resolvedFallback = fallbackSrc ? resolveImagePath(fallbackSrc) : undefined;
  
  const [imgSrc, setImgSrc] = useState<string>(resolvedSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (resolvedFallback) {
        setImgSrc(resolvedFallback);
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
}

