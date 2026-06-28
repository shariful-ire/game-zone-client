export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center gap-8 py-20">
      <h1 className="font-heading text-5xl font-bold text-primary">
        GameZone
      </h1>
      <p className="text-base-content/70 text-lg max-w-md text-center">
        Your Game. Your Time. Your Turf.
      </p>
      <div className="flex gap-4">
        <button className="btn btn-accent text-accent-content rounded-2xl">
          Explore Facilities
        </button>
        <button className="btn btn-outline btn-primary rounded-2xl">
          List Your Facility
        </button>
      </div>
      <div className="flex gap-6 mt-8">
        <div className="badge badge-primary">Primary</div>
        <div className="badge badge-secondary">Secondary</div>
        <div className="badge badge-accent">Accent</div>
        <div className="badge badge-success">Success</div>
        <div className="badge badge-warning">Warning</div>
        <div className="badge badge-error">Error</div>
      </div>
    </main>
  );
}
