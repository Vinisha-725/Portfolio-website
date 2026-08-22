import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <p className="text-gray-900 dark:text-white font-medium">Vinisha Sahoo</p>
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2026 Vinisha Sahoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
