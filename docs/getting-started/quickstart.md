---
title: Quickstart
---

# Getting Started

This guide will help you get started with our Snowflake Native App.

## Installation

To install the ZettaQuant Native App in your Snowflake environment:

1. Log in to your Snowflake account
2. Navigate to the Snowflake Marketplace
3. Search for "ZettaQuant" or access it directly [here](#) <!-- Placeholder for actual marketplace link -->
4. Click "Get" to install the app

   # Getting Started

    This guide will help you get started with our Snowflake Native App.

    ## Data Access Grants

    ### Prerequisites for Custom Datasets

    If you're configuring a custom dataset, make sure you have:

    1. **Document table** with at least:

       - `document_id` column (table name can be anything)

    2. **Sentence table** with at least 3 columns:
       - `document_id` (links to document table)
       - `sentence_id` (unique identifier for each sentence)
       - `sentence_text` (the actual sentence content)
       - (table name can be anything)

    ### Grant Permissions

    To allow the app to use certain tables, make sure you first run these queries:

    ```sql
    GRANT USAGE ON DATABASE {YOUR_DATABASE_IN_WHICH_YOUR_TABLES_ARE_STORED} TO APPLICATION ZETTAQUANT_NATIVE_APP;
    GRANT USAGE ON SCHEMA {YOUR_DATABASE.YOUR_SCHEMA} TO APPLICATION ZETTAQUANT_NATIVE_APP;
    GRANT SELECT ON {DATABASE.SCHEMA.YOUR_SENTENCES_TABLE} TO APPLICATION ZETTAQUANT_NATIVE_APP;
    GRANT SELECT ON {DATABASE.SCHEMA.YOUR_DOCS_TABLE} TO APPLICATION ZETTAQUANT_NATIVE_APP;
    GRANT CREATE TABLE ON SCHEMA {YOUR_DATABASE.YOUR_SCHEMA} TO APPLICATION ZETTAQUANT_NATIVE_APP;
    ```
    
    To view the tables created by the apps, ensure that the following command has been run:
    

    ### Grants for Premium Dataset (Marketplace Listing)

    The Premium dataset is provided through the Snowflake Marketplace as the CENTRAL BANK DATA listing. 
    If you're using this dataset, you'll need these grants:

    ```sql
    -- After getting the CENTRAL BANK DATA listing and naming your database (e.g., CENTRAL_BANK_DATA):
    GRANT USAGE ON DATABASE CENTRAL_BANK_DATA TO APPLICATION ZETTAQUANT_NATIVE_APP; (please replace CENTRAL_BANK_DATA with your database name if different)
    GRANT USAGE ON SCHEMA CENTRAL_BANK_DATA.CB_MM_DATA_FREE TO APPLICATION ZETTAQUANT_NATIVE_APP; (please replace CB_MM_DATA_FREE with your schema name if different)

    GRANT SELECT ON VIEW CENTRAL_BANK_DATA.CB_MM_DATA_FREE.DOCUMENTS_V
      TO APPLICATION ZETTAQUANT_NATIVE_APP;

    GRANT SELECT ON VIEW CENTRAL_BANK_DATA.CB_MM_DATA_FREE.SENTENCES_V
      TO APPLICATION ZETTAQUANT_NATIVE_APP;
    ```


    ### PDF Ingestion

    Make sure database has grant usage enabled as mentioned in the above step.

    Make sure schema has grant usage enabled as mentioned in the above step.

    Make sure you run:

    ```sql
    GRANT CREATE TABLE ON SCHEMA <database_name>.<schema_name> TO APPLICATION ZETTAQUANT_NATIVE_APP;
    ```

    ## GPU Compute Pool Setup

    You can create a GPU compute pool using the interface below, or manually create one with the following specifications:

    ### Manual Setup

    User needs to create compute pool called "ZETTAQUANT_NATIVE_APP_gpu_pool".

    User can specify number of max nodes (we recommend 3-5), GPU compute pools of any size (s,m,l) - we recommend medium for best performance and cost optimization, Autoresume (we recommend checking this), autosuspend time (we recommend 10 mins).
    If you are creating the compute pool manually, make sure it is called `ZETTAQUANT_NATIVE_APP_gpu_pool` and then run the SQL command:

    ```sql
    GRANT USAGE ON COMPUTE POOL ZETTAQUANT_NATIVE_APP_GPU_POOL TO APPLICATION ZETTAQUANT_NATIVE_APP;
    GRANT USAGE ON WAREHOUSE COMPUTE_WH TO APPLICATION ZETTAQUANT_NATIVE_APP;
    ```
    in a worksheet using Snowsight or in SnowSQL.


    ## Warehouse Grants

    Make sure you create a warehouse called `COMPUTE_WH` of whatever size and preference you want, then run:

    ```sql
    GRANT USAGE ON WAREHOUSE COMPUTE_WH TO APPLICATION ZETTAQUANT_NATIVE_APP;
    ```

    ## Data Sources

    After installation, you can work with data in three ways:

    1. **Use Existing Data**: Select your document metadata and tokenized sentences tables from your database
    2. **Upload New Data**: Use our drag-and-drop tool to ingest PDFs directly into Snowflake tables
    3. **Premium Datasets**: Access our curated datasets like the Central Bank Dataset.
    
    ### Telemetry
    To view logs, traces, and app events, please run the following command:
    ```sql
      SELECT
      TIMESTAMP as time,
      RESOURCE_ATTRIBUTES['snow.executable.name'] as executable,
      RECORD['severity_text'] as severity,
      VALUE as message
      FROM
      "OBSERVABILITY"."PUBLIC"."SERVICE_EVENTS"
    WHERE RESOURCE_ATTRIBUTES['snow.application.name'] = 'ZETTAQUANT_NATIVE_APP' OR
        RESOURCE_ATTRIBUTES['snow.database.name'] = 'ZETTAQUANT_NATIVE_APP'
    ORDER BY time DESC
    ```
    This command can also be accessed via Snowsight by doing the following:
    1. Open the app in Snowsight and click on the settings gear on the top right corner.
    2. Click on App Events tab  
    3. Click on "View Logs"
    4. If needed, you can change the level of logging as well, given in the event sharing block. This requires that you have the right permissions to view the logs.
    
## Next Steps

1. Learn about our [data ingestion process](/platform/data-ingestion)
2. Explore available [metrics](/platform/metrics)
3. Check out our [example datasets](/platform/central-bank-data)
