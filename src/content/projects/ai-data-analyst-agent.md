---
title: "Your Dataset, Your Rules (AI Data Analyst Agent)"
subtitle: "Autonomous LLM-Powered Analytical Engine"
category: "AI & Analytical Systems"
isFlagship: true
inDevelopment: false
statusText: "Completed & Deployed Flagship Project"
role: "AI & Data Systems Developer"
tools: ["Python", "FastAPI", "React", "LLMs", "Groq", "DuckDB", "Pandas", "SQL", "Plotly"]
metrics:
  - "Completed & Deployed"
  - "Cloudflare Workers & Render"
  - "Groq LLM Orchestration"
githubUrl: "https://github.com/jaymistry122003/ai-data-analyst-agent"
liveUrl: "https://ai-data-analyst-agent.capricious-atmosphere.workers.dev/"
publishDate: "2025-01-15"
---

## Executive Summary & Status

The **Your Dataset, Your Rules (AI Data Analyst Agent)** is a full-stack analytical system successfully **completed and deployed** in production. It enables users to upload CSV datasets and perform natural-language analysis through dynamically routed SQL, Python, statistical analysis, and interactive visualization workflows.

> **Production Deployment:** Live application is deployed and available at [`https://ai-data-analyst-agent.capricious-atmosphere.workers.dev/`](https://ai-data-analyst-agent.capricious-atmosphere.workers.dev/).

---

### 1. What Was the Problem?
Ad-hoc exploratory data analysis creates operational bottlenecks. Non-technical decision-makers and analysts require automated, reliable natural-language interfaces for dataset profiling, SQL query generation, statistical testing, and interactive visualization without risking schema hallucinations or security vulnerabilities.

### 2. What Data Was Involved?
* **Uploaded Datasets:** User-uploaded CSV datasets, multi-table schemas, and Parquet/structured data processed via DuckDB and Pandas.
* **Metadata & Data Quality:** Automated data profiling, data-quality auditing, data type inference, and schema reflection.
* **QueryResult Tables & Visualizations:** Interactive Plotly/Matplotlib charts and structured tabular result sets generated dynamically.

### 3. What Did I Actually Do?
* Built and deployed a full-stack AI Data Analyst Agent enabling users to upload CSV datasets and perform natural-language analysis through dynamically routed SQL, Python, statistical analysis, and visualization workflows.
* Engineered the analytics backend using FastAPI, Pandas, DuckDB, and Groq-based LLM orchestration, incorporating sandboxed Python execution, restricted SQL access, execution timeouts, intent routing, model fallback, and hallucination safeguards.
* Developed automated data profiling, data-quality auditing, statistical significance testing, and interactive Plotly/Matplotlib visualizations for end-to-end exploratory and decision-support analysis.
* Built a production React frontend with streaming responses and lazy-loaded visualizations; deployed on Cloudflare Workers with a FastAPI backend on Render, including production regression testing.

### 4. What Tools Did I Use?
* **Python & FastAPI:** Asynchronous analytics API backend, sandboxed execution, and process orchestration.
* **React:** Production frontend with streaming responses and lazy-loaded visualizations.
* **LLMs & Groq:** Groq-based LLM orchestration with intent routing and model fallback.
* **DuckDB & SQL:** In-memory analytical database engine with restricted SQL access guardrails.
* **Pandas & Plotly:** Data manipulation, statistical testing, and interactive Plotly/Matplotlib charts.

### 5. What Analysis & Methodology Did I Apply?
```
[ CSV Dataset / User Prompt ] ──> [ Intent Routing ] ──> [ Groq LLM Orchestration ] ──> [ Sandboxed Python / Restricted SQL ] ──> [ DuckDB / Pandas Execution ] ──> [ Plotly Charts & Data Quality Audit ]
```
Applied intent routing, sandboxed Python execution, restricted SQL access, execution timeouts, model fallback, and hallucination safeguards.

### 6. What Did the Analysis Reveal?
Automated data profiling, data-quality auditing, and statistical significance testing provide instant decision-support analysis on user-uploaded datasets with full security guardrails.

### 7. What Business Decisions or Recommendations Came From It?
Streamlines ad-hoc analytical requests into automated AI agent workflows, accelerating exploratory analysis and decision support for analytical teams.

### 8. What Can the Visitor Inspect Further?
* **Live Application:** [`View Live AI Data Analyst Agent`](https://ai-data-analyst-agent.capricious-atmosphere.workers.dev/)
* **GitHub Repository:** [`https://github.com/jaymistry122003/ai-data-analyst-agent`](https://github.com/jaymistry122003/ai-data-analyst-agent)
* **System Architecture:** Detailed in the workflow diagram above.
