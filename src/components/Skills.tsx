"use client";

import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";
import FadeIn from "./FadeIn";
import { useState } from "react";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categoryColors = {
    "Languages": "from-blue-500/20 to-purple-500/20",
    "AI / Machine Learning": "from-pink-500/20 to-rose-500/20",
    "Development": "from-green-500/20 to-emerald-500/20",
    "Databases & Tools": "from-orange-500/20 to-amber-500/20",
  };

  const categoryBorders = {
    "Languages": "border-blue-500/30",
    "AI / Machine Learning": "border-pink-500/30",
    "Development": "border-green-500/30",
    "Databases & Tools": "border-orange-500/30",
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>Skills & Technologies</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category, index) => (
              <FadeIn key={category.category} delay={150 + index * 50}>
                <div
                  className={`group relative bg-gradient-to-br ${categoryColors[category.category as keyof typeof categoryColors]} backdrop-blur-sm rounded-xl p-6 border ${categoryBorders[category.category as keyof typeof categoryBorders]} hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden`}
                  onMouseEnter={() => setHoveredCategory(category.category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <h3 className="text-lg font-bold text-white mb-4 relative z-10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                    {category.category}
                  </h3>
                  
                  <div className="space-y-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-gray-200 group-hover:text-white transition-colors"
                        style={{
                          transitionDelay: `${skillIndex * 50}ms`,
                          opacity: hoveredCategory === category.category ? 1 : 0.7,
                          transform: hoveredCategory === category.category ? 'translateX(5px)' : 'translateX(0)',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Skills Summary */}
          <FadeIn delay={400}>
            <div className="mt-12 bg-white/5 dark:bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">20+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">4</div>
                  <div className="text-gray-400 text-sm">Core Domains</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">∞</div>
                  <div className="text-gray-400 text-sm">Learning</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}
