---
title: "Fine-Tuning BERT for Hate Speech Detection: 95% Accuracy in Production"
published: false
tags: nlp, machinelearning, bert, python
canonical_url: https://sanjaycheekati.dev/#projects
cover_image: ./images/bert-cover.png
---

Built a production-ready hate speech classifier using fine-tuned BERT that achieves **95% accuracy** and processes **10,000+ messages/hour** with sub-200ms latency.

## The Challenge

Content moderation isn't keyword matching:
- "I hate Mondays" ≠ hate speech
- "You're a [slur]" = violation
- Context and sarcasm matter

**Goal**: AI that understands context, not just keywords.

## Solution: Transfer Learning with BERT

**Tech**: PyTorch, Transformers, FastAPI, BERT-base-uncased

**Why BERT?**
- Bidirectional attention (reads left→right AND right→left)
- Pre-trained on 3.3 billion words
- Transfer learning for specialized tasks

## Architecture

```
Input → Tokenizer → BERT (12 layers) → [CLS] → Dense → Softmax
Output: [Hate | Offensive | Neither] + Confidence
```

## Results

| Model | Accuracy | F1-Score |
|-------|----------|----------|
| Logistic Regression | 77% | 0.71 |
| Random Forest | 82% | 0.77 |
| **Fine-Tuned BERT** | **95%** | **0.93** |

**+18% improvement** over baseline

## Key Techniques

**1. Class Imbalance Handling**
- Dataset: 5.8% hate, 77.4% offensive, 16.8% neither
- Solution: SMOTE + weighted loss function

**2. Model Optimization**
- INT8 quantization: 438 MB → 110 MB
- 15% latency reduction

**3. Production API**
```python
@app.post("/moderate")
async def moderate_content(text: str):
    prediction = model.predict(text)
    return {
        "is_harmful": prediction['confidence'] > 0.75,
        "category": prediction['label'],
        "confidence": prediction['confidence']
    }
```

## Challenges Solved

**Context Window Limits**: Sliding window with overlap  
**Adversarial Attacks**: Character-level augmentation + fuzzy matching  
**Cultural Context**: Region-specific fine-tuning

## Impact
- 95% accuracy on multi-class detection
- Production-ready with <200ms latency
- Scalable to 10,000+ classifications/hour

**🔗 [Full Technical Analysis →](https://sanjaycheekati.dev/#projects)**

---

**Sanjay Cheekati** • Full Stack Developer + AI/ML  
🔗 [sanjaycheekati.dev](https://sanjaycheekati.dev) • [GitHub](https://github.com/sanjaycheekati)
