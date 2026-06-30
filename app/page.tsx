"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import NavBar       from "@/components/NavBar";
import Marquee      from "@/components/Marquee";
import Timeline     from "@/components/Timeline";
import ProjectCard  from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";
import type { TimelineEntry } from "@/components/Timeline";
import type { Project }       from "@/components/ProjectCard";

/* ─── DATA ───────────────────────────────────────────────────────────────────── */

const SKILLS_ROW_A = [
  "C",
  "C++",
  "Python",
  "Java",
  "WordPress",
  "Web Development",
  "HTML & CSS",
  "Problem Solving",
];

const SKILLS_ROW_B = [
  "Data Science",
  "Machine Learning",
  "AI / ML Concepts",
  "Adaptability",
  "Team Collaboration",
  "Version Control",
  "Linux Basics",
  "Quick Learning",
];

const TIMELINE: TimelineEntry[] = [
  {
    type: "work",
    period: "Jun 2025 — Aug 2025",
    role: "Web Development Intern",
    org: "Teztecch",
    location: "Nagpur, India",
    bullets: [
      "Designed, customised, and managed WordPress sites for real client deliverables.",
      "Collaborated cross-functionally to ship functional, client-focused web solutions.",
      "Sharpened adaptability and problem-solving in a fast-paced production environment.",
    ],
  },
  {
    type: "edu",
    period: "Ongoing",
    role: "Diploma in Computer Engineering",
    org: "Polytechnic / Technical Institute",
    location: "Wardha, Maharashtra",
    bullets: [
      "Core coursework: Data Structures, OOP, Operating Systems, DBMS.",
      "Building a strong foundation in C, C++, Java, and Python.",
    ],
  },
];

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "WordPress Client Sites",
    description:
      "Designed and deployed production-ready WordPress websites during my internship at Teztecch — handling theme customisation, plugin integration, and client feedback cycles.",
    stack: ["WordPress", "PHP", "CSS", "UI/UX"],
    year: "2025",
  },
  {
    index: "02",
    title: "Python Data Explorer",
    description:
      "A personal learning project exploring core data-science workflows — loading CSV datasets, computing statistics, and visualising trends using Python fundamentals.",
    stack: ["Python", "CSV", "Pandas (learning)", "Matplotlib"],
    year: "2025",
  },
  {
    index: "03",
    title: "C++ CLI Utilities",
    description:
      "Collection of command-line programs built to practise algorithmic thinking — sorting visualisers, a student grade manager, and a basic inventory tracker.",
    stack: ["C++", "CLI", "OOP", "File I/O"],
    year: "2024",
  },
  {
    index: "04",
    title: "Java Console Apps",
    description:
      "Object-oriented Java mini-projects covering inheritance, polymorphism, and exception handling, including a simple bank account simulation.",
    stack: ["Java", "OOP", "Console I/O"],
    year: "2024",
  },
];

