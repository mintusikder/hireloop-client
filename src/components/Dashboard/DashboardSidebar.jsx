
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  FileText,
  Bookmark,
  BriefcaseBusiness,
  Users,
  PlusCircle,
  UserRound,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const jobSeekerLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Find Jobs", href: "/dashboard/jobs", icon: Search },
  { name: "My Applications", href: "/dashboard/applications", icon: FileText },
  { name: "Saved Jobs", href: "/dashboard/saved-jobs", icon: Bookmark },
];

const recruiterLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Post a Job", href: "/dashboard/post-job", icon: PlusCircle },
  { name: "My Jobs", href: "/dashboard/my-jobs", icon: BriefcaseBusiness },
  { name: "Applicants", href: "/dashboard/applicants", icon: Users },
];

export default function DashboardSidebar({
  role = "job-seeker",
  open = false,
  onClose = () => {},
}) {
  const pathname = usePathname();

  const links =
    role === "recruiter" ? recruiterLinks : jobSeekerLinks;

  return (
    <>
      {open && (
        <button
          onClick={onClose}
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-[#0B1020] text-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
              <BriefcaseBusiness size={22} />
            </span>
            <span className="text-2xl font-extrabold">
              Hire<span className="text-indigo-400">Loop</span>
            </span>
          </Link>

          <button
            onClick={onClose}
            className="text-white/60 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-7 overflow-y-auto px-4 py-7">
          <div>
            <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-white/35">
              Main Menu
            </p>

            <div className="space-y-1.5">
              {links.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href === "/dashboard"
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                        : "text-white/55 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={19} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-white/35">
              Account
            </p>

            <div className="space-y-1.5">
              <Link
                href="/dashboard/profile"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
              >
                <UserRound size={19} />
                My Profile
              </Link>

              <Link
                href="/dashboard/settings"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
              >
                <Settings size={19} />
                Settings
              </Link>
            </div>
          </div>
        </nav>

        {/* Role and Logout */}
        <div className="border-t border-white/10 p-4">
          <div className="mb-3 rounded-xl bg-white/5 p-3">
            <p className="text-xs text-white/40">Account Type</p>
            <p className="mt-1 text-sm font-semibold capitalize text-indigo-300">
              {role === "recruiter" ? "Recruiter" : "Job Seeker"}
            </p>
          </div>

          <button
            onClick={() => {
              // Add Better Auth sign-out action here
            }}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={19} />
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}
