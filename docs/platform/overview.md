---
title: Platform Overview
---

# Platform Overview

Our Snowflake Native App consists of two main components that work seamlessly within your Snowflake environment. All data and processing remain secure within your Snowflake infrastructure.

## Key Features

- **Native Snowflake Integration**: All data resides in your Snowflake database
- **Real-Time Data Access**: Near real-time data access through the native app
- **Custom Metrics**: Define topics and metrics tailored to your needs
- **Secure Processing**: All computations happen within your Snowflake environment

## 1. Data Selection & Ingestion

The app supports three ways to work with data:

1. **Use Existing Data**
   - Select document metadata tables
   - Choose tokenized sentences tables
   - Use data from your existing database and schema

2. **PDF Ingestion Tool**
   - Drag-and-drop interface for PDFs
   - Configurable PDF parser
   - Custom tokenizer selection
   - Direct ingestion into Snowflake tables

3. **Premium Datasets**
   - Real-time data updates
   - Premium access to complete datasets
   - Example: [Central Bank Data](/platform/central-bank-data)
     - Free version available on marketplace
     - Premium version with daily updates
     - Complete historical data

## 2. SEAL Pipeline Core Module

Our core processing pipeline helps you:

1. **Topic Definition**
   - Define relevant topics
   - Filter data based on relevancy
   - Custom topic modeling

2. **Classification & Metrics**
   - Sentiment analysis
   - Stance detection
   - Uncertainty measurement
   - Custom metric construction

3. **Results Storage**
   - Document-level metrics
   - Direct storage in your Snowflake DB
   - Ready for immediate analysis

## Interface Options

Users can interact with the app through:
- Streamlit UI for visual interactions
- Stored procedures for programmatic access