/* ─── ANIMATIO VARIANTS ─────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    } 
  },
};

/* ─── PAGE ───────────────────────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 0.6], ["0%", "8%"]);

  return (
    <>
      <NavBar />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 md:px-12 pt-28 pb-12"
      >
        {/* Background grid lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.18,
          }}
        />

        {/* Top meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-between z-10"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-subtle">
            Portfolio — 2025
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-subtle hidden md:block">
            Wardha, Maharashtra, IN
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-subtle">
            v1.0
          </span>
        </motion.div>

        {/* Hero name */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 my-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-subtle mb-4">
              <span className="text-acid">✦</span> Aditya Muke
            </p>

            {/* Massive name display */}
            <h1
              className="font-display leading-none tracking-tighter text-primary select-none"
              style={{ fontSize: "clamp(4rem, 15vw, 15rem)", lineHeight: 0.9 }}
            >
              ADI<span className="text-acid">.</span>
              <br />
              <span className="text-primary/70">MUKE</span>
            </h1>
          </motion.div>

          {/* Profile image + headline row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-start md:items-end gap-6 mt-10"
          >
            {/* Profile image */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 border border-rule overflow-hidden shrink-0">
              <Image
                src="/profile.jpg"
                alt="Aditya Muke"
                fill
                className="object-cover grayscale"
                priority
              />
              {/* Fallback gradient when no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-muted flex items-center justify-center">
                <span className="font-display text-3xl text-acid">A</span>
              </div>
            </div>

            {/* Headline copy */}
            <div className="flex flex-col gap-2">
              <p
                className="font-body italic text-xl md:text-2xl lg:text-3xl text-primary/90 max-w-xl leading-tight"
                style={{ fontSize: "clamp(1.1rem, 2.8vw, 2.2rem)" }}
              >
                "From lines of C to lines of data —{" "}
                <em className="not-italic text-acid">building my future, one commit at a time.</em>"
              </p>
              <p className="font-mono text-xs text-subtle tracking-wide">
                Aspiring Data Scientist · Web Dev Intern @Teztecch · CE Student
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="relative z-10 flex items-center gap-3"
        >
          <div className="w-5 h-8 border border-muted rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-acid rounded-full"
            />
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase text-subtle">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* Divider */}
      <hr className="h-rule mx-6 md:mx-12" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT / EXPERIENCE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about" className="px-6 md:px-12 py-24 md:py-36 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left column — bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            viewport={{ once: true }}
            >
          
            <SectionLabel>About</SectionLabel>

            <h2
              className="font-display text-primary leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
            >
              Defined<br />
              <span className="text-primary/40">by code.</span>
            </h2>

            <div className="space-y-4 font-body italic text-ash text-base md:text-lg leading-relaxed max-w-lg">
              <p>
                Hi, I'm <span className="text-primary not-italic font-mono text-sm">Adi</span> — a Computer Engineering student from Wardha, India, who fell in love with programming through the raw precision of C and C++.
              </p>
              <p>
                I recently completed an internship as a Web Developer at <span className="text-primary not-italic">Teztecch, Nagpur</span>, where I shipped real WordPress projects for real clients — learning that clean code and clear communication go hand-in-hand.
              </p>
              <p>
                Now I'm chasing the intersection of software and intelligence: Python, data science, and machine learning. I'm at the start of this path — and that's exactly where the best stories begin.
              </p>
            </div>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                ["01", "Internship"],
                ["04", "Languages"],
                ["∞", "Curiosity"],
              ].map(([num, label]) => (
                <div key={label} className="border border-rule px-4 py-3 flex flex-col gap-0.5">
                  <span className="font-display text-2xl text-acid leading-none">{num}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-subtle">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — timeline */}
          <motion.div
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Experience & Education</SectionLabel>
            <div className="mt-2">
              <Timeline entries={TIMELINE} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Divider */}
      <hr className="h-rule mx-6 md:mx-12" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SKILLS MARQUEE
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="skills" className="py-20 md:py-28 overflow-hidden">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-12 mb-10"
        >
          <SectionLabel>Skills & Tools</SectionLabel>
          <h2
            className="font-display leading-none tracking-tight text-primary"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
          >
            The Stack.
          </h2>
        </motion.div>

        <Marquee rowA={SKILLS_ROW_A} rowB={SKILLS_ROW_B} />

        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-12 mt-10 font-body italic text-subtle text-sm md:text-base max-w-2xl"
        >
          Strong base in systems languages, hands-on with WordPress and the web, now pushing deep into Python, data science, and AI/ML. Every skill above is a stepping stone.
        </motion.p>
      </section>

      {/* Divider */}
      <hr className="h-rule mx-6 md:mx-12" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECTS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="projects" className="px-6 md:px-12 py-24 md:py-36 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2
              className="font-display leading-none tracking-tight text-primary"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)" }}
            >
              Built things.
            </h2>
          </div>

          {/* Project count badge */}
          <div className="flex items-center gap-3 border border-rule px-5 py-3 self-start md:self-auto">
            <span className="font-display text-4xl text-acid leading-none">
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-widest text-subtle">Total</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-subtle">Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-rule">
          {PROJECTS.map((project, i) => (
            <div key={project.index} className="bg-bg">
              <ProjectCard project={project} delay={i * 0.08} />
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="h-rule mx-6 md:mx-12" />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTACT / FOOTER
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        {/* Big CTA heading */}
        <motion.h2
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display leading-none tracking-tight text-primary mb-16 md:mb-20"
          style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
        >
          Let's<br />
          <span className="text-acid acid-glow">Connect.</span>
        </motion.h2>

        {/* Links */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-0 divide-y divide-rule"
        >
          {[
            {
              label: "Email",
              display: "adityamuke@example.com",  /* ← Replace with your real email */
              href: "mailto:adityamuke@example.com",
              tag: "Primary contact",
            },
            {
              label: "GitHub",
              display: "github.com/aditya-muke",  /* ← Replace with your GitHub username */
              href: "https://github.com/aditya-muke",
              tag: "Code & projects",
            },
            {
              label: "LinkedIn",
              display: "linkedin.com/in/aditya-muke-55b019384",
              href: "https://www.linkedin.com/in/aditya-muke-55b019384",
              tag: "Let's network",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-7 md:py-8 gap-4"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-subtle">
                  {link.label}
                </span>
                <span
                  className="wipe-link font-display text-primary group-hover:text-acid transition-colors duration-200"
                  style={{ fontSize: "clamp(1.4rem, 3.5vw, 3.5rem)" }}
                >
                  {link.display}
                </span>
              </div>

              <span className="shrink-0 w-10 h-10 md:w-12 md:h-12 border border-rule group-hover:border-acid group-hover:bg-acid/5 flex items-center justify-center transition-all duration-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-subtle group-hover:text-acid transition-colors duration-200"
                >
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </motion.div>

        {/* Footer bar */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-6 border-t border-rule flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            © 2025 Aditya Muke. Crafted with Next.js, Tailwind CSS & Framer Motion.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Wardha, Maharashtra, India
          </p>
        </motion.div>
      </section>
    </>
  );
}
