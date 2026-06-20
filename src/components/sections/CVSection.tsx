"use client";

import { motion } from "framer-motion";

export function CVSection() {
  return (
    <section id="resume" className="py-24 px-10 bg-[#FAF8F5] dark:bg-[#111010] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#C9A96E] mb-3">
          Resume
        </p>
        <h2 className="font-serif text-4xl tracking-tight mb-6">
          Unduh CV saya
        </h2>
        <p className="text-sm text-[#7A7870] dark:text-[#6B6860] mb-10 max-w-md mx-auto font-light">
          Ingin tahu lebih detail tentang pengalaman dan skill saya? Download CV saya dalam format PDF.
        </p>
        <motion.a
          href="/cv-muhammad-fakhri-ramadhan.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 bg-[#0D0D0B] dark:bg-[#EDE9E3] text-[#FAF8F5] dark:text-[#111010] px-8 py-4 rounded-md text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </motion.a>
      </div>
    </section>
  );
}