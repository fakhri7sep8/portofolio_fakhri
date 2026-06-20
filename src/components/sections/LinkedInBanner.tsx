"use client";

import { motion } from "framer-motion";

export function LinkedInBanner() {
  return (
    <section className="py-16 px-10 bg-white dark:bg-[#161514] border-y border-[#E8E4DC] dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#F5EDD9] to-[#EDE8DF] dark:from-[#C9A96E]/10 dark:to-[#1A1917] border border-[#C9A96E]/30 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#8B6B3D] dark:text-[#C9A96E] mb-2">
              LinkedIn Headline
            </p>
            <p className="font-serif text-xl text-[#0D0D0B] dark:text-[#EDE9E3] mb-3">
              Junior Software Engineer | Full-Stack Developer | Tech Enthusiast
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "NestJS", "MySQL", "React", "REST API"].map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-3 py-1 bg-white dark:bg-[#1A1917] border border-[#C9A96E]/40 rounded-full text-[#8B6B3D] dark:text-[#C9A96E]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/muhammad-fakhri-ramadhan-1947a6376/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#0A66C2] text-white px-6 py-3 rounded-md text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}