export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
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
  bio: "Founder of Lopes2Tech. Building custom AI workflows & SaaS for therapists and service businesses.",
  location: "Zurich, Switzerland",
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
    icon: "BookOpen",
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

export const mainLinks: MainLink[] = [
  {
    title: "Initial Consultation (Book Now)",
    url: "https://cal.com/lopes2tech/initial-consult",
    icon: "Calendar",
    isPrimary: true,
  },
  {
    title: "Lopes2Tech (Agency)",
    subtitle: "AI Automation & Custom Software",
    url: "https://www.lopes2tech.ch/",
    icon: "Globe",
  },
  {
    title: "Theraflow CRM (SaaS)",
    subtitle: "The CRM for Therapists & Clinics",
    url: "https://www.theraflow-crm.ch/",
    icon: "Activity",
  },
  {
    title: "The Freud They Never Taught You (Ebook)",
    subtitle: "Available on Gumroad",
    url: "https://lopes2tech.gumroad.com/l/the-freud-they-never-taught-you",
    icon: "BookOpen",
  },
  {
    title: "FinitoPro",
    url: "https://www.finitopro.ch/",
    icon: "Laptop",
  },
];
