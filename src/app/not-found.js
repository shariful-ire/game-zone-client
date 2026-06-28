import Link from "next/link";

function StrayBallIllustration() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className="w-48 h-48 mx-auto mb-6"
      aria-hidden="true"
    >
      {/* Ground line */}
      <path
        d="M20 160 H180"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 6"
        className="text-base-content/10"
      />
      {/* Ball */}
      <circle cx="100" cy="100" r="30" className="fill-primary/20 stroke-primary" strokeWidth="2" />
      <path d="M85 85 Q100 95 115 85" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
      <path d="M85 115 Q100 105 115 115" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
      <path d="M70 100 Q80 90 80 75" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
      <path d="M130 100 Q120 90 120 75" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary/40" />
      {/* Bounce marks */}
      <path d="M60 145 Q70 130 80 145" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-base-content/15" />
      <path d="M40 150 Q48 140 56 150" stroke="currentColor" strokeWidth="1" fill="none" className="text-base-content/10" />
      {/* Question mark */}
      <text x="145" y="75" className="fill-base-content/15" fontSize="36" fontFamily="var(--font-heading)" fontWeight="700">?</text>
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
      <StrayBallIllustration />
      <h1 className="text-2xl! md:text-3xl! mb-3">
        Out of Bounds!
      </h1>
      <p className="text-base-content/50 max-w-sm mb-8">
        Looks like this court doesn&apos;t exist. The page you&apos;re looking
        for may have been moved or removed.
      </p>
      <Link
        href="/"
        className="btn btn-accent text-accent-content rounded-2xl"
      >
        Back to Home
      </Link>
    </main>
  );
}
