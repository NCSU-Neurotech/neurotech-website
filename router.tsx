import { createContext, useContext, useEffect, useState } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

// Old ?page= values that existed before the redesign, mapped to their new home.
const LEGACY: Record<string, string> = {
  about: "mission",
  collaborations: "collaborators",
  "collaboration-ant-neuro": "collaborators",
  "collaboration-g-tec-hackathon": "event-spring-hackathon",
  "collaboration-neuropawn": "collaborators",
  "collaboration-idun": "collaborators",
  "project-arduino-switch": "project-hilltop",
  "project-eeg-headset": "projects",
  "project-epilepsy-decoder": "projects",
  "project-eeg-decoder": "projects",
  "project-neural-3d-model": "projects",
  donate: "home",
  donors: "home",
};

const readPage = () => {
  const p = new URLSearchParams(window.location.search).get("page") || "home";
  return LEGACY[p] ?? p;
};

export const hrefFor = (page: string) => (page === "home" ? "?" : `?page=${page}`);

const RouterCtx = createContext<(to: string) => void>(() => {});

export function Router({ children }: { children: (page: string) => ReactNode }) {
  const [page, setPage] = useState(readPage);

  useEffect(() => {
    const onPop = () => setPage(readPage());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const go = (to: string) => {
    const [target, hash] = to.split("#");
    window.history.pushState({}, "", hrefFor(target) + (hash ? `#${hash}` : ""));
    setPage(target);
    if (hash) {
      // wait for the new page to mount before scrolling to the anchor
      setTimeout(() => document.getElementById(hash)?.scrollIntoView(), 0);
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  return <RouterCtx.Provider value={go}>{children(page)}</RouterCtx.Provider>;
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string };

export function Link({ to, onClick, ...rest }: LinkProps) {
  const go = useContext(RouterCtx);
  const [target, hash] = to.split("#");
  return (
    <a
      {...rest}
      href={hrefFor(target) + (hash ? `#${hash}` : "")}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        go(to);
      }}
    />
  );
}
