"use client";

import { motion } from "framer-motion";
import { profile } from "@/data";

export default function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative w-24 h-24 mx-auto mb-4 rounded-full p-0.5 bg-gradient-to-br from-blue-500 to-teal-500"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center relative">
          {profile.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-2xl font-bold text-white">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-white mb-2"
      >
        {profile.name}
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-slate-400 mb-3"
      >
        {profile.title}
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-slate-300 mb-2 px-4"
      >
        {profile.bio}
      </motion.p>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xs text-slate-500"
      >
        📍 {profile.location}
      </motion.p>
    </motion.div>
  );
}
