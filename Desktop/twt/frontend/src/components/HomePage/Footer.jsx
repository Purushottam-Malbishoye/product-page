import React from "react";
import { Linkedin, Instagram, X, Youtube } from "lucide-react"; // lucide-react icons [web:95][web:96][web:97][web:98][web:106]

const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
  >
    {children}
  </a>
);

const FooterCol = ({ title, links }) => (
  <div>
    <div className="text-gray-300 font-medium mb-4">{title}</div>
    <ul className="space-y-3 text-gray-400">
      {links.map((l) => (
        <li key={l.label}>
          <a className="hover:text-white transition" href={l.href}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Big rounded card footer */}
        <div className="glass-strong rounded-[44px] px-10 md:px-14 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left brand block */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary-pink to-primary-teal" />
                <div className="text-white font-semibold text-2xl">
                  FirstScience AI
                </div>
              </div>

              <p className="text-gray-400 mt-6 max-w-sm">
                Built for outreach. Made to close deals.
              </p>

              {/* Social icons BELOW logo/subtext (left side) */}
              <div className="flex items-center gap-3 mt-6">
                <SocialIcon href="https://linkedin.com" label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="https://x.com" label="X">
                  <X className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="https://youtube.com" label="YouTube">
                  <Youtube className="h-4 w-4" />
                </SocialIcon>
              </div>
            </div>

            {/* Link columns (like your reference) */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
              <FooterCol
                title="Product"
                links={[
                  { label: "Home", href: "#" },
                  { label: "Integrations", href: "#features" },
                  { label: "Experts", href: "#how" },
                  { label: "Pricing", href: "#pricing" },
                ]}
              />
              <FooterCol
                title="Company"
                links={[
                  { label: "Roadmap", href: "#" },
                  { label: "Helpdesk", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Affiliate", href: "#" },
                ]}
              />
              <FooterCol
                title="Developers"
                links={[
                  { label: "API Docs", href: "#" },
                  { label: "Status", href: "#" },
                  { label: "Changelog", href: "#" },
                ]}
              />
            </div>
          </div>

          {/* Divider + bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Tigerworld Technologies Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <a className="hover:text-white transition" href="#">
                Terms Of Service
              </a>
              <a className="hover:text-white transition" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
