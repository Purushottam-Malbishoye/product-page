import React from "react";
import { Linkedin, Instagram, X, Youtube } from "lucide-react"; // lucide-react icons [web:95][web:96][web:97][web:98][web:106]

const SocialIcon = ({ href, children, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 hover:text-orange-500 hover:bg-gray-600/50 transition-colors duration-200"
  >
    {children}
  </a>
);

const FooterCol = ({ title, links }) => (
  <div>
    <div className="text-white font-semibold mb-4">{title}</div>
    <ul className="space-y-3 text-gray-400">
      {links.map((l) => (
        <li key={l.label}>
          <a className="hover:text-orange-500 transition-colors duration-200" href={l.href}>
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
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl px-10 md:px-14 py-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left brand block */}
            <div className="md:col-span-5">
              {/* <div className="flex items-center gap-3"> */}
                {/* <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary-pink to-primary-teal" /> */}
                {/* <div className="text-white font-semibold text-2xl">
                  FirstScience AI
                </div> */}
              {/* </div> */}

              {/* <p className="text-gray-400 mt-6 max-w-sm">
                Built for outreach. Made to close deals.
              </p> */}

            

               <h3 className="text-white text-2xl font-semibold mb-4">
    FirstScience AI
  </h3>

  <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
    The world's most intelligent AI Sales Development Representative.
    We help companies book more qualified meetings without the overhead
    of traditional SDR teams.
  </p>

  <div className="text-gray-400 text-sm space-y-1">
    <p>123 AI Boulevard, Suite 100</p>
    <p>San Francisco, CA 94105</p>
    <p>hello@firstscience.ai</p>
  </div>

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
  title="Company"
  links={[
    { label: "About Us", href: "#" },
    { label: "Leadership Team", href: "#leadership" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ]}
/>

<FooterCol
  title="Solutions"
  links={[
    { label: "Outbound SDR", href: "#" },
    { label: "Lead Generation", href: "#" },
    { label: "Email Automation", href: "#" },
    { label: "Meeting Booking", href: "#" },
  ]}
/>

<FooterCol
  title="Industries & Support"
  links={[
    { label: "SaaS", href: "#" },
    { label: "FinTech", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
  ]}
/>


            </div>
          </div>

          {/* Divider + bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FirstScience AI. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a className="hover:text-orange-500 transition-colors duration-200" href="/terms">
                Terms Of Service
              </a>
              <a className="hover:text-orange-500 transition-colors duration-200" href="/privacy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



