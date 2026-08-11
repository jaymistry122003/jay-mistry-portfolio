export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  isFlagship: boolean;
  inDevelopment: boolean;
  statusText: string;
  shortDesc: string;
  problemStatement: string;
  role: string;
  tools: string[];
  keyMetrics: Array<{ label: string; value: string }>;
  githubUrl: string;
  liveUrl?: string;
  presentationUrl?: string;
  summaryPoints: string[];
}

export const projectsData: Project[] = [
  {
    slug: "ai-data-analyst-agent",
    title: "AI Data Analyst Agent",
    subtitle: "Autonomous LLM-Powered Analytical Engine",
    category: "AI & Analytical Systems",
    isFlagship: true,
    inDevelopment: true,
    statusText: "In Development / Production Build",
    shortDesc: "An intelligent analytical system designed to automate exploratory data analysis, SQL query generation, AST safety guardrails, and natural language insight synthesis.",
    problemStatement: "Ad-hoc exploratory data analysis creates bottlenecks for analytical teams, requiring automated schema context parsing and NL-to-SQL translation.",
    role: "AI & Data Systems Developer",
    tools: ["Python", "LLMs & Prompt Engineering", "SQL", "Pandas", "Streamlit / API Framework"],
    keyMetrics: [
      { label: "Status", value: "In Production Build / Development" },
      { label: "Query Engine", value: "Automated NL-to-SQL Translation" },
      { label: "Workflow", value: "Natural Language Data Insights" }
    ],
    githubUrl: "https://github.com/jaymistry122003",
    summaryPoints: [
      "Designed to automate repetitive exploratory data analysis workflows.",
      "Integrates LLM reasoning with schema context injection and AST safety guardrails.",
      "Produces human-readable narrative summaries alongside data query results."
    ]
  },
  {
    slug: "healthlink-solutions",
    title: "Healthlink Solutions — Business Performance Analytics",
    subtitle: "Operational Call & Territory Power BI Dashboard",
    category: "Business Intelligence & Power BI",
    isFlagship: false,
    inDevelopment: false,
    statusText: "Completed Case Study",
    shortDesc: "Power BI business analytics project evaluating Q1 vs Q2 performance metrics across 2,290 doctors, field officer call compliance, and territory coverage.",
    problemStatement: "Leadership required visibility into officer call compliance (actual vs missed vs excess visits), doctor specialty reach, and Q1 vs Q2 business growth across territories.",
    role: "Lead Business Intelligence Analyst",
    tools: ["Power BI", "DAX", "Data Modeling", "Excel / SQL", "Business Analytics"],
    keyMetrics: [
      { label: "Total Business", value: "₹51.93L" },
      { label: "Business Growth", value: "+22.4%" },
      { label: "Total Doctors", value: "2,290" },
      { label: "Actual Calls", value: "9,519" },
      { label: "Missed Calls", value: "10,294 (52.2% Avg Rate)" },
      { label: "Excess Calls", value: "442 (4.6% Avg Rate)" },
      { label: "Avg Business / Call", value: "₹548.4" },
      { label: "Avg Business / Doctor", value: "₹2.26K" }
    ],
    githubUrl: "https://github.com/jaymistry122003/Healthlink-Solutions-----Business-Performance-Analytics-Dashboard",
    presentationUrl: "/presentations/Healthlink-Dashboard.pdf",
    summaryPoints: [
      "Achieved +22.4% business growth between Q1 and Q2 across evaluated territories.",
      "Evaluated 9,519 actual completed calls against 10,294 missed calls and 442 excess calls.",
      "Identified call compliance disparities across headquarters and doctor specialty categories.",
      "Note on Data Boundary: Q2 business data for Ayush Vyas was not provided in raw records and was excluded from Q2 performance calculations."
    ]
  },
  {
    slug: "us-school-bullying-analytics",
    title: "US School Bullying & Harassment Analytics",
    subtitle: "Public-Sector Data Engineering & Incident Risk Dashboard",
    category: "Public-Sector Analytics & Data Engineering",
    isFlagship: false,
    inDevelopment: false,
    statusText: "Completed Case Study",
    shortDesc: "National public-sector analytics platform combining Data Engineering, SQL, and Power BI to evaluate student safety incidents, compliance reporting, and risk patterns.",
    problemStatement: "Disparate state safety reporting formats required multi-source data pipeline engineering and SQL modeling to guide educational safety resource allocation.",
    role: "Data & BI Analyst",
    tools: ["Data Engineering", "SQL", "Power BI", "Python", "Public-Sector Analytics"],
    keyMetrics: [
      { label: "Domain", value: "Public-Sector Educational Analytics" },
      { label: "Pipeline", value: "Multi-State SQL Data Ingestion" },
      { label: "Output", value: "Interactive Policy & Risk Dashboards" }
    ],
    githubUrl: "https://github.com/jaymistry122003/US-Bullying-and-Allegation-Analysis",
    presentationUrl: "/presentations/Bullying-and-Student-Safety.pdf",
    summaryPoints: [
      "Engineered multi-state public safety data pipelines and normalized incident classifications.",
      "Uncovered temporal safety incident clusters during academic transition windows.",
      "Structured interactive Power BI policy scorecards for educational stakeholders."
    ]
  },
  {
    slug: "vendor-performance-analysis",
    title: "Vendor Performance Analysis",
    subtitle: "Supply Chain, Profitability & Inventory Optimization",
    category: "Supply Chain & Operations Analytics",
    isFlagship: false,
    inDevelopment: false,
    statusText: "Completed Case Study",
    shortDesc: "Operational analytics project evaluating supplier SLA compliance, delivery lead-time variances, parts defect rates, and inventory profitability optimization.",
    problemStatement: "Supply chain lead-time variances and unmonitored vendor SLA breaches increased holding costs and manufacturing schedule delays.",
    role: "Supply Chain & Operations Analyst",
    tools: ["Supply Chain Analytics", "SQL", "Power BI", "Python", "Inventory & Profitability Modeling"],
    keyMetrics: [
      { label: "Core Metric", value: "On-Time In-Full (OTIF) Rate" },
      { label: "Analysis", value: "Pareto Delay Root Cause Modeling" },
      { label: "Goal", value: "Procurement SLA & Profitability Optimization" }
    ],
    githubUrl: "https://github.com/jaymistry122003/Vendor_Performance_Analysis",
    presentationUrl: "/presentations/Vendor-Performance-Analysis.pdf",
    summaryPoints: [
      "Engineered vendor rating scorecards across lead-time accuracy and quality PPM parameters.",
      "Pinpointed bottleneck suppliers causing downstream production delays.",
      "Provided contract renegotiation benchmarks to procurement management."
    ]
  },
  {
    slug: "customer-shopping-behavior-analysis",
    title: "Customer Shopping Behavior Analysis",
    subtitle: "Consumer RFM Segmentation & Customer Lifetime Value Analytics",
    category: "Customer Analytics & Data Science",
    isFlagship: false,
    inDevelopment: false,
    statusText: "Completed Case Study",
    shortDesc: "Customer analytics project segmenting retail purchase frequency, basket composition, promotional discount sensitivity, and customer lifetime value using Python & PostgreSQL.",
    problemStatement: "Generic promotional discounts reduced profit margins without effectively re-engaging at-risk customer cohorts.",
    role: "Customer Data Analyst",
    tools: ["Customer Analytics", "Python", "PostgreSQL", "SQL", "Power BI"],
    keyMetrics: [
      { label: "Segmentation", value: "RFM (Recency, Frequency, Monetary)" },
      { label: "Behavior", value: "Discount Sensitivity Analysis" },
      { label: "Database", value: "PostgreSQL Transaction Analysis" }
    ],
    githubUrl: "https://github.com/jaymistry122003/Customer_Behaviour_Analysis",
    presentationUrl: "/presentations/Customer-Shopping-Behavior-Analysis.pdf",
    summaryPoints: [
      "Applied RFM segmentation in Python & PostgreSQL to group high-value repeat shoppers vs churn risks.",
      "Evaluated discount sensitivity patterns across purchase baskets.",
      "Provided actionable marketing campaign recommendations in Power BI to preserve gross margins."
    ]
  }
];
