---
title: "US School Bullying & Harassment Analytics"
subtitle: "Public-Sector Data Engineering & Incident Risk Dashboard"
category: "Public-Sector Analytics & Data Engineering"
isFlagship: false
inDevelopment: false
statusText: "Completed Case Study"
role: "Data & BI Analyst"
tools: ["Data Engineering", "SQL", "Power BI", "Python", "Public-Sector Analytics"]
metrics:
  - "168K Students"
  - "96K Schools"
  - "135K Allegations"
githubUrl: "https://github.com/jaymistry122003/US-Bullying-and-Allegation-Analysis"
presentationUrl: "/presentations/Bullying-and-Student-Safety.pdf"
publishDate: "2024-09-10"
---

## Executive Summary

The **US School Bullying & Harassment Analytics** platform is an end-to-end data engineering and business intelligence project built on the **2015–16 U.S. Department of Education Civil Rights Data Collection (CRDC)** dataset.

It transforms **7 messy raw Excel workbooks** into a normalized star schema database, executes 12+ SQL analytical queries using CTEs and window functions, and delivers a 4-page interactive Power BI executive dashboard evaluating student safety incidents, discipline disparities, and demographic risks.

> **Source-Data Disclaimer:** *The figures represent reported allegations and disciplinary actions in the source dataset and do not represent verified findings of wrongdoing.*

---

## Technical Progression Pipeline

```
[ RAW EXCEL DATA ] ──> [ PYTHON / PANDAS ETL ] ──> [ STAR SCHEMA DB ] ──> [ SQL QUERY ENGINE ] ──> [ POWER BI DASHBOARD ] ──> [ INSIGHTS ]
```

---

## 1. Project Snapshot & Empirical Scale

| Scale Metric | Evaluated Count | Operational Context |
| :--- | :--- | :--- |
| **Total Students Evaluated** | **168K Students** | Nationwide public school enrollment sample |
| **Total Schools** | **96K Schools** | Registered public educational institutions |
| **Total Allegations Logged** | **135K Allegations** | Reported harassment and bullying incidents |
| **Total Disciplined Students** | **91K Disciplined** | Students receiving disciplinary action |
| **Total Victims** | **77K Victims** | Documented victims of incidents |
| **IDEA-Flagged Students** | **33K Students** | Individuals with Disabilities Education Act |
| **ELL-Flagged Students** | **12K Students** | English Language Learner students |

---

## 2. Problem & Objective

Public-sector educational policy stakeholders lacked a unified analytical platform to evaluate harassment allegations and disciplinary outcomes across US states.

Raw CRDC records were fragmented across 7 disparate Excel workbooks filled with merged cells, multi-level headers, inconsistent column names, and unnormalized data structures. Without data engineering and dimensional modeling, policy directors could not compare state-level discipline ratios, assess demographic disparities, or evaluate compliance for vulnerable student groups (IDEA & ELL).

---

## 3. Technical Workflow & Data Engineering

1. **Raw Data Ingestion & Cleaning:** Used Python (Pandas) to parse messy Excel workbooks, unmerge headers, standardize column names, and impute missing fields.
2. **Dimensional Modeling:** Architected a star schema database containing central fact tables (`Fact_Allegations`, `Fact_Discipline`) linked to dimension tables (`Dim_School`, `Dim_Demographics`, `Dim_State`).
3. **Advanced SQL Analysis:** Formulated 12+ SQL queries using Common Table Expressions (CTEs), `CASE` statements, and Window Functions (`RANK()`, `SUM() OVER()`) to evaluate incident patterns.
4. **Power BI Report Development:** Built a 4-page interactive Power BI dashboard featuring dynamic cross-filtering and DAX measures.

---

## 4. Analysis Methodology & Power BI Structure (4 Pages)

### 4 Power BI Report Pages:
1. **Overview Page:** Executive KPI scorecards showing total allegations (135K), victims (77K), disciplined students (91K), and geographic state distribution.
2. **Demographics Page:** Breakdown of incident allegations by sex, race/ethnicity, and state discipline ratios.
3. **IDEA & ELL Focus Page:** Targeted risk evaluation for Special Education (IDEA) and English Language Learner (ELL) cohorts.
4. **Allegations Deep-Dive Page:** Incident breakdown across Sex-Based, Race-Based, and Disability-Based categories.

---

## 5. Key Findings & Insights

* **Sex vs Race Allegation Volume:** **Sex-based allegations account for 55.6K** of the 135K total allegations, representing the single largest category. Race-based allegations form the next-highest category at approximately **30K**.
* **Geographic Disparity (Raw Volume vs Incident Rates):**
  * **California** recorded the highest total disciplined count.
  * **New York** recorded the highest total victim count.
  * **Illinois** recorded the highest total allegations, despite California having significantly more total students and schools—demonstrating why incident rates matter alongside raw volume.
* **Discipline vs Victim Mismatch:** Disciplinary actions do not track victim volume 1:1 across states, indicating regional variations in reporting and disciplinary enforcement.
* **Racial Discipline Disparity:** Black students demonstrate a disproportionately high discipline count relative to White students across multiple school districts.
* **IDEA & ELL Male Concentration:** **75% of IDEA-flagged students** and **69% of ELL-flagged students** in the incident dataset are male.

---

## 6. Strategic Policy Recommendations

1. **Targeted Sex-Based Intervention:** Prioritize anti-harassment training and reporting support for sex-based allegations (55.6K total cases).
2. **Standardize State Disciplinary Frameworks:** Address state-level enforcement disparities where discipline does not track victim volume.
3. **Equitable Discipline Audits:** Establish state-level oversight to address racial discipline disparities.

---

## 10. Power BI Interactive Dashboard Reports

The Power BI analytical report comprises 4 dedicated interactive pages:

### Page 1: Executive KPI & Safety Allegations Overview
![US School Bullying Executive Overview Dashboard](/resources/bullying%201.jpg)
*Executive scorecards tracking total allegations (135K), victims (77K), disciplined students (91K), and multi-state incident distribution.*

### Page 2: Demographics & State Discipline Ratio Breakdown
![US School Bullying Demographics & State Ratios Dashboard](/resources/bullying%202.jpg)
*Demographic breakdown analyzing incident allegations across sex, race/ethnicity, and state-level discipline ratios.*

### Page 3: IDEA Special Education & ELL Risk Evaluation
![US School Bullying IDEA & ELL Focus Dashboard](/resources/bullying%203.jpg)
*Targeted risk and vulnerability analysis for Special Education (IDEA) and English Language Learner (ELL) student cohorts.*

### Page 4: Incident Category & Allegations Deep-Dive
![US School Bullying Allegations Category Deep-Dive Dashboard](/resources/bullying%204.jpg)
*Granular breakdown across Sex-Based, Race-Based, and Disability-Based harassment incident categories.*


