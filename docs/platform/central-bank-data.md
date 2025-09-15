---
title: Central Bank Data
---

# Central Bank Data

## Overview

The Central Bank Data offering is available in two versions:

1. **Free Version on Marketplace**
   - Available on [Snowflake Marketplace](https://app.snowflake.com/marketplace/listing/GZTYZ4ITX8Q/zettaquant-inc-central-bank-data)
   - Contains historical data excluding the last 6 months
   - Perfect for research and backtesting

2. **Premium Version (Native App)**
   - Near real-time data updates
   - Complete historical data including the latest 6 months
   - Available exclusively through our Native App
   - Daily updates

## Coverage

This comprehensive dataset covers 20 major central banks including:
FOMC, ECB, BoJ, RBI, PBoC, BoE, MAS, BdM, CNB, CBRT, CBR, BSP, CBoC, CBC, BNM, RBA, SNB, BCB, BOI, CBE.

## Dataset Structure

### Documents Table
`CB_MM_DATA_FREE.DOCUMENTS_V`

| Field | Description |
|-------|-------------|
| `DOCUMENT_ID` | Unique identifier for each document |
| `REGION` | Central bank name |
| `YEAR` | Year the meeting was held |
| `MEETING_START_DATE` | Start date of policy meeting |
| `MEETING_END_DATE` | End date of policy meeting |
| `RELEASE_DATE` | Date minutes were released |
| `DOCUMENT_TYPE` | Type of communication (e.g., minutes) |
| `WEB_LINK` | Source link |

### Sentences Table
`CB_MM_DATA_FREE.SENTENCES_V`

| Field | Description |
|-------|-------------|
| `SENTENCE_ID` | Unique identifier for each sentence |
| `DOCUMENT_ID` | Links sentence to parent document |
| `SENTENCE_TEXT` | Full sentence text |

## Business Applications

- **Quantitative Analysis**: Build Hawkishness & Uncertainty indices, run event studies, regressions with yields/spreads.
- **Sentiment Analysis**: Track policy tone, forward guidance, thematic references.
- **Risk Analysis**: Forecast volatility, credit spreads, FX risk.
- **Economic Impact**: Nowcast/forecast macro variables, measure communication shocks.

## Usage Examples

### 1. Retrieve all documents for Bank of Japan in 2024

```sql
SELECT DOCUMENT_ID,
       REGION,
       MEETING_START_DATE,
       MEETING_END_DATE,
       RELEASE_DATE,
       DOCUMENT_TYPE,
       WEB_LINK
FROM CB_MM_DATA_FREE.DOCUMENTS_V
WHERE REGION = 'bank_of_japan'
  AND YEAR = 2024;
```

### 2. Search for sentences mentioning "inflation"

```sql
SELECT s.DOCUMENT_ID,
       s.SENTENCE_ID,
       s.SENTENCE_TEXT
FROM CB_MM_DATA_FREE.SENTENCES_V s
JOIN CB_MM_DATA_FREE.DOCUMENTS_V d
  ON s.DOCUMENT_ID = d.DOCUMENT_ID
WHERE s.SENTENCE_TEXT ILIKE '%inflation%';
```

## Availability

- **Free Version**: Available on [Snowflake Marketplace](https://app.snowflake.com/marketplace/listing/GZTYZ4ITX8Q/zettaquant-inc-central-bank-data) (excludes last 6 months of data)
- **Premium Version**: Available through the native app with daily updates (includes all data)
