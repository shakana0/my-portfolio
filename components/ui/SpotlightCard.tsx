"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  className?: string;
  children: React.ReactNode;
}

export const SpotlightCard = ({ className, children }: SpotlightCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={cn(
        "relative rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,255,0.15),transparent_70%)] pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
