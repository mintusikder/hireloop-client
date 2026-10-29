
import {
  BriefcaseBusiness,
  Building2,
  UsersRound,
  Star,
} from "lucide-react";

const stats = [
  { label: "Active Jobs", value: "50K", icon: BriefcaseBusiness },
  { label: "Companies", value: "12K", icon: Building2 },
  { label: "Job Seekers", value: "15K+", icon: UsersRound },
  { label: "Satisfaction Rate", value: "97%", icon: Star },
];

export default function HomeStats() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#030308] text-white sm:min-h-[720px] lg:min-h-[780px]">
      {/* Earth background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/globe')",
          backgroundPosition: "center 43%",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030308]/10 via-[#030308]/20 to-[#030308]" />

      {/* Purple glow */}
      <div className="pointer-events-none absolute inset-x-0 top-[25%] z-[2] mx-auto h-72 w-[80%] rounded-full bg-indigo-600/20 blur-[110px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-12 pt-[300px] sm:px-6 sm:pt-[340px] lg:px-10 lg:pb-16 lg:pt-[380px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="text-3xl font-medium leading-tight tracking-tight text-white/80 sm:text-4xl lg:text-[42px]">
            Assisting over{" "}
            <span className="text-white">15,000 job seekers</span>
            <br className="hidden sm:block" />{" "}
            <span className="text-white/80">
              find their dream positions.
            </span>
          </p>
        </div>

        {/* Bigger statistic cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 via-[#101013]/95 to-[#1c1c20]/95 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/50 hover:shadow-[0_20px_60px_rgba(79,70,229,0.18)] sm:min-h-[235px] sm:p-7 lg:min-h-[250px] lg:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                <Icon
                  size={23}
                  strokeWidth={1.8}
                  className="text-white transition-colors group-hover:text-indigo-300"
                />
              </div>

              <div>
                <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  {value}
                </p>

                <p className="mt-4 text-sm font-medium text-white/75 sm:text-base">
                  {label}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
