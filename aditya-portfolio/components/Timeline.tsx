"use client";

import { motion } from "framer-motion";

export interface TimelineEntry {
  type: "work" | "edu";
  period: string;
  role: string;
  org: string;
  location?: string;
  bullets?: string[];
}

function Tag({ label, type }: { label: string; type: "work" | "edu" }) {
  return (
    <span
      className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border ${
        type === "work"
          ? "border-acid text-acid"
          : "border-muted text-subtle"
      }`}
    >
      {label}
    </span>
  );
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-rule" />

      <div className="space-y-10 pl-7">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <span className="absolute -left-[29px] top-2 w-2 h-2 rounded-full border border-acid bg-bg" />

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Tag
                  label={entry.type === "work" ? "Work" : "Education"}
                  type={entry.type}
                />
                <span className="font-mono text-[11px] text-subtle tracking-wider">
                  {entry.period}
                </span>
              </div>

              <h4 className="font-display text-xl md:text-2xl text-primary tracking-wide leading-none">
                {entry.role}
              </h4>

              <p className="font-mono text-xs text-muted tracking-wide">
                {entry.org}
                {entry.location && ` — ${entry.location}`}
              </p>

              {entry.bullets && (
                <ul className="mt-2 space-y-1">
                  {entry.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="font-body italic text-sm text-subtle flex items-start gap-2"
                    >
                      <span className="text-acid mt-0.5 leading-none select-none">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
