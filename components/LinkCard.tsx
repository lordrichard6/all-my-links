"use client";

import { motion } from "framer-motion";
import { MainLink } from "@/data";
import * as LucideIcons from "lucide-react";
import { getIcon } from "@/components/CustomIcons";

interface LinkCardProps {
  link: MainLink;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  // Dynamically get the icon component
  const IconComponent = getIcon(link.icon);

  const isPrimary = link.isPrimary;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isPrimary ? {
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 0 0px rgba(6,182,212,0)",
          "0 0 20px rgba(6,182,212,0.3)",
          "0 0 0px rgba(6,182,212,0)"
        ],
        borderColor: [
          "rgba(6,182,212,0.3)",
          "rgba(6,182,212,0.8)",
          "rgba(6,182,212,0.3)"
        ]
      } : { opacity: 1, y: 0 }}
      transition={isPrimary ? {
        opacity: { delay: 0.7 + index * 0.1, duration: 0.5 },
        y: { delay: 0.7 + index * 0.1, duration: 0.5 },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        borderColor: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      } : { delay: 0.7 + index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: isPrimary ? "0 0 30px rgba(6,182,212,0.6)" : "none" }}
      whileTap={{ scale: 0.98 }}
      className={`
        block w-full p-4 mb-3 rounded-2xl
        backdrop-blur-xl bg-white/5 border border-white/10
        transition-all duration-300
        ${isPrimary ? "bg-gradient-to-r from-blue-900/40 to-cyan-900/40" : ""}
        hover:bg-white/10 hover:border-white/20
        ${isPrimary ? "hover:from-blue-900/50 hover:to-cyan-900/50" : ""}
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex-shrink-0 w-10 h-10 rounded-xl
            flex items-center justify-center
            ${isPrimary ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-slate-400"}
          `}
        >
          <IconComponent size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`
              font-semibold text-sm mb-0.5
              ${isPrimary ? "text-white" : "text-slate-200"}
            `}
          >
            {link.title}
          </h3>
          {link.subtitle && (
            <p className="text-xs text-slate-400 truncate">{link.subtitle}</p>
          )}
        </div>
        <div className="flex-shrink-0">
          <LucideIcons.ExternalLink
            size={16}
            className="text-slate-500"
          />
        </div>
      </div>
    </motion.a>
  );
}
