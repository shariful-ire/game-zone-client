"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "All Facilities", href: "/facilities" },
];

const PRIVATE_LINKS = [
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Add Facility", href: "/add-facility" },
  { label: "Manage Facilities", href: "/manage-facilities" },
];

function LogoIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="8" width="4" height="20" rx="2" fill="currentColor" />
      <rect x="26" y="8" width="4" height="20" rx="2" fill="currentColor" />
      <rect x="6" y="8" width="20" height="4" rx="1" fill="currentColor" />
      <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Navbar({ user = null, onMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-base-content/5 ${
        scrolled
          ? "bg-base-100/95 backdrop-blur-md py-2 shadow-lg shadow-black/10"
          : "bg-base-100 py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoIcon
            className={`text-primary transition-all duration-300 ${
              scrolled ? "w-7 h-7" : "w-8 h-8"
            }`}
          />
          <span
            className={`font-heading font-bold text-base-content tracking-tight transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
            Game<span className="text-primary">Zone</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors rounded-xl"
            >
              {link.label}
            </Link>
          ))}
          {user &&
            PRIVATE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-base-content/70 hover:text-primary transition-colors rounded-xl"
              >
                {link.label}
              </Link>
            ))}
        </div>

        {/* Right Side: Auth + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Logged-out: Login button */}
          {!user && (
            <Link href="/login">
              <Button variant="accent" size="sm">
                Login
              </Button>
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden btn btn-ghost btn-sm btn-square rounded-xl"
            onClick={onMobileMenuOpen}
            aria-label="Open menu"
          >
            <RiMenuLine className="text-xl" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export { NAV_LINKS, PRIVATE_LINKS };
