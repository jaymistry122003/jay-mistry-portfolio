---
title: "Customer Shopping Behavior Analysis"
subtitle: "Consumer RFM Segmentation & Customer Lifetime Value Analytics"
category: "Customer Analytics & Data Science"
isFlagship: false
inDevelopment: false
statusText: "Completed Case Study"
role: "Customer Data Analyst"
tools: ["Customer Analytics", "Python", "PostgreSQL", "SQL", "Power BI"]
metrics:
  - "3,900 Purchases"
  - "18 Columns"
  - "10 SQL Business Questions"
githubUrl: "https://github.com/jaymistry122003/Customer_Behaviour_Analysis"
presentationUrl: "/presentations/Customer-Shopping-Behavior-Analysis.pdf"
publishDate: "2024-05-18"
---

## Executive Summary

The **Customer Shopping Behavior Analysis** project evaluates retail transaction data using Python, PostgreSQL, SQL, and Power BI to model customer purchasing frequency, basket composition, promotional discount responsiveness, and customer lifetime value potential.

Built on a dataset of **3,900 purchase transactions across 18 behavioral attributes**, the project handles data cleaning, feature engineering, 10 targeted SQL analytical queries, and customer cohort segmentation (**New**, **Returning**, **Loyal**) to formulate strategic marketing recommendations.

---

## Technical Progression Pipeline

```
[ TRANSACTIONAL DATA ] ──> [ PYTHON CLEANING ] ──> [ FEATURE ENGINEERING ] ──> [ POSTGRESQL ] ──> [ SQL BUSINESS QUESTIONS ] ──> [ CUSTOMER SEGMENTATION ] ──> [ POWER BI ] ──> [ BUSINESS STRATEGY ]
```

---

## 1. Project Snapshot & Dataset Overview

| Attribute | Evaluated Scale | Operational Context |
| :--- | :--- | :--- |
| **Total Purchases** | **3,900 Purchases** | Transaction volume evaluated in PostgreSQL |
| **Dataset Dimensions** | **18 Columns** | Customer demographics, order attributes & behavior |
| **SQL Queries** | **10 Core Questions** | Addressed business questions via SQL analysis |
| **Missing Data Imputation** | **37 Review Ratings** | Median-by-category imputation in Python |

### Data Attributes Included:
Customer Age, Gender, Location, Item Purchased, Category, Purchase Amount ($), Season, Size, Color, Review Rating, Subscription Status, Shipping Type, Discount Applied, Promo Code Used, Previous Purchases, and Purchase Frequency.

---

## 2. Problem & Objective

Retail marketing management relied on broad, mass-market promotional discounts to drive sales volume. However, blanket discounting eroded gross profit margins on loyal full-price shoppers while failing to re-engage high-risk churned customers.

Management needed a data-backed customer segmentation model to identify distinct purchasing behaviors, measure promotional discount sensitivity, and allocate marketing spend toward high-potential customer segments.

---

## 3. Technical Workflow & Data Preparation

1. **Python Data Preparation & Data Quality Audit:**
   * Loaded raw dataset via Pandas (`df.info()`, `describe()`, null-value audit).
   * **Median-by-Category Imputation:** Imputed the **37 missing Review Rating values** using median ratings calculated per product category.
   * **Column Standardization:** Cleaned column headers to lower_snake_case formatting.
   * **Feature Engineering:** Created engineered attributes for **Age Groups** (Youth, Adult, Senior) and **Purchase Frequency Tiers**.
   * **Redundancy Check:** Executed validation checks confirming exact logical alignment between `discount_applied` and `promo_code_used`.
2. **PostgreSQL Relational Storage:** Loaded cleansed transactions into PostgreSQL database tables with explicit data types and index keys.

---

## 4. Analysis Methodology & 10 SQL Business Questions

### 10 Core SQL Queries Executed:
1. **Revenue by Gender:** Aggregated total revenue yield across male vs female customer cohorts.
2. **High-Spending Discount Users:** Filtered top spenders who utilized promotional discounts.
3. **Top 5 Products by Rating:** Ranked items by average customer review score.
4. **Shipping Type Comparison:** Evaluated basket sizes across Express, Standard, and Free Shipping options.
5. **Subscribers vs Non-Subscribers:** Compared transaction values between subscription members and non-subscribers.
6. **Discount-Dependent Products:** Identified categories where purchase velocity was driven primarily by discounts.
7. **Customer Behavioral Segmentation:** Segmented buyers into **New**, **Returning**, and **Loyal** cohorts based on purchase frequency and order history.
8. **Top 3 Products per Category:** Ranked top items within each retail product category using SQL window functions (`DENSE_RANK()`).
9. **Repeat Buyers & Subscription Behavior:** Analyzed previous purchase counts relative to active subscription status.
10. **Revenue by Age Group:** Calculated gross revenue distribution across engineered age cohorts.

---

## 5. Key Findings & Insights

* **Customer Cohort Distribution:** Customer segmentation identified clear purchasing behavior tiers across **New**, **Returning**, and **Loyal** shoppers.
* **Discount Dependency Risk:** Mass promotional discounts were being consumed heavily by high-intent **Loyal** buyers who frequently purchased without discounts.
* **Subscription Value Yield:** Active subscription members demonstrated higher repeat purchase frequency and larger average basket sizes compared to non-subscribers.

---

## 6. Strategic Business Recommendations

1. **Subscription Growth:** Expand subscription onboarding incentives, as subscribers yield higher customer lifetime value and consistent repeat orders.
2. **Customer Loyalty Programs:** Establish structured rewards for **Loyal** customers to encourage repeat engagement without relying on margin-eroding discounts.
3. **Discount Policy Optimization:** Discontinue mass discount codes for high-intent loyal shoppers, reserving promotional offers for re-engaging at-risk **Returning** buyers.
4. **Product Positioning:** Reposition top-rated products (Top 5 by Review Rating) in primary marketing campaigns to drive organic acquisition of **New** customers.
5. **Targeted Marketing:** Shift promotional ad spend toward personalized email campaigns segmented by engineered age groups and purchase frequency tiers.

---

## 10. Power BI Interactive Dashboard & Visual Analytics

![Customer Shopping Behavior Analysis Dashboard](/resources/customer%201.JPG)
*Executive Power BI Dashboard evaluating customer demographics, RFM behavioral cohorts, discount dependency rates, and product category revenue yield.*


