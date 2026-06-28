"use client";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("gamezone-dark");

  function toggleTheme() {
    const next =
      theme === "gamezone-dark" ? "gamezone-light" : "gamezone-dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <main className="flex flex-col flex-1 items-center px-4 py-12 md:py-20 gap-12 max-w-5xl mx-auto w-full">
      {/* Theme Toggle */}
      <div className="flex items-center gap-4 self-end">
        <span className="text-sm text-base-content/60">{theme}</span>
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline btn-primary rounded-2xl"
        >
          Toggle Theme
        </button>
      </div>

      {/* Typography Scale */}
      <section className="w-full space-y-6">
        <h2 className="border-b border-base-300 pb-2">Typography Scale</h2>
        <div className="space-y-4">
          <h1>H1 — Your Game. Your Time. Your Turf.</h1>
          <h2>H2 — Premium Sports Facility Booking</h2>
          <h3>H3 — Browse, Search, and Book Instantly</h3>
          <h4>H4 — Available Time Slots & Pricing</h4>
          <p className="text-body-lg">
            Body Large — Find the perfect turf, court, or pool near you. Book in
            seconds, play on your schedule.
          </p>
          <p>
            Body — GameZone connects players with top-rated sports facilities
            across the city. Whether you need a turf for a weekend kickabout or a
            badminton court for your league practice, we have you covered.
          </p>
          <p className="text-sm text-base-content/60">
            Small / Secondary — Last booked 3 hours ago
          </p>
          <p className="font-numeric text-4xl font-bold tracking-tight">
            ৳2,450 <span className="text-lg font-normal text-base-content/50">/hr</span>
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section className="w-full space-y-6">
        <h2 className="border-b border-base-300 pb-2">DaisyUI Theme Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            ["Primary", "bg-primary", "text-primary-content"],
            ["Secondary", "bg-secondary", "text-secondary-content"],
            ["Accent", "bg-accent", "text-accent-content"],
            ["Neutral", "bg-neutral", "text-neutral-content"],
            ["Base 100", "bg-base-100", "text-base-content"],
            ["Base 200", "bg-base-200", "text-base-content"],
            ["Base 300", "bg-base-300", "text-base-content"],
            ["Success", "bg-success", "text-success-content"],
            ["Warning", "bg-warning", "text-warning-content"],
            ["Error", "bg-error", "text-error-content"],
            ["Info", "bg-info", "text-info-content"],
          ].map(([label, bg, text]) => (
            <div
              key={label}
              className={`${bg} ${text} rounded-2xl p-4 text-sm font-medium`}
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Custom gz- Palette */}
      <section className="w-full space-y-6">
        <h2 className="border-b border-base-300 pb-2">
          GameZone Custom Tokens
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            ["Charcoal 950", "bg-gz-charcoal-950", "text-white"],
            ["Charcoal 900", "bg-gz-charcoal-900", "text-white"],
            ["Surface 800", "bg-gz-surface-800", "text-white"],
            ["Turf 700", "bg-gz-turf-700", "text-white"],
            ["Turf 500", "bg-gz-turf-500", "text-white"],
            ["Turf 300", "bg-gz-turf-300", "text-black"],
            ["Accent 500", "bg-gz-accent-500", "text-white"],
            ["Accent 400", "bg-gz-accent-400", "text-black"],
            ["Line Marker", "bg-gz-line-marker", "text-black"],
            ["Neutral 200", "bg-gz-neutral-200", "text-black"],
            ["Neutral 500", "bg-gz-neutral-500", "text-white"],
            ["Danger", "bg-gz-danger", "text-white"],
            ["Warning", "bg-gz-warning", "text-black"],
          ].map(([label, bg, text]) => (
            <div
              key={label}
              className={`${bg} ${text} rounded-2xl p-4 text-sm font-medium`}
            >
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section className="w-full space-y-6">
        <h2 className="border-b border-base-300 pb-2">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn btn-accent text-accent-content rounded-2xl">
            Book Now
          </button>
          <button className="btn btn-primary rounded-2xl">Primary</button>
          <button className="btn btn-outline btn-primary rounded-2xl">
            Ghost / Outline
          </button>
          <button className="btn btn-secondary rounded-2xl">Secondary</button>
          <button className="btn btn-error text-error-content rounded-2xl">
            Cancel
          </button>
        </div>
      </section>

      {/* Badges */}
      <section className="w-full space-y-6">
        <h2 className="border-b border-base-300 pb-2">Status Badges</h2>
        <div className="flex flex-wrap gap-4">
          <div className="badge badge-warning gap-1 rounded-full px-3 py-2">
            Pending
          </div>
          <div className="badge badge-success gap-1 rounded-full px-3 py-2">
            Confirmed
          </div>
          <div className="badge badge-error gap-1 rounded-full px-3 py-2">
            Cancelled
          </div>
        </div>
      </section>
    </main>
  );
}
