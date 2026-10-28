"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BriefcaseBusiness, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Find Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "Career Advice", href: "/career-advice" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <nav
        className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <BriefcaseBusiness size={22} strokeWidth={2.2} />
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-slate-900">
            Hire<span className="text-indigo-600">Loop</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              {item.name}

              {isActive(item.href) && (
                <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-indigo-600" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
          >
            Get Started
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile dropdown: absolute, so page content won't move */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 pb-5 pt-3 shadow-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-100" />

              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Get Started
                <ArrowUpRight size={17} />
              </Link>

              <div className="mt-3 rounded-xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Your next opportunity starts here.
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Discover jobs, explore companies, and grow your career with
                  HireLoop.
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
