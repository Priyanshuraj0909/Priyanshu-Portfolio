import { motion } from "motion/react";
import { useMotionPreferences } from "@/features/motion";

export function BrandMark({ draw = false, shared = false }: { draw?: boolean; shared?: boolean }) {
  const { paused, reduced } = useMotionPreferences();
  const animated = draw && !paused && !reduced;
  return <motion.span className="brand-symbol" layoutId={shared ? 'pr-signature' : undefined} transition={{ duration: reduced || paused ? 0 : .9, ease: [.76, 0, .24, 1] }} aria-hidden="true">
    <svg viewBox="0 0 64 64" fill="none" width="64" height="64" focusable="false">
      <motion.path d="M12 52V12H33L44 23V32L33 43H23" stroke="currentColor" strokeWidth="5" strokeLinejoin="bevel" initial={animated ? { pathLength: 0, opacity: 0 } : false} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: animated ? 1.15 : 0, ease: 'easeInOut' }} />
      <motion.path d="M31 34L52 52" stroke="#ffb6a1" strokeWidth="5" strokeLinejoin="bevel" initial={animated ? { pathLength: 0, opacity: 0 } : false} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: animated ? .45 : 0, duration: animated ? .65 : 0, ease: 'easeOut' }} />
      <motion.path d="M49 12H55V18H49Z" fill="#ffb6a1" initial={animated ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ delay: animated ? .9 : 0, duration: animated ? .3 : 0 }} />
    </svg>
  </motion.span>;
}
