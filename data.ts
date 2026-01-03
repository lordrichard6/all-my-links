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

export const profile: Profile = {
  name: "Paulo Lopes",
  title: "AI Automation Specialist & Software Engineer",
  bio: "Websites, branding & automation for Swiss entrepreneurs · One partner from idea to growth | nDSG-Compliant",
  location: "Zurich, Switzerland",
  avatar: "/avatar.png",
};

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
    name: "Medium",
    url: "https://medium.com/@paulolopesreizinho",
    icon: "Medium",
  },
  {
    name: "Email",
    url: "mailto:paulo@lopes2tech.ch",
    icon: "Mail",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/41787989533",
    icon: "MessageCircle",
  },
];

export interface LinkSection {
  title: string;
  links: MainLink[];
}

export const mainLinks: MainLink[] = [
  {
    title: "Lopes2Tech (Agency)",
    subtitle: "AI Automation & Custom Software",
    url: "https://www.lopes2tech.ch/",
    icon: "Globe",
    isPrimary: true,
  },
  {
    title: "Chat on WhatsApp",
    subtitle: "Direct message for quick questions",
    url: "https://wa.me/41787989533",
    icon: "MessageCircle",
  },
];

export const linkSections: LinkSection[] = [
  {
    title: "Written Articles",
    links: [
      {
        title: "The 8 Mental Steps You Need to Become an Entrepreneur",
        url: "https://medium.com/@paulolopesreizinho/the-8-mental-steps-you-need-to-become-an-entrepreneur-8e671679de85",
        icon: "Medium",
      },
    ],
  },
  {
    title: "Shop",
    links: [
      {
        title: "The Freud They Never Taught You (Ebook)",
        subtitle: "Available on Gumroad",
        url: "https://lopes2tech.gumroad.com/l/the-freud-they-never-taught-you",
        icon: "Medium",
      },
    ],
  },
];
