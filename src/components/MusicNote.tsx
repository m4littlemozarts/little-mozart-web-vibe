import { CSSProperties } from "react";

interface MusicNoteProps {
  className?: string;
  variant?: "note" | "treble" | "bass";
  style?: CSSProperties;
}

const MusicNote = ({ className = "", variant = "note", style }: MusicNoteProps) => {
  if (variant === "treble") {
    return (
      <svg
        viewBox="0 0 24 48"
        fill="currentColor"
        className={className}
        style={style}
        aria-hidden="true"
      >
        <path d="M12 0C12 0 8 8 8 16C8 20 10 22 12 24C10 26 8 30 8 34C8 40 12 44 16 44C20 44 22 40 22 36C22 32 18 30 16 30C14 30 12 32 12 34C12 36 14 38 16 38C15 42 12 42 12 38C12 34 16 32 18 32C20 32 24 34 24 38C24 44 18 48 12 48C6 48 0 44 0 36C0 28 6 24 12 20C10 18 8 16 8 12C8 6 12 0 12 0Z" />
      </svg>
    );
  }

  if (variant === "bass") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
        aria-hidden="true"
      >
        <circle cx="8" cy="16" r="6" />
        <path d="M14 8C18 8 20 12 20 16" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="22" cy="10" r="2" />
        <circle cx="22" cy="14" r="2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <ellipse cx="8" cy="26" rx="6" ry="5" />
      <rect x="12" y="4" width="3" height="24" />
      <path d="M15 4C15 4 22 6 22 12C22 18 15 16 15 16" />
    </svg>
  );
};

export default MusicNote;
