"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section
      id="project"
      className="py-24 px-10 bg-[#FAF8F5] dark:bg-[#111010] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#C9A96E] mb-3">
          Project
        </p>

        <h2 className="font-serif text-4xl tracking-tight mb-12">
          Karya yang sudah
          <br />
          pernah dibuat.
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col bg-white dark:bg-[#1A1917] border border-[#E8E4DC] dark:border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300"
            >
              <div className="h-44 bg-gradient-to-br from-[#F5EDD9] to-[#EDE8DF] dark:from-[#C9A96E]/10 dark:to-[#1A1917] flex items-center justify-center relative flex-shrink-0">
                <span className="font-serif text-5xl text-[#C9A96E]/30">
                  {p.num}
                </span>

                <span className="absolute top-3 left-3 text-[10px] bg-white dark:bg-[#111010] border border-[#E8E4DC] dark:border-white/10 rounded px-2 py-0.5 text-[#7A7870] dark:text-[#6B6860] tracking-wide">
                  {p.num} / 03
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-lg mb-2">{p.title}</h3>

                <p className="text-sm text-[#7A7870] dark:text-[#6B6860] leading-relaxed font-light mb-3">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 bg-[#F5EDD9] dark:bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded text-[#8B6B3D] dark:text-[#C9A96E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Challenge */}
                <p className="text-xs text-[#7A7870] dark:text-[#6B6860] leading-relaxed font-light italic mb-4">
                  💡 {p.challenge}
                </p>
              </div>

              <div className="border-t border-[#E8E4DC] dark:border-white/10">
                <button
                  onClick={() => setSelectedProject(p)}
                  className="w-full py-3 text-xs uppercase tracking-widest text-[#7A7870] dark:text-[#6B6860] hover:bg-[#F8F6F1] dark:hover:bg-white/5 transition-colors"
                >
                  Demo Access
                </button>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 border-t border-[#E8E4DC] dark:border-white/10 text-xs uppercase tracking-widest text-[#C9A96E] hover:bg-[#F5EDD9] dark:hover:bg-[#C9A96E]/5 transition-colors"
                >
                  Live Demo →
                </a>

                <div className="flex border-t border-[#E8E4DC] dark:border-white/10 divide-x divide-[#E8E4DC] dark:divide-white/10">
                  <a
                    href={p.github.fe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 text-xs uppercase tracking-widest text-[#7A7870] dark:text-[#6B6860] hover:bg-[#F8F6F1] dark:hover:bg-white/5 transition-colors"
                  >
                    GitHub FE →
                  </a>
                  <a
                    href={p.github.be}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 text-xs uppercase tracking-widest text-[#7A7870] dark:text-[#6B6860] hover:bg-[#F8F6F1] dark:hover:bg-white/5 transition-colors"
                  >
                    GitHub BE →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-3xl bg-white dark:bg-[#1A1917] border border-[#E8E4DC] dark:border-white/10 p-6"
            >
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-[#C9A96E] mb-2">
                  Demo Access
                </p>

                <h3 className="font-serif text-2xl">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="space-y-4">
                {selectedProject.credentials.map((credential) => (
                  <div
                    key={credential.role}
                    className="rounded-2xl border border-[#E8E4DC] dark:border-white/10 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-widest text-[#C9A96E] mb-3">
                      {credential.role}
                    </p>

                    <div className="space-y-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-[#7A7870] dark:text-[#6B6860]">
                          Username
                        </p>

                        <div className="mt-1 rounded-lg bg-[#F8F6F1] dark:bg-[#111010] p-2 text-sm">
                          {credential.user}
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-wide text-[#7A7870] dark:text-[#6B6860]">
                          Password
                        </p>

                        <div className="mt-1 rounded-lg bg-[#F8F6F1] dark:bg-[#111010] p-2 text-sm">
                          {credential.pass}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 w-full rounded-xl bg-[#C9A96E] text-white py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}