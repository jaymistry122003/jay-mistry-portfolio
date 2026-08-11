---
title: "Vendor Performance Analysis"
subtitle: "Supply Chain, Profitability & Inventory Optimization"
category: "Supply Chain & Operations Analytics"
isFlagship: false
inDevelopment: false
statusText: "Completed Case Study"
role: "Supply Chain & Operations Analyst"
tools: ["Supply Chain Analytics", "SQL", "Power BI", "Python", "Inventory & Profitability Modeling"]
metrics:
  - "65.69% Top-10 Vendor Concentration"
  - "274.5 Max Stock Turnover"
  - "$257K Max Freight Cost"
githubUrl: "https://github.com/jaymistry122003/Vendor_Performance_Analysis"
presentationUrl: "/presentations/Vendor-Performance-Analysis.pdf"
publishDate: "2024-07-05"
---

## Executive Summary

The **Vendor Performance Analysis** project evaluates vendor transactions, gross profit, profit margins, freight costs, inventory stock turnover, and supplier concentration for enterprise supply chain operations.

Using Python, SQL, and Power BI, the analysis pinpoints critical supply chain bottlenecks, uncovers a strategic **Margin Paradox**, highlights vendor concentration risk, and provides actionable recommendations to optimize inventory profitability.

---

## Technical Progression Pipeline

```
[ RAW TRANSACTION DATA ] ──> [ DATA FILTERING & CLEANING ] ──> [ OUTLIER & FREIGHT ANALYSIS ] ──> [ CONCENTRATION MODELING ] ──> [ POWER BI SCORECARDS ] ──> [ STRATEGY ]
```

---

## 1. Project Snapshot & Empirical Metrics

| Benchmark Metric | Evaluated Empirical Value | Operational Context |
| :--- | :--- | :--- |
| **Top 10 Vendor Concentration** | **65.69% Purchase Volume** | Cumulative volume across top 10 suppliers (Concentration Risk) |
| **Max Freight Cost Spike** | **$257,032 Freight Cost** | Range: $0.09 to $257,032 (Extreme Logistics Variability) |
| **Max Stock Turnover** | **274.5 Stock Turnover** | Range: 0 to 274.5 (Fast-Moving vs Stagnant SKUs) |
| **Outlier Price Spikes** | **$5,681 PO / $7,499 Sales** | Purchase & Actual prices far above mean |

---

## 2. Problem & Objective

Enterprise procurement leaders lacked visibility into true vendor profitability, freight cost variances, and supplier dependency risks.

Standard reporting evaluated vendors purely on gross sales volume, obscuring transaction-level losses, stagnant inventory SKUs, extreme freight cost spikes, and an over-reliance on a small group of top suppliers.

---

## 3. Data Preparation & Data Filtering

* **Vendor Transactions Dataset:** Line-item procurement transactions containing Purchase Quantities, Purchase Prices (up to $5,681), Actual Sales Prices (up to $7,499), Freight Costs ($0.09 to $257,032), Stock Turnover Ratios (0 to 274.5), Gross Profit, and Profit Margins.
* **Data Preparation Filtering Rules:**
  To focus downstream vendor comparisons on commercially meaningful transactions, raw data was cleaned by filtering out:
  * `Total Sales Quantity = 0` (unsold inventory)
  * `Profit Margin <= 0` (unprofitable transactions)
  * `Gross Profit <= 0` (loss-making sales)

---

## 4. Technical Workflow & Analysis Methodology

### A. Correlation Matrix Findings
* **Purchase Quantity vs Sales Quantity:** **0.999** (Near-perfect linear alignment).
* **Profit Margin vs Sales Price:** **-0.179** (Weak negative correlation).
* **Purchase Price vs Gross Profit:** **-0.160** (Negligible correlation).
* *Analytical Insight:* Unit sales price alone does not drive higher profit margins; margin drivers lie in logistics efficiency, volume discounts, freight costs, and vendor contract terms.

### B. Concentration & Margin Paradox Analysis
```
  [ Top 10 Vendors ]  ──>  65.69% of Total Purchase Volume  (High Concentration Risk)
  
  [ Margin Paradox ]  ──>  Top Vendors: 31.17% Mean Margin
                           Low-Performing Vendors: 41.55% Mean Margin (Weak Sales Volume)
```

---

## 5. Key Findings & Insights

1. **Extreme Vendor Concentration:** The **top 10 vendors account for 65.69% of total purchase volume**, creating severe supplier dependency risk.
2. **The Margin Paradox:** High-performing top vendors yield a **mean profit margin of 31.17%**, whereas low-performing vendors yield a **higher mean margin of 41.55%**. However, low-performing vendors suffer from weak sales volume and slow stock turnover.
3. **Logistics Cost Variances:** Freight costs ranged from **$0.09 to $257,032**, showing extreme logistics cost variability that directly eroded gross profits.
4. **Stock Turnover Disparity:** Stock turnover ratios ranged from **0 to 274.5**, revealing a major divide between fast-moving SKUs and stagnant inventory.

---

## 6. Strategic Business Recommendations

1. **Diversify Vendor Base:** Reduce dependency on top 10 vendors (65.69% volume) by establishing backup suppliers to mitigate supply chain disruption risks.
2. **Promote High-Margin Low-Volume Vendors:** Improve marketing and distribution for low-performing vendors that offer superior profit margins (41.55% mean margin) to boost sales volume.
3. **Optimize Freight & Bulk Purchasing:** Leverage volume discounts and negotiate fixed freight terms to control extreme logistics cost spikes.

---

## 10. Power BI Interactive Dashboard & Visual Analytics

![Vendor Performance Analysis Dashboard](/resources/vendor%201.JPG)
*Executive Power BI Procurement Scorecard analyzing top vendor volume concentration (65.69%), supplier profit margin disparities, stock turnover ratios, and freight cost variances.*


