# Frontend

React-based frontend application for Juris PDF AI.

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **TanStack Query** - Data fetching and state management
- **Supabase** - Authentication and database

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Installation

```bash
# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

### Development

```bash
# Start dev server on port 8080
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn-ui components
│   │   ├── Auth.tsx     # Authentication component
│   │   ├── ChatInterface.tsx
│   │   └── DocumentManager.tsx
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Third-party integrations
│   │   └── supabase/    # Supabase client and types
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
├── package.json         # Dependencies
└── vite.config.ts       # Vite configuration
```

## Features

- User authentication via Supabase
- Document management and upload
- Chat interface with RAG for legal documents
- Responsive design with modern UI
