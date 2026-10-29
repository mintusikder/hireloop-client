
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const footerLinks = {
  "For Job Seekers": [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Explore Companies", href: "/companies" },
    { name: "Career Advice", href: "/career-advice" },
    { name: "My Applications", href: "/applications" },
  ],
  "For Employers": [
    { name: "Post a Job", href: "/employer/post-job" },
    { name: "Browse Candidates", href: "/candidates" },
    { name: "Recruitment Solutions", href: "/employer/solutions" },
    { name: "Employer Sign In", href: "/employer/login" },
  ],
  "Quick Links": [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Help Center", href: "/help" },
    { name: "FAQs", href: "/faqs" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
];

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand and description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                <BriefcaseBusiness size={22} strokeWidth={2.2} />
              </span>

              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Hire<span className="text-indigo-600">Loop</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Your next opportunity is closer than you think. Discover
              exciting careers, connect with great companies, and build
              a future that inspires you.
            </p>

            <Link
              href="/jobs"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Explore Opportunities
              <ArrowUpRight size={17} />
            </Link>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h3 className="text-sm font-bold text-slate-900">
                {title}
              </h3>

              <ul className="mt-5 space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-indigo-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact information */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-slate-900">
              Get in Touch
            </h3>

            <ul className="mt-5 space-y-5">
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <div>
                  <p className="text-xs text-slate-400">Email us</p>
                  <a
                    href="mailto:support@hireloop.com"
                    className="mt-1 break-all text-sm text-slate-600 hover:text-indigo-600"
                  >
                    support@hireloop.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <div>
                  <p className="text-xs text-slate-400">Call us</p>
                  <a
                    href="tel:+8801000000000"
                    className="mt-1 text-sm text-slate-600 hover:text-indigo-600"
                  >
                    +880 1000-000000
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-indigo-600"
                />
                <div>
                  <p className="text-xs text-slate-400">Our location</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Bangladesh
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-14 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} HireLoop. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition hover:text-indigo-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-slate-500 transition hover:text-indigo-600"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-sm text-slate-500 transition hover:text-indigo-600"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
