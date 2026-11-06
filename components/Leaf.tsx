export function Leaf({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8 6 4 9 4 14a8 8 0 0 0 16 0c0-5-4-8-8-12z" fill="currentColor" opacity="0.85" />
      <path d="M12 4v16" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
