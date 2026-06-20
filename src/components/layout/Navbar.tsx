"use client";

import { SunIcon, MoonIcon } from "@/components/ui/icons";
import { navItems } from "@/lib/data";

interface NavbarProps {
  dark: boolean;
  onToggleDark: () => void;
}

export function Navbar({ dark, onToggleDark }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-[#FAF8F5]/90 dark:bg-[#111010]/90 backdrop-blur-md border-b border-[#E8E4DC] dark:border-white/10 px-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16">
        <span className="font-serif text-xl tracking-tight">
          Fakhri<span className="text-[#C9A96E]">.</span>
        </span>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.toLowerCase().replace(" ", "-"))
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs uppercase tracking-widest text-[#7A7870] dark:text-[#6B6860] hover:text-[#C9A96E] dark:hover:text-[#C9A96E] transition-colors cursor-pointer"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#E8E4DC] dark:border-white/10 text-[#7A7870] dark:text-[#6B6860] hover:border-[#C9A96E] hover:text-[#C9A96E] dark:hover:border-[#C9A96E] dark:hover:text-[#C9A96E] transition-all"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}