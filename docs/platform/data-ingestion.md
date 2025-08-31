---
title: Data Ingestion
---

# Data Ingestion

Our native app provides multiple ways to ingest and work with data, all within your Snowflake environment.

## Data Sources

### 1. Customer's Own Data
- Upload unstructured data (PDF files, etc.)
- Document ingestion through Native App component
- Direct integration with your Snowflake DB
- Secure compute within your environment

### 2. Premium Datasets
- Near real-time data access
- Example: [Central Bank Data](/platform/central-bank-data)
  - Latest data available only through Native App
  - Daily updates
  - Complete historical coverage

### 3. Existing Snowflake Tables
- Use your pre-existing document metadata tables
- Leverage already tokenized sentences
- Direct integration with your schema

## Ingestion Process

1. **Document Processing**
   - PDF parsing with configurable options
   - Document metadata extraction
   - Secure processing within Snowflake

2. **Text Tokenization**
   - Configurable tokenizer selection
   - Sentence-level segmentation
   - Efficient storage in your Snowflake DB

3. **Data Storage**
   - All processed data stays in your Snowflake environment
   - Optimized table structures
   - Ready for immediate analysis

## Table Structures

After ingestion, your data will be organized into two main tables:

### Documents Table
- Document metadata
- Source information
- Timestamps
- Document-level attributes

### Sentences Table
- Tokenized sentences
- Links to parent documents
- Ready for analysis and labeling
