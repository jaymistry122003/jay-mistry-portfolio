export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  workflow?: string[];
  skills: string[];
  highlights: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  category: 'Job Simulation' | 'Certification' | 'Skill Certification';
  dateOrYear: string;
  status?: string;
  details?: string[];
}

export interface LanguageProficiency {
  testName: string;
  overallScore: string;
  maxScore: string;
  details: string;
  highlights: string[];
}

export const resumeData = {
  name: "Jay G Mistry",
  role: "Data / Business / BI / AI Analyst",
  summary: "Results-driven Data and Business Analyst experienced in evaluating complex datasets, architecting Power BI dashboards, identifying actionable business opportunities, and developing AI-assisted analytical workflows.",
  
  experiences: [
    {
      role: "Business Data Analyst",
      company: "BIT Infotech",
      period: "July 2026 – Present",
      location: "Vadodara, Gujarat, India",
      isCurrent: true,
      summary: "Improving data readiness, extracting and validating structured datasets, and building interactive Power BI dashboards for operational reporting and business decision-making.",
      workflow: ["DATA", "CLEAN", "ANALYZE", "VISUALIZE", "INSIGHT"],
      skills: ["SQL", "Python", "Excel", "Power BI", "EDA", "Statistical Analysis", "Data Validation", "Data Visualization"],
      highlights: [
        "Improving data readiness for analytics projects by extracting, cleaning, and validating structured datasets using SQL, Python, and Excel.",
        "Supporting business decision-making by identifying trends and performance indicators through exploratory data analysis and statistical techniques.",
        "Delivering interactive Power BI dashboards that transformed reporting."
      ]
    },
    {
      role: "Full Stack Developer (Database & Systems)",
      company: "1Stop.ai",
      period: "December 2024 – March 2025",
      location: "Vadodara, Gujarat, India",
      isCurrent: false,
      summary: "Bridged business requirements and technical database implementation by designing normalized relational schemas and scalable system architectures.",
      skills: ["Database Design", "SQL", "Relational Databases", "Business Requirements", "System Architecture", "Technical Documentation"],
      highlights: [
        "Designed normalized relational database schemas for hotel booking and task management systems based on business requirements.",
        "Translated functional requirements into scalable system designs, bridging business processes and technical implementation.",
        "Co-authored and documented system architecture published in the IJSREM research journal."
      ]
    },
    {
      role: "Marketing Operations Analyst",
      company: "Aeozo",
      period: "May 2024 – October 2024",
      location: "Remote",
      isCurrent: false,
      summary: "Evaluated audience engagement metrics, gathered campaign requirements for AI-assisted workflows, and optimized process workflows.",
      skills: ["Marketing Analytics", "Campaign Performance", "Engagement Analytics", "Requirements Gathering", "Stakeholder Alignment", "AI-powered Tools", "Performance Reporting", "Process Optimization"],
      highlights: [
        "Analyzed audience engagement and campaign performance metrics to optimize digital marketing effectiveness and generate management reports.",
        "Gathered and analyzed requirements to deploy AI-driven influencers using Midjourney and Generative AI, ensuring campaign deliverables met stakeholder expectations.",
        "Optimized process workflows using AI-powered tools and data-driven insights to maximize audience reach and content strategy."
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "PGCM – Business Analytics",
      institution: "MIT School of Distance Education, Pune",
      period: "2026 – 2027",
      status: "Currently Pursuing"
    },
    {
      degree: "B.Tech – Computer Science and Engineering (Core)",
      institution: "Parul University, Vadodara",
      period: "2021 – 2025",
      status: "Completed"
    }
  ] as EducationItem[],

  certifications: [
    {
      name: "Quantitative Research Job Simulation",
      issuer: "JPMorgan Chase",
      category: "Job Simulation",
      dateOrYear: "2026",
      status: "Completed"
    },
    {
      name: "GenAI Powered Data Analytics",
      issuer: "Tata",
      category: "Job Simulation",
      dateOrYear: "2026",
      status: "Completed"
    },
    {
      name: "SQL Certifications (Basic, Intermediate, Advanced)",
      issuer: "HackerRank",
      category: "Skill Certification",
      dateOrYear: "2026",
      status: "Completed",
      details: ["SQL Basic", "SQL Intermediate", "SQL Advanced"]
    },
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      category: "Job Simulation",
      dateOrYear: "July 2025",
      status: "Completed"
    },
    {
      name: "Data Analytics with Python",
      issuer: "NPTEL",
      category: "Certification",
      dateOrYear: "April 2024",
      status: "Completed"
    }
  ] as CertificationItem[],

  languageCommunication: {
    testName: "PTE Academic",
    overallScore: "83",
    maxScore: "90",
    details: "High-proficiency business communication score demonstrating fluency in technical reporting, presentation, and cross-functional team collaboration.",
    highlights: [
      "PTE Academic Overall Score: 83/90",
      "Demonstrated professional English communication in analytical reporting and client presentations",
      "Clear articulation of technical insights for executive stakeholders"
    ]
  } as LanguageProficiency
};
