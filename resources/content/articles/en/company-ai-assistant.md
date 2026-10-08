{"slug": "company-ai-assistant", "title": "An AI assistant grounded in company documents: capabilities and limits", "status": "draft"}
---
An AI assistant can help find answers in company documents. Its usefulness depends on source quality, access controls and how answers are evaluated.

## Example: questions about a service

An employee wants to understand what a service package includes. Instead of searching several documents, they ask an assistant that retrieves relevant passages and answers with a source reference. This is an illustrative use case rather than a claim about a specific deployment.

## How RAG works

The system retrieves passages related to a question, then passes them to a language model as context. The model uses that context to compose an answer.

## What to check

- Are documents current, complete and owned by someone?
- Is the user allowed to access all information used in the answer?
- Does the answer reference its source without inventing missing facts?
- What happens when documents conflict or no relevant information exists?

## Limits

RAG does not guarantee correctness. A model may misread a passage or omit a condition. High-impact decisions need human review. Costs depend on model usage, retrieval and keeping data up to date.

## A practical first step

Choose a small document collection and real user questions. Evaluate answers against the same examples before opening the tool to the team.

[Explore AI integrations](/en/services/ai-integrations).
