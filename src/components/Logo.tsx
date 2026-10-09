interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IFFI Media Logo"
    >
      {/* 
        Unique IFFI Media symbol: 
        An abstract geometric mark combining an ascending growth arrow 
        with a media/signal element — representing digital growth and connectivity.
      */}
      
      {/* Base geometric form — angular ascending shape */}
      <path
        d="M8 40L24 8L40 40H32L24 24L16 40H8Z"
        fill="url(#iffiGradient)"
      />
      
      {/* Inner accent — represents signal/connectivity */}
      <path
        d="M20 32L24 24L28 32"
        stroke="#0a0a0b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Top accent dot — represents the "i" in IFFI and digital precision */}
      <circle
        cx="24"
        cy="14"
        r="2.5"
        fill="#0a0a0b"
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="iffiGradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c8ff00" />
          <stop offset="50%" stopColor="#b3e600" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
