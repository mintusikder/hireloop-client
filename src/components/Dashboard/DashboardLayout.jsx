
"use client";

import { useState } from "react";
import { Menu, Bell } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";

export default function DashboardLayout({ children, role = "job-seeker" }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B16] text-white lg:flex">
      <DashboardSidebar
        role={role}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#0B1020]/90 px-4 backdrop-blur-xl sm:px-7">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-white/10 p-2 text-white/70 hover:bg-white/5 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu size={21} />
            </button>

            <div>
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <p className="hidden text-xs text-white/40 sm:block">
                Manage your HireLoop account
              </p>
            </div>
          </div>

          <button
            className="relative rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5"
            aria-label="Notifications"
          >
            <Bell size={19} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-500" />
          </button>
        </header>

        <main className="p-4 sm:p-7 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
