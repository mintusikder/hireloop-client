
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const trendingJobs = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

const particles = [
  { left: "8%", top: "78%", size: 3 },
  { left: "16%", top: "65%", size: 2 },
  { left: "22%", top: "84%", size: 3 },
  { left: "30%", top: "70%", size: 2 },
  { left: "38%", top: "89%", size: 3 },
  { left: "45%", top: "76%", size: 2 },
  { left: "53%", top: "84%", size: 3 },
  { left: "61%", top: "72%", size: 2 },
  { left: "68%", top: "87%", size: 3 },
  { left: "75%", top: "68%", size: 2 },
  { left: "83%", top: "79%", size: 3 },
  { left: "92%", top: "71%", size: 2 },
  { left: "13%", top: "91%", size: 2 },
  { left: "36%", top: "62%", size: 2 },
  { left: "72%", top: "57%", size: 2 },
  { left: "88%", top: "90%", size: 3 },
];

export default function HomeHero() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("keyword", keyword.trim());
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    router.push(`/jobs${params.toString() ? `?${params}` : ""}`);
  };

  const handleTrending = (job) => {
    setKeyword(job);

    const params = new URLSearchParams();
    params.set("keyword", job);

    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative isolate min-h-[540px] overflow-hidden bg-[#050507] text-white sm:min-h-[570px] lg:min-h-[610px]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(91,60,255,0.27),transparent_52%)]" />

        <div className="absolute -bottom-48 left-1/2 h-[360px] w-[650px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[110px]" />

        <div className="absolute -top-40 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[100px]" />

        {/* Floating particles */}
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-indigo-400/60 shadow-[0_0_12px_rgba(129,140,248,0.65)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Jobs badge */}
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
          <BriefcaseBusiness
            size={18}
            className="text-orange-300"
          />

          <span className="font-mono text-xs font-bold tracking-wider text-white sm:text-sm">
            50,000+
          </span>

          <span className="font-mono text-xs tracking-wide text-white/50 sm:text-sm">
            NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
          Find Your Dream Job{" "}
          <span className="bg-gradient-to-r from-white via-white to-indigo-300 bg-clip-text text-transparent">
            Today
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your next
          role — faster.
        </p>

        {/* Job search */}
        <form
          onSubmit={handleSearch}
          className="mt-9 flex w-full max-w-[600px] flex-col gap-2 rounded-2xl border border-white/15 bg-[#111113] p-2 shadow-[0_12px_50px_rgba(0,0,0,0.3)] sm:h-[58px] sm:flex-row sm:items-center sm:gap-0 sm:rounded-xl"
        >
          {/* Job keyword */}
          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-3">
            <Search
              size={20}
              className="shrink-0 text-white/80"
            />

            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Job title, skill or company"
              aria-label="Job title, skill or company"
              className="h-10 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/45 focus:placeholder:text-white/30"
            />
          </div>

          <div className="hidden h-7 w-px bg-white/15 sm:block" />

          {/* Location */}
          <div className="flex min-w-0 flex-1 items-center gap-2.5 border-t border-white/10 px-3 pt-2 sm:border-t-0 sm:pt-0">
            <MapPin
              size={20}
              className="shrink-0 text-white/80"
            />

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              aria-label="Location or Remote"
              className="h-10 w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-white/45 focus:placeholder:text-white/30"
            />
          </div>

          {/* Search button */}
          <button
            type="submit"
            aria-label="Search jobs"
            className="flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 active:scale-[0.98] sm:h-10 sm:w-10 sm:rounded-lg"
          >
            <Search size={20} />
            <span className="text-sm font-semibold sm:hidden">
              Search Jobs
            </span>
          </button>
        </form>

        {/* Trending jobs */}
        <div className="mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs font-medium text-white/50 sm:text-sm">
            Trending Position
          </span>

          {trendingJobs.map((job) => (
            <button
              key={job}
              type="button"
              onClick={() => handleTrending(job)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-white/80 transition hover:border-indigo-400/40 hover:bg-indigo-500/15 hover:text-white"
            >
              {job}
              <ArrowUpRight
                size={12}
                className="text-white/40"
              />
            </button>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-9 text-xs text-white/35">
          Your next opportunity starts with one search.
        </p>
      </div>
    </section>
  );
}
