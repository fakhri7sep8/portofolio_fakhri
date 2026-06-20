"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { tools } from "@/lib/data";

export function ToolsSection() {
  return (
    <section className="py-24 px-10 bg-[#FAF8F5] dark:bg-[#111010] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C9A96E] mb-3">Tech Stack</p>
        <h2 className="font-serif text-4xl tracking-tight mb-12">
          Tools yang saya
          <br />
          gunakan sehari-hari.
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {tools.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-white dark:bg-[#1A1917] border border-[#E8E4DC] dark:border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-1 hover:border-[#C9A96E] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] dark:bg-[#111010] border border-[#E8E4DC] dark:border-white/10 flex items-center justify-center text-sm font-semibold text-[#C9A96E] mb-4 group-hover:scale-110 transition-transform">
                {t.icon}
              </div>
              <span className="text-sm text-[#3A3935] dark:text-[#A8A29A] text-center">{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}