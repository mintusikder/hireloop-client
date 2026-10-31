import {
  BriefcaseBusiness,
  FileText,
  Bookmark,
  Eye,
} from "lucide-react";

const stats = [
  {
    title: "Applied Jobs",
    value: "24",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    title: "Saved Jobs",
    value: "12",
    icon: Bookmark,
    color: "text-purple-400",
  },
  {
    title: "Interviews",
    value: "05",
    icon: Eye,
    color: "text-emerald-400",
  },
  {
    title: "Available Jobs",
    value: "120",
    icon: BriefcaseBusiness,
    color: "text-orange-400",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Welcome to HireLoop 👋
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Here is what's happening with your job search.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-indigo-500/40"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/50">
                  {stat.title}
                </p>
                <Icon className={stat.color} size={22} />
              </div>

              <h2 className="mt-5 text-3xl font-bold">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="text-lg font-semibold">
          Recent Activity
        </h2>
        <p className="mt-3 text-sm text-white/45">
          Your recent job applications will appear here.
        </p>
      </div>
    </div>
  );
}