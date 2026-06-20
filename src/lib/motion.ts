export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};