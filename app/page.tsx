"use client";

import Background from "@/components/Background";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import SocialRow from "@/components/SocialRow";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LocaleProvider, useLocale } from "@/lib/locale";
import { socialLinks, getMainLinks, getLinkSections } from "@/data";

function HomeContent() {
  const { t } = useLocale();
  const mainLinks = getMainLinks(t);
  const linkSections = getLinkSections(t);
  let linkIndex = 0;

  return (
    <main className="min-h-screen relative">
      <Background />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-8 pb-12 px-4">
        <div className="w-full max-w-md">
          <LanguageSwitcher />
          <ProfileHeader />

          <div className="space-y-3 mb-8">
            {mainLinks.map((link) => {
              const currentIndex = linkIndex++;
              return (
                <LinkCard key={link.url} link={link} index={currentIndex} />
              );
            })}
          </div>

          {linkSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-4 px-1">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.links.map((link) => {
                  const currentIndex = linkIndex++;
                  return (
                    <LinkCard key={link.url} link={link} index={currentIndex} />
                  );
                })}
              </div>
            </div>
          ))}

          <SocialRow />
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <LocaleProvider>
      <HomeContent />
    </LocaleProvider>
  );
}
