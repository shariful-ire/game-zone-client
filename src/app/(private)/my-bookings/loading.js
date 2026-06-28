import { SkeletonRow } from "@/components/ui";

export default function MyBookingsLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="space-y-3 mb-8 animate-pulse">
        <div className="h-8 w-40 bg-base-200 rounded-full" />
        <div className="h-4 w-64 bg-base-200 rounded-full" />
      </div>
      <div className="flex gap-2 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-9 w-20 bg-base-200 rounded-full animate-pulse" />
        ))}
      </div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    </div>
  );
}
