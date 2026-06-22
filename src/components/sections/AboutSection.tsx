"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { aboutSkills } from "@/lib/data";

export function AboutSection() {
  return (
    <section
      id="tentang"
      className="py-24 px-10 bg-white dark:bg-[#161514] border-y border-[#E8E4DC] dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Heading + Stats */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest text-[#C9A96E] mb-3">
            Tentang Saya
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl leading-tight tracking-tight mb-8">
            Membangun Aplikasi Web
            <br />
            dengan Logika yang Solid
            <br />
            <em className="text-[#C9A96E] not-italic">dan Solutif.</em>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 border border-[#E8E4DC] dark:border-white/10 rounded-xl overflow-hidden"
          >
            {[
              { num: "3+", lbl: "Project" },
              { num: "5+", lbl: "Tools" },
              { num: "3yr", lbl: "Belajar" },
            ].map(({ num, lbl }, i) => (
              <div
                key={i}
                className="py-5 text-center border-r border-[#E8E4DC] dark:border-white/10 last:border-r-0 bg-[#FAF8F5] dark:bg-[#111010]"
              >
                <p className="font-serif text-3xl">{num}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#7A7870] dark:text-[#8C8980] mt-1">{lbl}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Bio + Skills */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p variants={fadeUp} className="text-[#7A7870] dark:text-[#8C8980] leading-relaxed font-light mb-5">
            Saya adalah siswa SMK jurusan Rekayasa Perangkat Lunak yang passionate
            membangun aplikasi web full-stack. Bagi saya, kode yang baik
            bukan hanya kode yang jalan — tapi kode yang memecahkan masalah nyata.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#7A7870] dark:text-[#8C8980] leading-relaxed font-light mb-8">
            Terbiasa bekerja dari frontend (React, Next.js, Tailwind CSS)
            hingga backend (NestJS, Node.js) dan database (MySQL) untuk
            membangun aplikasi web end-to-end.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {aboutSkills.map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 border border-[#E8E4DC] dark:border-white/10 rounded-full text-xs text-[#3A3935] dark:text-[#9A9890] bg-[#FAF8F5] dark:bg-[#1A1917]"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}