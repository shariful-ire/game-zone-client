export default function AddFacilityLoading() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="space-y-3 mb-8 animate-pulse">
        <div className="h-8 w-40 bg-base-200 rounded-full" />
        <div className="h-4 w-72 bg-base-200 rounded-full" />
      </div>
      <div className="h-[600px] bg-base-200 rounded-2xl animate-pulse" />
    </div>
  );
}
