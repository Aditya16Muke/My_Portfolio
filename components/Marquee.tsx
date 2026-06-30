"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  rowA: string[];
  rowB: string[];
}

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2 mr-4 border border-rule rounded-none font-mono text-xs tracking-widest uppercase text-ash whitespace-nowrap hover:text-acid hover:border-acid transition-colors duration-200 cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-muted inline-block" />
      {label}
    </span>
  );
}

export default function Marquee({ rowA, rowB }: MarqueeProps) {
  /* Duplicate arrays so the loop appears seamless */
  const doubleA = [...rowA, ...rowA];
  const doubleB = [...rowB, ...rowB];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden py-2 space-y-4"
    >
      {/* Row A → scrolls left */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex animate-scroll-left">
          {doubleA.map((skill, i) => (
            <SkillPill key={`a-${i}`} label={skill} />
          ))}
        </div>
      </div>

      {/* Row B → scrolls right */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex animate-scroll-right">
          {doubleB.map((skill, i) => (
            <SkillPill key={`b-${i}`} label={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
