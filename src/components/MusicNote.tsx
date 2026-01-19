import { CSSProperties } from "react";

interface MusicNoteProps {
  className?: string;
  variant?: "quarter" | "eighth" | "bass";
  style?: CSSProperties;
}

const MusicNote = ({ className = "", variant = "quarter", style }: MusicNoteProps) => {
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

  if (variant === "eighth") {
    // Eighth note with flag
    return (
      <svg
        viewBox="0 0 24 32"
        fill="currentColor"
        className={className}
        style={style}
        aria-hidden="true"
      >
        {/* Note head - tilted ellipse */}
        <ellipse cx="8" cy="26" rx="6" ry="4" transform="rotate(-20 8 26)" />
        {/* Stem */}
        <rect x="13" y="4" width="2" height="23" />
        {/* Flag */}
        <path d="M15 4 Q22 8 18 16 Q20 12 15 10 Z" />
      </svg>
    );
  }

  // Quarter note (default) - clean standard notation
  return (
    <svg
      viewBox="0 0 24 32"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* Note head - tilted ellipse like real notation */}
      <ellipse cx="8" cy="26" rx="6" ry="4" transform="rotate(-20 8 26)" />
      {/* Stem */}
      <rect x="13" y="4" width="2" height="23" />
    </svg>
  );
};

export default MusicNote;
