"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { contacts } from "@/lib/data";

export function ContactSection() {
  return (
    <section
      id="kontak"
      className="py-24 px-10 bg-[#FAF8F5] dark:bg-[#111010] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C9A96E] mb-3">Kontak</p>
        <h2 className="font-serif text-4xl tracking-tight mb-4">
          Mari berkolaborasi
          <br />
          bersama.
        </h2>
        <p className="text-sm text-[#7A7870] dark:text-[#8C8980] mb-12 font-light max-w-md">
          Jangan ragu untuk menghubungi saya melalui email atau LinkedIn. Saya terbuka untuk diskusi, kolaborasi, atau peluang kerja.
        </p>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-4"
        >
          {contacts.map(({ label, value, href }) =>
            href ? (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="bg-white dark:bg-[#1A1917] border border-[#E8E4DC] dark:border-white/10 rounded-xl p-6 hover:border-[#C9A96E] dark:hover:border-[#C9A96E] transition-colors block"
              >
                <p className="text-[10px] uppercase tracking-widest text-[#C9A96E] mb-2">{label}</p>
                <p className="text-sm hover:text-[#C9A96E] transition-colors">{value}</p>
              </motion.a>
            ) : (
              <motion.div
                key={label}
                variants={fadeUp}
                className="bg-white dark:bg-[#1A1917] border border-[#E8E4DC] dark:border-white/10 rounded-xl p-6 hover:border-[#C9A96E] dark:hover:border-[#C9A96E] transition-colors"
              >
                <p className="text-[10px] uppercase tracking-widest text-[#C9A96E] mb-2">{label}</p>
                <p className="text-sm">{value}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}