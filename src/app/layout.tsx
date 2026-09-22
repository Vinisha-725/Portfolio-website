import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinisha Sahoo | AI/ML & Software Engineering",
  description: "Portfolio of Vinisha Sahoo, a Computer Science & AI/ML student building intelligent systems and modern software applications.",
  openGraph: {
    title: "Vinisha Sahoo | AI/ML & Software Engineering",
    description: "Portfolio of Vinisha Sahoo, a Computer Science & AI/ML student building intelligent systems and modern software applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
