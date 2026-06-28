export default function SkeletonRow({ className = "" }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 bg-base-200 rounded-2xl animate-pulse ${className}`}
    >
      <div className="w-16 h-16 bg-base-300 rounded-xl shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/3 bg-base-300 rounded-full" />
        <div className="h-3 w-1/3 bg-base-300 rounded-full" />
      </div>
      <div className="h-6 w-16 bg-base-300 rounded-full shrink-0" />
    </div>
  );
}
