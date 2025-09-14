---
title: Architecture & Security FAQ
---

# ZettaQuant Architecture & Security FAQ

This document provides responses to common security, compliance, and architecture questions for the **ZettaQuant Native App** running on Snowflake.

---

## Architecture Diagram

![ZettaQuant Native App — Architecture Diagram](/img/Architecture-ZettaQuant.svg)

---

## Confidentiality

<details>
<summary>Does the application store or handle sensitive information?</summary>

**Answer:** The data never leaves the Snowflake account of the user. All the data is processed within user's secure Snowflake environment.
</details>

<details>
<summary>Is sensitive data encrypted in transit and at rest?</summary>

**Answer:** Data is not encrypted by the application itself, because our app ensures **zero data movement**. Snowflake inherently handles encryption in transit and at rest depending on the policy of your organization. 
</details>

<details>
<summary>Are access controls in place to prevent unauthorized access?</summary>

**Answer:** Yes. By default, the app does **not** get access to any data, warehouse, or compute pool unless explicitly granted by the user.
</details>

---

## Integrity

<details>
<summary>Are input validation mechanisms implemented to prevent data tampering?</summary>

**Answer:** Yes. Input is validated within Snowpark containers and Snowflake SQL runtime, ensuring controlled execution paths.
</details>

<details>
<summary>Are logging and auditing systems in place to detect unauthorized modifications?</summary>

**Answer:** Yes. Snowflake telemetry captures activity in the **Observability table**, allowing detection of anomalies or unauthorized changes.
</details>

---

## Availability

<details>
<summary>Are disaster recovery and business continuity plans documented?</summary>

**Answer:** Yes. These are provided by Snowflake and its underlying cloud provider.
</details>

<details>
<summary>Are monitoring and alerting systems in place for downtime?</summary>

**Answer:** Yes. Snowflake and the underlying cloud provider provide this.
</details>

---

## Authentication & Authorization

<details>
<summary>Are secure authentication mechanisms used (e.g., MFA)?</summary>

**Answer:** Yes. Snowflake enforces MFA for all user accounts.
</details>

<details>
<summary>Is role-based access control enforced?</summary>

**Answer:** Yes. Role-based authentication and authorization are enforced at the Snowflake level.
</details>

---

## Encryption

<details>
<summary>Is encryption used for data in transit and at rest?</summary>

**Answer:** Snowflake provides encryption. Our application ensures **zero data movement**, so we do not manage encryption directly.
</details>

<details>
<summary>How are encryption keys managed?</summary>

**Answer:** Keys are managed by Snowflake. Our app requires no separate key management since data never leaves Snowflake.
</details>

---

## Backup and Recovery

<details>
<summary>Are regular backups performed?</summary>

**Answer:** Yes. Backups are managed by Snowflake according to customer account policies.
</details>

<details>
<summary>Is there a documented recovery process?</summary>

**Answer:** Yes. Recovery is supported and documented by Snowflake.
</details>

---

## Vulnerability Management

<details>
<summary>Are regular vulnerability assessments conducted?</summary>

**Answer:** Yes. Snowflake performs continuous assessments. Additionally, ZettaQuant scans Docker images using **Trivy** and performs `pip-audit` on containers.
</details>

<details>
<summary>Is there a patch management program?</summary>

**Answer:** Snowflake maintains its own patch cycles. For app dependencies, ZettaQuant updates Python packages and images as new stable versions are released.
</details>

---

## Compliance & Documentation

<details>
<summary>Does the application comply with standards such as SOC 2, ISO 27001, PCI DSS, or HIPAA?</summary>

**Answer:** Snowflake is SOC 2, ISO 27001, PCI DSS, and HIPAA compliant. The ZettaQuant app inherits these guarantees, but we haven't obtained official certificate yet.  
</details>

<details>
<summary>Is documentation available (e.g., architecture diagrams)?</summary>

**Answer:** Yes. Documentation and diagrams are available at [docs.zettaquant.ai](https://docs.zettaquant.ai/architecture-security-faq#architecture-diagram).
</details>

---

## Third-Party Dependencies

<details>
<summary>What external libraries or services are used?</summary>

**Answer:** Open-source Python packages (e.g., `transformers`, `pymupdf`) from the **Snowflake Anaconda channel**. We do NOT use any package avaialble outside Snowflake Anaconda channel.   
</details>

<details>
<summary>Are all dependencies approved for use within Snowflake?</summary>

**Answer:** Yes. All packages are Snowflake-approved via their Anaconda channel.
</details>

---

## Data Residency & Processing Boundaries

<details>
<summary>Does any data leave the Snowflake environment during processing?</summary>

**Answer:** No. All processing occurs entirely within the user’s Snowflake account.  
</details>

<details>
<summary>Are all components executed within Snowpark containers?</summary>

**Answer:** Yes. All jobs run inside **Snowpark Container Services** (SPCS).  
</details>

---

## Snowflake-Specific Deployment

<details>
<summary>Is ZettaQuant listed on the Snowflake Marketplace?</summary>

**Answer:** Yes.  
</details>

<details>
<summary>Does it run entirely within Snowflake’s secure boundary?</summary>

**Answer:** Yes.  
</details>

<details>
<summary>Are any external APIs or services invoked?</summary>

**Answer:** No.  
</details>

---

## AI Model Transparency & Governance

### Data Security

<details>
<summary>Does the AI process sensitive data?</summary>

**Answer:** Only data explicitly granted access by the user to the app. No data is stored or retained.  
</details>

<details>
<summary>Is all processing done within Snowflake’s secure environment?</summary>

**Answer:** Yes.  
</details>

---

### Model Transparency & Risk Controls

<details>
<summary>Are AI outputs explainable or traceable?</summary>

**Answer:** Partial explainability is provided via metadata tables and output logs.  
</details>

<details>
<summary>Are safeguards in place to prevent overreliance on AI?</summary>

**Answer:** Yes. Users provide inputs at every stage of model training and inference.  
</details>

---

### Access Control & Output Protection

<details>
<summary>Are access controls enforced for AI-generated results?</summary>

**Answer:** Yes. Only authorized Snowflake roles can access results.  
</details>

<details>
<summary>Can outputs be audited or traced to users?</summary>

**Answer:** Yes. Snowflake telemetry ensures full traceability.  
</details>

---

### Model Lifecycle & Vulnerability Management

<details>
<summary>How often are models updated?</summary>

**Answer:** Models are updated on-demand when initiated by the user. Training always occurs inside their Snowflake account.  
</details>

<details>
<summary>Are updates tested for security risks?</summary>

**Answer:** Yes. Updates are scanned for vulnerabilities before release.  
</details>

---

### Logging & Monitoring

<details>
<summary>Are AI activities logged?</summary>

**Answer:** Yes. They are stored in user's Snowflake telemetry.
</details>

<details>
<summary>Are there alerts for anomalous behavior?</summary>

**Answer:** Snowflake provides anomaly detection and alerting.  
</details>

---

## Operational & Security Details
 
- **Public Endpoints:** None  
- **External Integrations:** None  
- **Networking:** No use of `0.0.0.0` or external egress rules  
- **CVE Scans:** Performed with Trivy 
- **Malware Scans:** Conducted via ClamAV; 0 infections detected  
- **Runtime User:** Non-root with minimum privileges  

---

## Contact Information 
- **ZettaQuant Security Contact:** support@zettaquant.ai  

---

