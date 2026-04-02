import { useCallback, useState } from "react";
import { Megaphone, X } from "lucide-react";

interface GtecHackathonBannerProps {
  onNavigate: (page: string) => void;
}

export function GtecHackathonBanner({ onNavigate }: GtecHackathonBannerProps) {
  const [visible, setVisible] = useState(true);

  const dismiss = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div className="border-b-4 border-amber-500 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50 text-gray-900 shadow-[0_6px_24px_rgba(180,83,9,0.25)]">
      <div className="container mx-auto flex items-start gap-3 px-4 py-4 md:items-center md:gap-4 md:py-3.5">
        <div
          className="hidden shrink-0 rounded-full bg-amber-500/30 p-2 text-amber-950 md:flex"
          aria-hidden
        >
          <Megaphone className="h-6 w-6" />
        </div>
        <button
          type="button"
          onClick={() => onNavigate("collaboration-g-tec-hackathon")}
          className="min-w-0 flex-1 text-left text-sm leading-snug transition-opacity hover:opacity-85 md:text-base"
        >
          <span className="font-bold tracking-tight text-amber-950">
            Upcoming: g.tec Hackathon
          </span>
          <span className="text-gray-800">
            {" "}
            — April 25–26, 2026 · Tap for details.
          </span>
        </button>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss hackathon announcement"
          className="shrink-0 rounded-md p-2 text-amber-950 transition-colors hover:bg-amber-500/25 focus:outline-none focus:ring-2 focus:ring-amber-700/40"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
