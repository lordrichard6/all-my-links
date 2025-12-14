"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data";
import * as LucideIcons from "lucide-react";

export default function SocialRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="flex justify-center gap-4 mt-8"
    >
      {socialLinks.map((social, index) => {
        const IconComponent =
          (LucideIcons[social.icon as keyof typeof LucideIcons] as React.ComponentType<{
            className?: string;
            size?: number;
          }>) || LucideIcons.Link;

        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              w-10 h-10 rounded-xl
              backdrop-blur-xl bg-white/5 border border-white/10
              flex items-center justify-center
              text-slate-400 hover:text-blue-400
              hover:bg-white/10 hover:border-blue-500/30
              transition-all duration-300
            "
            aria-label={social.name}
          >
            <IconComponent size={18} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}
