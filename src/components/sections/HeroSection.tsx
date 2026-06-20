"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export function HeroSection() {
  return (
    <section id="beranda" className="px-10 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_360px] gap-20 items-center">
        {/* Left: Text */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#F5EDD9] dark:bg-[#C9A96E]/10 border border-[#C9A96E]/40 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-[#8B6B3D] dark:text-[#C9A96E] mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full animate-pulse" />
            Tersedia untuk hire
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6"
          >
            Software Engineer
            <br />
            yang suka
            <br />
            <em className="text-[#C9A96E] not-italic">bangun solusi.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#7A7870] dark:text-[#6B6860] text-base max-w-lg leading-relaxed font-light mb-10"
          >
            Siswa SMK RPL yang berfokus pada pengembangan web full-stack{" "}
            <span className="text-[#0D0D0B] dark:text-[#EDE9E3] font-normal">
              dari frontend hingga backend & database
            </span>
            . Saya tidak hanya membangun tampilan — saya memecahkan masalah nyata
            dengan kode yang solid.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-3 flex-wrap">
            <a
              href="https://wa.me/6282125589800"
              target="_blank"
              className="bg-[#0D0D0B] dark:bg-[#EDE9E3] text-[#FAF8F5] dark:text-[#111010] px-7 py-3 rounded-md text-xs uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              Hire Me
            </a>
            <a
              href="#project"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-[#C9A96E] text-[#C9A96E] px-7 py-3 rounded-md text-xs uppercase tracking-widest hover:bg-[#F5EDD9] dark:hover:bg-[#C9A96E]/10 transition-colors"
            >
              Lihat Project →
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="bg-white dark:bg-[#1A1917] border border-[#E8E4DC] dark:border-white/10 rounded-2xl p-8 shadow-sm"
        >
          <div className="w-14 h-14 bg-[#F5EDD9] dark:bg-[#C9A96E]/10 rounded-full flex items-center justify-center font-serif text-2xl text-[#C9A96E] mb-4">
            F
          </div>
          <p className="font-serif text-lg">Fakhri Ramadhan</p>
          <p className="text-xs uppercase tracking-widest text-[#7A7870] dark:text-[#6B6860] mb-5">
            Software Engineer
          </p>
          <div className="border-t border-[#E8E4DC] dark:border-white/10 pt-5 flex flex-col gap-4">
            {[
              {
                label: "Status",
                value: (
                  <span className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-xs px-2.5 py-1 rounded">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Open to Work
                  </span>
                ),
              },
              { label: "Fokus", value: "Full-Stack Web Development" },
              { label: "Stack", value: "Next.js · NestJS · MySQL · Chart.js" },
              { label: "Pengalaman", value: "2+ tahun belajar" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-widest text-[#7A7870] dark:text-[#6B6860] mb-1">{label}</p>
                <div className="text-sm">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}