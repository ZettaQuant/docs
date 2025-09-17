# ZettaQuant Native App – Secure SDLC Documentation

**Organization:** ZettaQuant, Inc.  
**Application:** ZettaQuant Native App  
**Purpose:** Process structured and unstructured financial datasets to provide accurate, reliable, and cost-efficient topic and label classifiers.

---

## 1. SDLC Overview
ZettaQuant follows a secure, staged software development life cycle (SDLC) designed to ensure that all code and containers meet security, compliance, and reliability requirements before release.

Our SDLC includes:
1. **Planning & Requirements**
   - Define functional requirements (e.g., PDF ingestion, SEAL pipeline, metrics).
   - Threat modeling for new features (attack surface, misuse scenarios).
2. **Design**
   - Architecture diagrams (see [Architecture Diagram](https://docs.zettaquant.ai/architecture-security-faq#architecture-diagram)).
   - Separation of environments: **Development** and **Production**.
   - Security reviews such as vulnerability scans and malware detection embedded at the design stage.
3. **Implementation**
   - All source code stored in a **private GitHub organization repo**.
   - Access controlled via **GitHub MFA**; only organization members with proper roles can commit.
   - Snowflake access is restricted via **access tokens / PATs**.
4. **Testing**
   - **Automated scans per commit via GitHub Actions**:
     - **Malware scan:** ClamAV.
     - **CVE vulnerability scan:** Trivy.
   - **pip-audit** run for dependency scanning.
   - Unit, integration, and end-to-end tests on dev branch.
5. **Release**
   - Only after passing scans & reviews, code is merged into the **prod repo**.
   - Docker images are rebuilt from **minimal base images (python:3.10-slim, moving toward distroless)**.
   - Images are scanned again for vulnerabilities before publishing to Snowflake’s container registry.
6. **Deployment**
   - Published to Snowflake Native Apps Marketplace.
   - Consumers can only access data by explicitly granting privileges.
7. **Monitoring & Maintenance**
   - Continuous monitoring of CVEs for packages (e.g., torch, libc).
   - Security patches applied proactively.

---

## 2. Security Controls

### Source Code Management
- Private GitHub repository.
- Organization-wide MFA enforced.
- Access via **Personal Access Tokens (PATs)** or GitHub Apps with least privilege.
- All commits gated by **GitHub Actions CI/CD pipeline**.

### Automated Security Scans
- **ClamAV** -> Malware detection at every commit.  
- **Trivy** -> Container image vulnerability scanning.  
- **pip-audit** -> Python dependency vulnerability scanning.  
- Results must pass policy thresholds before merge.

### Environment Separation
- **Development environment**: New features tested & scanned.  
- **Production environment**: Only code/images that passed Dev checks are promoted.  
- Ensures no unreviewed code reaches production.

### Data Security
- App does **not store consumer data outside the consumer’s Snowflake account**.  
- Access limited to consumer-granted privileges.  
- No external integrations or public endpoints.  
- Containers run as **non-root `appuser`** with minimal privileges.

### Incident Response
- SLA published ([see SLA.md](../SLA.md)).  
- Free tier: Sev 4 only, community forum.  
- Paid tier: Sev 1–3 covered with escalation to engineering.  
- Contact: **support@zettaquant.ai**

---

## 3. Compliance & Assurance
- Aligns with Snowflake Native App **Security Requirements** and **Best Practices**.  
- Follows industry-standard secure SDLC processes (NIST SP 800-218 aligned).  
- Preparing to migrate to **distroless/chainguard base images** to further reduce attack surface.  
- Continuous vulnerability management with defined remediation SLAs.  

---

## 4. Summary
The ZettaQuant Native App SDLC ensures:
- **Secure source control (MFA, tokens, PATs).**  
- **Automated security scanning (ClamAV, Trivy, pip-audit).**  
- **Environment separation (Dev -> Prod).**  
- **Least-privilege runtime (non-root containers).**  
- **Transparent SLA with defined incident response.**

This approach minimizes the risk of malicious code, CVEs, and supply chain attacks, while ensuring rapid remediation and reliable service delivery.
