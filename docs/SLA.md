# Service Level Agreement (SLA)

**Effective Date:** 09/16/2025.  
**Updated Date:** 09/22/2025.  
**Applies to:** ZettaQuant Native App ("the Application"). 

---

## 1. Purpose
This Service Level Agreement ("SLA") defines the levels of service, support, and responsibilities for consumers of the Application. It outlines severity levels, response times, and support channels across both free and paid tiers.

---

## 2. Scope
- This SLA applies **particularly** to ZettaQuant services offered on the **Snowflake Marketplace**. **It does not apply** to any other ZettaQuant services offered **outside** of the Snowflake Marketplace.  
- It covers **availability, incident response, and support services**.  
- It does not cover:  
  - Issues caused by customer misconfiguration, third-party integrations, or force majeure.  
  - Features outside the scope of the Application package.  
  - Snowflake platform issues (covered by [Snowflake’s Support Policy](https://www.snowflake.com/en/legal/terms-of-service/)).

---

## 3. Service Availability
- The Application is designed to be available **24×7**, excluding scheduled maintenance.  
- Scheduled maintenance notifications will be posted via Community forums and Email.
- Business Hours: 9:00–18:00 US Eastern Time, Monday–Friday (excluding US holidays).

---

## 3A. Security Definitions
- **Security Incident:** Any event that adversely affects one or more of:  
  - **Confidentiality** (e.g., data leak/exposure, unauthorized access),  
  - **Integrity** (e.g., unauthorized modification, app compromise),  
  - **Availability** (e.g., outage, denial of service).  
- **0-day Vulnerability:** A vulnerability disclosed or observed for which no vendor patch is available at initial disclosure.  
- **CVSS Severity:** Industry-standard scoring used for vulnerability prioritization (Critical >=9.0; High 7.0–8.9; Medium 4.0–6.9; Low &lt;4.0).

---

## 4. Severity Levels

| Severity | Definition | Free Tier | Paid Tier |
|----------|------------|------------------------|-----------|
| **Sev 1 (Critical)** | Application completely down, no workaround | Classified as Sev 4 | Response within 4 hours, continuous work until resolution |
| **Sev 2 (High)** | Major functionality impaired, no acceptable workaround | Classified as Sev 4 | Response within 4 business hours, resolution within 1 business day |
| **Sev 3 (Medium)** | Minor functionality impaired, workaround exists | Classified as Sev 4 | Response within 1 business day, resolution within 2 business days |
| **Sev 4 (Low)** | General questions, documentation, “how to” requests | Community forum only | Response within 2 business days |

---
> **Precedence for Security Incidents:** If an issue qualifies as a **Security Incident** under **Section 3A**, the **Security Incident Severity (Sec)** in **Section 4A** governs response, escalation, and communications, and **supersedes** the **Support Severity (Sev)** classification in this section for **all tiers**.

## 4A. Security Incident Severity

**Precedence:** For any Security Incident (CIA impact per Section 3A), the **Sec** level defined below overrides the **Sev** level in Section 4, including for Free tier users.
Security incidents (confidentiality/integrity/availability) are additionally tracked and handled using **Sec-levels**:

| Security Severity | Illustrative Examples | Free Tier | Paid Tier |
|---|---|---|---|
| **Sec-1 (Critical Security)** | Active data leak/exposure; confirmed compromise; exploited 0-day with material risk | **Acknowledge within 4 hours** via community/email; publish advisory & required mitigations/workarounds as available | **Response within 4 hours**; direct email updates; immediate engineering engagement; continuous mitigation/containment and patch/controls as available |
| **Sec-2 (High Security)** | Credible exploit chain; critical misconfiguration impacting integrity; secrets exposure with limited scope | **Acknowledge within 1 business day**; advisory and mitigation guidance | **Response within 4 business hours**; mitigation/patch target **within 3 business days** |
| **Sec-3 (Medium Security)** | Non-exploited weaknesses; hardening items; informational findings with risk | **Advisory within 3 business days** | **Response within 1 business day**; mitigation target **within 10 business days** |

> Notes: Sec-levels are **in addition** to support severities in Section 4 and focus specifically on security impact and response/communications.

---

## 5. Support Channels
- **Free Tier:** 
  - Email: [support@zettaquant.ai]
  - Escalation path to engineering for Sec 1–2.
- **Paid Tier:**  
  - Email: [support@zettaquant.ai]   
  - Escalation path to engineering for Sec 1-2 and Sev 1-2.

---

## 6. Incident Response and Escalation
- **Free Tier:**
  - Sec 1–2 -> Escalated immediately to engineering.
- **Paid Tier:**  
  - Sec 1–2 -> Escalated immediately to engineering.
  - Sev 1-2 -> Escalated immediately to engineering.  
  - Sev 3-4 -> Routed to support queue, monitored during business hours (9am–6pm ET).

---

## 7. Responsibilities
- **Provider:** Maintain the Application, respond to paid tier incidents as per SLA, and publish updates/patches.  
- **Consumer:** Provide accurate details of incidents, grant required permissions for troubleshooting, and follow best practices for usage.

---

## 7A. Vulnerability Management (Risk-Based, CVSS-Aligned)
We use risk-based vulnerability remediation aligned to **CVSS** and operational exposure:

| CVSS / Risk | Remediation Target | Interim Controls |
|---|---|---|
| **Critical (>=9.0)** | **7 calendar days** (if no patch available, deploy compensating controls within **48 hours** and patch as soon as possible) | Configuration hardening, rule updates, feature flags, access revocation |
| **High (7.0–8.9)** | **15 calendar days** | As needed based on exposure |
| **Medium (4.0–6.9)** | **30 calendar days** | As needed |
| **Low (&lt;4.0)** | Best effort / next planned release | N/A |

- **0-day handling:** implement compensating controls within **48 hours**, communicate recommended workarounds, and ship a fix promptly when available.  
- If remediation depends on upstream vendors/platforms, timelines may adjust accordingly; we will publish rationale and updated ETA.

---

## 8. Reporting & Reviews
- SLA performance is tracked internally by ZettaQuant.  
- Paid customers may request SLA performance reports quarterly.

---

## 9. Exclusions
The SLA does not apply in the following cases:  
- Issues caused by Snowflake outages or network failures outside ZettaQuant’s control.  
- Force majeure (e.g., natural disasters, internet backbone issues).  
- Incidents caused by consumer misuse or unauthorized changes.

---

## 10. Changes to SLA
This SLA may be updated from time to time. Consumers will be notified via mail at least **5 days prior** to changes taking effect.
