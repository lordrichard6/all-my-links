"use client";

import Background from "@/components/Background";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import SocialRow from "@/components/SocialRow";
import { mainLinks } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Background />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-8 pb-12 px-4">
        <div className="w-full max-w-md">
          <ProfileHeader />
          
          <div className="space-y-3 mb-8">
            {mainLinks.map((link, index) => (
              <LinkCard key={link.url} link={link} index={index} />
            ))}
          </div>
          
          <SocialRow />
        </div>
      </div>
    </main>
  );
}
