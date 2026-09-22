"use client";

import { Project } from "@/data/projects";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white/10 dark:bg-gray-900/80 backdrop-blur-md rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-2xl font-bold text-white dark:text-gray-100">{project.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed">
            {project.fullDescription}
          </p>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-400 mb-3 uppercase tracking-wider">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
             {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-white/10 dark:bg-gray-800/50 text-gray-200 dark:text-gray-300 text-sm rounded border border-white/10 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10 dark:border-gray-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/50 text-white dark:text-gray-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/50 text-white dark:text-gray-200 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
