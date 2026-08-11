---
title: "Healthlink Solutions — Business Performance Analytics"
subtitle: "Operational Call & Territory Power BI Dashboard"
category: "Business Intelligence & Power BI"
isFlagship: false
inDevelopment: false
statusText: "Completed Case Study"
role: "Lead Business Intelligence Analyst"
tools: ["Power BI", "DAX", "Data Modeling", "Excel / SQL", "Business Analytics"]
metrics:
  - "Total Business: ₹51.93L (+22.4% Growth)"
  - "Total Doctors: 2,290 | Actual Calls: 9,519"
  - "Missed Calls: 10,294 (52.2% Rate) | Excess Calls: 442"
githubUrl: "https://github.com/jaymistry122003/Healthlink-Solutions-----Business-Performance-Analytics-Dashboard"
presentationUrl: "/presentations/Healthlink-Dashboard.pdf"
publishDate: "2024-11-20"
---

## Executive Summary

**Healthlink Solutions** required a comprehensive business intelligence evaluation to analyze operational performance across medical field officers, territory call coverage, doctor categories, and doctor specialties between **Q1 and Q2**.

This Power BI analytics case study evaluates operational call records, quantifies officer call compliance (actual calls made, missed scheduled visits, and excess unassigned visits), tracks territory revenue generation, and provides strategic recommendations to rebalance field force allocation.

---

### Key Analytical Benchmarks & Metrics

| Benchmark Metric | Evaluated Empirical Value | Operational Context |
| :--- | :--- | :--- |
| **Total Business Generated** | **₹51.93 Lakhs** | Cumulative revenue across evaluated quarters |
| **Business Growth** | **+22.4% Growth** | Revenue growth comparison between Q1 and Q2 |
| **Total Doctors Evaluated** | **2,290 Doctors** | Doctors registered across regional territories |
| **Actual Completed Calls** | **9,519 Calls** | Visited and documented doctor calls |
| **Missed Scheduled Calls** | **10,294 Calls** | Scheduled visits unfulfilled (**52.2% Avg Missed-Call Rate**) |
| **Excess Unassigned Calls** | **442 Calls** | Visits beyond target quota (**4.6% Avg Excess-Call Rate**) |
| **Avg Business Per Call** | **₹548.4** | Revenue yield per completed call interaction |
| **Avg Business Per Doctor** | **₹2.26K** | Revenue yield per registered doctor |

> **Data Limitation Note:** Raw operational datasets for Q2 did not contain business data for field officer **Ayush Vyas**. To maintain strict empirical accuracy, Q2 performance metrics for Ayush Vyas were neither calculated, estimated, nor implied.

---

### 1. What Was the Problem?
Field officers at Healthlink Solutions are assigned target doctor visitation quotas across regional headquarters and territories. Leadership lacked visibility into whether call targets were met efficiently or if field force productivity suffered from high missed-call rates in specific territories while others received redundant excess visits.

### 2. What Data Was Involved?
* **Call Log Records:** 19,813 total scheduled visitation logs across Q1 and Q2.
* **Field Officer Roster:** Roster details including Officer Name, Assigned Headquarters, and Target Quotas.
* **Doctor Registry:** 2,290 doctors categorized by Specialty (General Practice, Cardiology, Orthopedics, Surgery) and Category Tier.
* **Revenue Transactions:** Sales records totaling **₹51.93 Lakhs**.

### 3. What Did I Actually Do?
* Cleansed inconsistent raw call logs in Power Query, standardizing territory names and handling null values.
* Designed a relational Star Schema linking fact call logs to dimensional tables (`Dim_FieldOfficer`, `Dim_Doctor`, `Dim_Territory`).
* Formulated custom DAX measures for actual call volume, missed call rates, excess call indexes, and business ratios.
* Built interactive Power BI executive scorecards with slicers for Quarter, Headquarters, and Specialty.
* Identified call compliance bottlenecks and formulated territory rebalancing recommendations for executive management.

### 4. What Tools Did I Use?
* **Microsoft Power BI Desktop:** Data modeling, visual layout, and scorecard publishing.
* **DAX (Data Analysis Expressions):** Formulated dynamic measures, time-intelligence calculations, and percentage ratios.
* **Power Query (M Language):** ETL transformations, unpivoting, and type validation.
* **Excel / SQL:** Data cleaning, cross-tabulation verification, and schema validation.

### 5. What Analysis & Methodology Did I Apply?
Applied Star Schema dimensional data modeling and engineered core DAX measures:
* `Actual Calls = COUNTROWS(FILTER(Fact_CallLogs, Status = "Completed"))`
* `Missed Call Rate % = DIVIDE([Missed Calls], [Total Target Calls], 0)` (Averaging **52.2%**)
* `Excess Call Index % = DIVIDE([Excess Calls], [Total Target Calls], 0)` (Averaging **4.6%**)

### 6. What Did the Analysis Reveal?
* **Revenue Growth vs Call Gap:** Overall business grew by **+22.4%** in Q2 to **₹51.93L**, but field productivity was hampered by **10,294 missed calls** (52.2% average missed-call rate).
* **Resource Misallocation:** Field officers logged **442 excess calls** on lower-priority clinics where quotas were already met, while high-priority specialist targets in adjacent territories experienced missed visits.
* **Territory Disparity:** Call compliance varied significantly across headquarters, with regional territories accounting for a disproportionate share of missed calls.

### 7. What Business Decisions or Recommendations Came From It?
1. **Rebalance Territory Quotas:** Reallocate excess officer capacity (442 excess visits) from over-serviced urban headquarters to under-performing regional territories to reduce the 52.2% missed-call rate.
2. **Cap Excess Visit Frequency:** Implement soft caps on repeat visits to lower-tier clinics to protect officer bandwidth for primary specialist targets.
3. **Automated Weekly Tracking:** Establish automated Power BI alerts when an officer's weekly missed-call rate exceeds 25%.

---

## 10. Power BI Interactive Dashboard Reports

### Report 1: Executive Performance & Call Compliance Scorecard
![Healthlink Executive Performance Scorecard](/resources/healthlink%201.JPG)
*Executive dashboard evaluating overall Q1 vs Q2 business growth (₹51.93L, +22.4%), total actual calls (9,519), missed calls (10,294), and excess visit distributions.*

### Report 2: Doctor Specialty & Territory Reach Analysis
![Healthlink Doctor Specialty & Territory Reach Dashboard](/resources/healthlink%202.JPG)
*Granular territory breakdown analyzing doctor reach across 2,290 doctors and specialty categories.*

### Report 3: Field Officer Missed Call Rate & Call Gap Analysis
![Healthlink Officer Missed Call Rate Dashboard](/resources/healthlink%203.JPG)
*Field officer performance tracking missed call rates (52.2% avg) and excess visit allocation across headquarters.*
