"use client";

import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | any>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading>Selected Projects</SectionHeading>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={150 + index * 50}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/5 dark:bg-gray-900/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-gray-700 hover:bg-white/10 dark:hover:bg-gray-900/50 hover:border-white/20 dark:hover:border-gray-600 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
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
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
