import type { Translations } from "@/lib/locale";

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  avatar?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface MainLink {
  title: string;
  subtitle?: string;
  url: string;
  icon: string;
  isPrimary?: boolean;
}

export interface LinkSection {
  title: string;
  links: MainLink[];
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pauloreizinho/",
    icon: "Linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lopes2tech/",
    icon: "Instagram",
  },
  {
    name: "Email",
    url: "mailto:paulo@lopes2tech.ch",
    icon: "Mail",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/41787989533",
    icon: "WhatsApp",
  },
];

export function getProfile(t: Translations): Profile {
  return {
    name: "Paulo Lopes",
    title: t.profile.title,
    bio: t.profile.bio,
    location: t.profile.location,
    avatar: "/avatar.png",
  };
}

export function getMainLinks(t: Translations): MainLink[] {
  return [
    {
      title: t.mainLinks.agency.title,
      subtitle: t.mainLinks.agency.subtitle,
      url: "https://www.lopes2tech.ch/",
      icon: "Globe",
      isPrimary: true,
    },
  ];
}

export function getLinkSections(t: Translations): LinkSection[] {
  return [
    {
      title: t.sections.apps,
      links: [
        {
          title: t.links.clinika.title,
          subtitle: t.links.clinika.subtitle,
          url: "https://www.clinika-os.ch",
          icon: "CalendarCheck",
        },
        {
          title: t.links.darkmonkey.title,
          subtitle: t.links.darkmonkey.subtitle,
          url: "https://www.dark-monkey.ch",
          icon: "ShoppingBag",
        },
      ],
    },
    {
      title: t.sections.articles,
      links: [
        {
          title: t.links.medium.title,
          subtitle: t.links.medium.subtitle,
          url: "https://medium.com/@paulolopesreizinho",
          icon: "Medium",
        },
      ],
    },
    {
      title: t.sections.shop,
      links: [
        {
          title: t.links.switzerland_en.title,
          subtitle: t.links.switzerland_en.subtitle,
          url: "https://lopes2techstudio.etsy.com/listing/4466681235/moving-to-switzerland-guide-100-things",
          icon: "BookOpen",
        },
        {
          title: t.links.switzerland_pt.title,
          subtitle: t.links.switzerland_pt.subtitle,
          url: "https://lopes2techstudio.etsy.com/listing/4467132687/100-coisas-sobre-a-suica-guia-imigrante",
          icon: "BookOpen",
        },
        {
          title: t.links.freud.title,
          subtitle: t.links.freud.subtitle,
          url: "https://lopes2tech.gumroad.com/l/the-freud-they-never-taught-you",
          icon: "BookOpen",
        },
      ],
    },
  ];
}
