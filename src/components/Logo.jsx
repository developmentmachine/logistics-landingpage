export function LogoMark({ className = "", title = "运满物流" }) {
  return (
    <svg
      className={`brand-logo ${className}`.trim()}
      viewBox="0 0 48 48"
      width="48"
      height="48"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ymLogoBg" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0a2248" />
          <stop offset="1" stopColor="#1559a8" />
        </linearGradient>
        <linearGradient id="ymLogoAccent" x1="14" y1="28" x2="38" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff8a1f" />
          <stop offset="1" stopColor="#ffb347" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ymLogoBg)" />
      <path
        d="M10 32c6-10 14-14 28-12"
        fill="none"
        stroke="url(#ymLogoAccent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M30 32l6-3.5V22h-4.2l-2.8-4.5H18.5L16 22h-3.5v6.5L10 32h20z"
        fill="#fff"
        opacity="0.96"
      />
      <circle cx="17.5" cy="32.5" r="2.8" fill="#071a34" stroke="#ff8a1f" strokeWidth="1.6" />
      <circle cx="31" cy="32.5" r="2.8" fill="#071a34" stroke="#ff8a1f" strokeWidth="1.6" />
      <path d="M20 22h8v3.2H20z" fill="url(#ymLogoAccent)" />
      <path
        d="M34 14l4 2.2-4 2.2"
        fill="none"
        stroke="#ffb347"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
