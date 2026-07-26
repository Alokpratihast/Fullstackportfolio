"use client";

import { motion } from "framer-motion";

export default function HeroRing() {
  return (
    <motion.div
      className="absolute h-[368px] w-[368px] rounded-full border border-dashed border-cyan-400/25 md:h-[408px] md:w-[408px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
  );
}