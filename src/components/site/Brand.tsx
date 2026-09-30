import logo from "@/assets/nxtquik-wordmark.png";
import mark from "@/assets/nxtquik-mark.png";
import markTransparent from "@/assets/nxtquik-mark-transparent.png";

export function Wordmark({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="NxtQuik technology and growth company logo"
      className={`w-auto ${className}`}
      loading="eager"
    />
  );
}

export function Mark({
  className = "h-8",
  transparent = false,
}: {
  className?: string;
  transparent?: boolean;
}) {
  return (
    <img
      src={transparent ? markTransparent : mark}
      alt=""
      aria-hidden
      className={`w-auto ${className}`}
    />
  );
}
