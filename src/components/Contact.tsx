"use client";

import SectionHeading from "./SectionHeading";
import { socials } from "@/data/socials";
import { Mail } from "lucide-react";
import FadeIn from "./FadeIn";
import ContactModal from "./ContactModal";
import { useState } from "react";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <SectionHeading>Let's Connect</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in interesting projects, internships, collaborations, and opportunities
            to build something useful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-gray-900/50 backdrop-blur-sm text-gray-200 dark:text-gray-300 rounded-lg border border-white/20 dark:border-gray-700 hover:border-white/30 dark:hover:border-gray-600 hover:shadow-sm transition-all"
              >
                {social.icon === "Mail" && <Mail size={20} />}
                {social.icon === "Github" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                )}
                {social.icon === "Linkedin" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Get In Touch →
          </button>
        </FadeIn>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
