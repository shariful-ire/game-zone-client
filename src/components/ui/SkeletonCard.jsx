export default function SkeletonCard({ className = "" }) {
  return (
    <div
      className={`bg-base-200 rounded-2xl overflow-hidden animate-pulse ${className}`}
    >
      <div className="w-full h-48 bg-base-300" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-16 bg-base-300 rounded-full" />
        <div className="h-5 w-3/4 bg-base-300 rounded-full" />
        <div className="h-3 w-1/2 bg-base-300 rounded-full" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-5 w-20 bg-base-300 rounded-full" />
          <div className="h-9 w-24 bg-base-300 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
