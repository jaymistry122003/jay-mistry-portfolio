export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  description: string;
  url: string;
  resumeUrl: string;
  contactApiEndpoint: string;
  navLinks: Array<{ label: string; href: string }>;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Jay G Mistry",
  title: "Jay G Mistry — Data / Business / BI / AI Analyst",
  role: "Data / Business / BI / AI Analyst",
  description: "Data, Business & AI Analyst specializing in converting raw operational datasets into strategic business decisions, Power BI dashboards, SQL models, and AI analytics.",
  url: "https://jaygmistry-analytics.com",
  resumeUrl: "/resume.pdf",
  contactApiEndpoint: import.meta.env.PUBLIC_CONTACT_API_ENDPOINT || "/api/contact",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],
  socialLinks: {
    github: "https://github.com/jaymistry122003",
    linkedin: "https://www.linkedin.com/in/jaymistry1301/",
    email: "jaymistry7046@gmail.com"
  }
};
