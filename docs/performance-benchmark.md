# Performance Benchmark

Our SEAL pipeline consistently outperforms leading large language models (LLMs) across key financial NLP tasks, delivering superior accuracy and reliability for critical applications.

## Performance Comparison

| Model                   | Financial PhraseBank | Earnings Calls & Analyst Reports | Headlines | Average |
|--------------------------|----------------------|----------------------------------|------------|---------|
| **SEAL Pipeline (ZQ)**   | **0.980**            | **0.957**                        | **0.865**  | **0.934** |
| OpenAI gpt-4o            | 0.928                | 0.750                            | 0.824      | 0.834   |
| Claude 3.5 Sonnet        | 0.944                | 0.692                            | 0.827      | 0.821   |
| OpenAI o1-mini           | 0.917                | 0.720                            | 0.769      | 0.802   |
| Qwen 2 Instruct (72B)    | 0.901                | 0.639                            | 0.830      | 0.790   |
| DeepSeek R1              | 0.902                | 0.688                            | 0.769      | 0.786   |
| Mixtral-8x7B Instruct    | 0.893                | 0.583                            | 0.805      | 0.760   |
| Google Gemini 1.5 Pro    | 0.885                | 0.525                            | 0.837      | 0.749   |
| Claude 3 Haiku           | 0.908                | 0.558                            | 0.781      | 0.749   |
| DeepSeek-V3              | 0.814                | 0.675                            | 0.729      | 0.739   |
| Gemma 2 9B               | 0.940                | 0.365                            | 0.856      | 0.720   |
| Jamba 1.5 Large          | 0.798                | 0.541                            | 0.782      | 0.707   |
| Mixtral-8x22B Instruct   | 0.776                | 0.513                            | 0.835      | 0.708   |
| Llama 3 70B Instruct     | 0.902                | 0.386                            | 0.811      | 0.700   |
| Mistral (7B) Instruct v0.3 | 0.841              | 0.412                            | 0.779      | 0.677   |
| Llama 3 8B Instruct      | 0.698                | 0.511                            | 0.763      | 0.657   |
| DeepSeek LLM (67B)       | 0.811                | 0.151                            | 0.778      | 0.580   |
| Cohere Command R 7B      | 0.840                | 0.068                            | 0.770      | 0.559   |
| QwQ-32B-Preview          | 0.815                | 0.020                            | 0.744      | 0.526   |
| DBRX Instruct            | 0.499                | 0.319                            | 0.746      | 0.521   |
| Jamba 1.5 Mini           | 0.765                | 0.151                            | 0.682      | 0.533   |
| Cohere Command R +       | 0.699                | 0.118                            | 0.812      | 0.543   |

## ZQ_CLASSIFY Performance

We have also developed a separate classification system called **ZQ_CLASSIFY** that demonstrates superior performance across all benchmarks:

### Comparative Results (averaged across 3 seeds)

| Dataset | AI_CLASSIFY | ZQ_CLASSIFY |
|---------|-------------|-------------|
| Headlines | 0.533 | **0.865** |
| Congressional Committee Hearings | 0.620 | **0.660** |
| Financial PhraseBank | 0.928 | **0.980** |

:::info Datasets
**A. Financial PhraseBank** — Sentiment classification dataset of ~4.8k annotated financial sentences from news. [Malo et al., JASIST, 2014](https://asistdl.onlinelibrary.wiley.com/doi/abs/10.1002/asi.23062)  

**B. Claim Detection (Earnings Calls & Analyst Reports)** — Numerical claim detection benchmark on analyst reports & earnings calls. [ACL Anthology 2024.fever-1.21](https://aclanthology.org/2024.fever-1.21/)  

**C. News Headlines (Gold News Dataset)** — Financial news headlines dataset introduced by *Ankur Sinha & Tanmay Khandait (2020)*, used to extract multiple semantic dimensions (e.g. price direction, temporal reference, asset comparison) from gold-related news headlines. [arXiv:2009.04202](https://arxiv.org/abs/2009.04202) 

**D. CoCoHD: Congress Committee Hearing Dataset** — Dataset for analyzing congressional committee hearings with price increase/decrease classifications. *Arnav Hiray, Yunsong Liu, Mingxiao Song, Agam Shah, Sudheer Chava* [arXiv:2410.03099](https://arxiv.org/pdf/2410.03099)
:::

