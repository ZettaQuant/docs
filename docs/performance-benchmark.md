# Performance Benchmark

Our SEAL pipeline consistently outperforms leading large language models (LLMs) across key financial NLP tasks, delivering superior accuracy and reliability for critical applications.

## Performance Comparison

| Model                   | Financial PhraseBank | Earnings Calls & Analyst Reports | Average |
|--------------------------|----------------------|----------------------------------|---------|
| **SEAL Pipeline (SOTA)** | **0.980**           | **0.957**                        | **0.968** |
| OpenAI gpt-4o           | 0.928                | 0.750                            | 0.839   |
| OpenAI o1-mini          | 0.917                | 0.720                            | 0.819   |
| Claude 3.5 Sonnet       | 0.944                | 0.692                            | 0.818   |
| DeepSeek R1             | 0.902                | 0.688                            | 0.795   |
| Qwen 2 Instruct (72B)   | 0.901                | 0.639                            | 0.770   |
| DeepSeek-V3             | 0.814                | 0.675                            | 0.744   |
| Mixtral-8x7B Instruct   | 0.893                | 0.583                            | 0.738   |
| Claude 3 Haiku          | 0.908                | 0.558                            | 0.733   |
| Google Gemini 1.5 Pro   | 0.885                | 0.525                            | 0.705   |
| Jamba 1.5 Large         | 0.798                | 0.541                            | 0.669   |
| Gemma 2 9B              | 0.940                | 0.365                            | 0.652   |
| Gemma 2 27B             | 0.884                | 0.408                            | 0.646   |
| Mixtral-8x22B Instruct  | 0.776                | 0.513                            | 0.645   |
| Llama 3 70B Instruct    | 0.902                | 0.386                            | 0.644   |
| Mistral (7B) v0.3       | 0.841                | 0.412                            | 0.626   |
| Llama 3 8B Instruct     | 0.698                | 0.511                            | 0.605   |
| WizardLM-2 8x22B        | 0.779                | 0.272                            | 0.526   |
| DeepSeek LLM (67B)      | 0.811                | 0.151                            | 0.481   |
| Jamba 1.5 Mini          | 0.765                | 0.151                            | 0.458   |
| Cohere Command R 7B     | 0.840                | 0.068                            | 0.454   |
| QwQ-32B-Preview         | 0.815                | 0.020                            | 0.417   |
| DBRX Instruct           | 0.499                | 0.319                            | 0.409   |
| Cohere Command R+       | 0.699                | 0.118                            | 0.408   |

:::info Datasets
**A. Financial PhraseBank** — Sentiment classification dataset of ~4.8k annotated financial sentences from news. [Malo et al., JASIST, 2014](https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/asi.23062)  

**B. Claim Detection (Earnings Calls & Analyst Reports)** — Numerical claim detection benchmark on analyst reports & earnings calls. [ACL Anthology 2024.fever-1.21](https://aclanthology.org/2024.fever-1.21/)  
:::
