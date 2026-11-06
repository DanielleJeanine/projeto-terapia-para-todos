export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  const path = flip
    ? "M0,20 C180,0 360,40 540,20 C720,0 900,40 1080,20 L1080,40 L0,40 Z"
    : "M0,20 C180,40 360,0 540,20 C720,40 900,0 1080,20 L1080,40 L0,40 Z";

  return (
    <svg
      className="block w-full h-16 text-cream-deep dark:text-dark-surface"
      viewBox="0 0 1080 40"
      preserveAspectRatio="none"
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
}
