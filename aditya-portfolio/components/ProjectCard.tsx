"use client";

import { motion } from "framer-motion";

export interface Project {
  index: string;       // e.g. "01"
  title: string;
  description: string;
  stack: string[];
  year: string;
  link?: string;
}

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="project-card group border border-rule p-6 md:p-8 flex flex-col gap-5 cursor-default"
    >
      {/* Header Row */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted tracking-widest">{project.index}</span>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl md:text-3xl tracking-wide text-primary leading-none group-hover:text-acid transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-ash text-sm md:text-base leading-relaxed italic">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-muted text-subtle"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Optional Link Arrow */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-muted hover:text-acid transition-colors duration-200 mt-1 inline-flex items-center gap-1"
        >
          View project <span className="text-base leading-none">↗</span>
        </a>
      )}
    </motion.div>
  );
}
