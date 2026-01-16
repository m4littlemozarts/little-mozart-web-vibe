import MusicNote from "./MusicNote";

interface DecorativeDividerProps {
  className?: string;
}

const DecorativeDivider = ({ className = "" }: DecorativeDividerProps) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-border max-w-24" />
      <MusicNote className="w-4 h-6 text-golden" />
      <div className="flex-1 h-px bg-border max-w-24" />
    </div>
  );
};

export default DecorativeDivider;
