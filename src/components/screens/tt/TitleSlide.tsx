import { useState } from "react";
import { Copy, Check, Users, Sparkles } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useSession } from "@/contexts/SessionContext";
import { usePresentationMode } from "@/contexts/PresentationModeContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getPublicOrigin } from "@/lib/publicUrl";

export const TitleSlide = () => {
  const { session, isParticipant, participantCount } = useSession();
  const { presenterName, presenterCompany, eventName } = usePresentationMode();
  const [copied, setCopied] = useState(false);

  const joinUrl = session
    ? `${getPublicOrigin()}/?join=${session.code}`
    : "";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(joinUrl);
      setCopied(true);
      toast.success("Link copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center animate-fade-in relative overflow-hidden min-h-0 bg-iqa-hero">
      {/* Event wordmark — top right */}
      <div className="absolute top-8 right-8 md:top-12 md:right-14 z-20 text-right leading-tight">
        <p className="slide-body font-display font-bold text-spotlight tracking-[0.18em]">
          WSHMMA
        </p>
        <p className="font-display text-foreground/70 text-sm md:text-base tracking-[0.22em] uppercase">
          2026
        </p>

      </div>


      {/* Content */}
      <div
        className="relative z-10 w-full mx-auto px-12 md:px-20 flex flex-col items-center justify-center text-center gap-8 pt-16"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        {/* Event badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 bg-foreground/10 rounded-full border border-spotlight/40 backdrop-blur-sm">
          <Sparkles className="h-5 w-5 text-spotlight" />
          <span className="slide-caption text-foreground text-base font-body tracking-[0.2em] uppercase">
            {eventName}
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-display font-bold leading-[0.9] tracking-tight uppercase">
          <span className="slide-title block text-foreground font-light normal-case italic font-serif">AI for</span>
          <span className="slide-title-lg block md:text-[9rem] -mt-2 text-spotlight spotlight-glow">
            All Minds,
          </span>
          <span className="slide-title-lg block md:text-[9rem] -mt-4 text-foreground">
            Every Team<span className="text-accent">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="slide-body-lg text-foreground/90 font-light max-w-5xl tracking-tight">
          From the buyer's desk to the boardroom — directing AI as an ensemble, not a tool
        </p>

        {/* Presenter */}
        <div className="flex flex-col items-center gap-1 pt-4">
          <span className="slide-chrome uppercase tracking-[0.3em] text-foreground/50">Director</span>
          <span className="slide-body text-foreground font-semibold font-display">{presenterName}</span>
          <span className="slide-caption text-foreground/60">{presenterCompany}</span>
        </div>

        {isParticipant && (
          <div className="bg-foreground/10 rounded-2xl px-6 py-4 border border-spotlight/40 text-center mt-2 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 text-foreground mb-1">
              <Sparkles className="h-5 w-5 text-spotlight" />
              <span className="slide-caption font-semibold">You're in the cast!</span>
            </div>
            <p className="slide-chrome text-foreground/60">
              Keep this screen handy — we'll use it for interactive moments.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
