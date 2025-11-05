# Backend

This directory contains the backend services and API for the Juris PDF AI application.

## Structure

```
backend/
├── supabase/              # Supabase configuration and functions
│   ├── config.toml       # Supabase project configuration
│   ├── functions/        # Edge functions
│   │   ├── chat-rag/     # Chat with RAG functionality
│   │   └── process-pdf/  # PDF processing functionality
│   └── migrations/       # Database migrations
│       └── *.sql         # Migration files
```

## Supabase Functions

### chat-rag
Provides chat functionality with Retrieval Augmented Generation (RAG) capabilities for legal documents.

### process-pdf
Handles PDF document processing and indexing for the legal document corpus.

## Requirements

See [requirements.txt](requirements.txt) for backend dependencies and setup instructions.

## Development

These functions are deployed on Supabase Edge Functions and use Deno runtime. Refer to the Supabase documentation for local development setup.

### Environment Variables

Make sure to set the following environment variables in your Supabase project:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `LOVABLE_API_KEY` - Lovable AI API key (required for chat-rag function)
