export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#6d28d9" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="icon-accent" x1="40" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="120" height="120" rx="28" fill="url(#logo-grad)" />
      {/* "D" letterform — left vertical + curve */}
      <path
        d="M32 30h16c22 0 34 12 34 30s-12 30-34 30H32V30z"
        fill="none"
        stroke="url(#icon-accent)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "x" letterform — two crossing strokes */}
      <path
        d="M72 52l18 28M90 52L72 80"
        fill="none"
        stroke="url(#icon-accent)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Small diamond accent dot */}
      <rect x="96" y="40" width="8" height="8" rx="2" transform="rotate(45 100 44)" fill="#22d3ee" />
    </svg>
  );
}

export function LogoFull({ iconSize = 40 }: { iconSize?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoIcon size={iconSize} />
      <span className="text-xl font-bold text-white tracking-tight">
        Devni<span className="text-primary-light">x</span>
      </span>
    </span>
  );
}
