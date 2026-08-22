export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "Mail",
  },
];
