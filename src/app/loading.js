export default function RootLoading() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-10 h-10 text-primary animate-pulse"
        >
          <rect x="2" y="8" width="4" height="20" rx="2" fill="currentColor" />
          <rect x="26" y="8" width="4" height="20" rx="2" fill="currentColor" />
          <rect x="6" y="8" width="20" height="4" rx="1" fill="currentColor" />
          <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <p className="text-sm text-base-content/40">Loading...</p>
      </div>
    </div>
  );
}
