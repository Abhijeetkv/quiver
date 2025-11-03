# Quiver 🎯

> A modern, open-source automation platform - An alternative to Zapier and N8N

## Overview

**Quiver** is a powerful workflow automation platform that enables you to connect your apps and automate repetitive tasks without coding. Built with modern web technologies, Quiver provides a seamless experience for creating, managing, and deploying automation workflows across multiple services.

Whether you're looking to automate data synchronization, trigger notifications, or build complex multi-step workflows, Quiver offers an intuitive interface and robust infrastructure to handle your automation needs at scale.

### Why Quiver?

Unlike traditional automation platforms, Quiver is:
- **Open Source** - Full transparency and community-driven development
- **Self-Hostable** - Deploy on your own infrastructure for complete control
- **Modern Stack** - Built with the latest web technologies (Next.js 15, React 19, TypeScript)
- **Type-Safe** - End-to-end type safety from database to UI
- **Developer-First** - Easy to extend with custom integrations and workflows

### Key Features

- 🔗 **Connect Multiple Apps** - Integrate with popular services and APIs
- ⚡ **Real-time Automation** - Instant triggers and actions
- 🎨 **Visual Workflow Builder** - Drag-and-drop interface for creating automations
- 🤖 **AI-Powered Workflows** - Integrate with OpenAI, Google Gemini, and Anthropic Claude
- 🔐 **Secure Authentication** - Built-in auth system with session management
 - 📊 **Monitoring & Logs** - Track your automation runs and performance
 - 🐛 **Error Tracking** - Real-time error monitoring with Sentry
 - 🧾 **Subscriptions & Billing** - Monetize with Polar checkout and customer portal
 - 🚀 **Scalable Architecture** - Built to handle high-volume workflows
 - 💾 **Persistent Storage** - PostgreSQL database with Prisma ORM
 - 🎯 **Type-Safe APIs** - End-to-end type safety with tRPC

## Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest React with Server Components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components
 - **[Motion](https://motion.dev/)** - High-performance animations
 - **[Embla Carousel](https://www.embla-carousel.com/)** - Performant carousel/slider
 - **[Lucide Icons](https://lucide.dev/)** - Icon set for React
 - **[React Flow (XYFlow)](https://xyflow.com/)** - Graph editor for the visual workflow builder
 - **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching for Next.js

### Backend
- **[tRPC](https://trpc.io/)** - End-to-end typesafe APIs
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Powerful, open-source database
- **[Better Auth](https://better-auth.com/)** - Authentication library
- **[Polar](https://polar.sh/)** - Subscriptions, checkout, and customer portal
- **[Inngest](https://www.inngest.com/)** - Durable workflow engine for background jobs
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - Unified AI framework for LLMs
- **[Sentry](https://sentry.io/)** - Error tracking and performance monitoring
 - **[SuperJSON](https://github.com/blitz-js/superjson)** - Rich data serialization for tRPC

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
 - **[nuqs](https://github.com/47ng/nuqs)** - URL search params state for Next.js
 - **[react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable split panes
 - **[jotai](https://jotai.org/)** - Lightweight state management used in parts of the UI

### AI & Machine Learning
- **[OpenAI](https://openai.com/)** - GPT-4 and other OpenAI models
- **[Google Gemini](https://deepmind.google/technologies/gemini/)** - Google's advanced AI models
- **[Anthropic Claude](https://www.anthropic.com/)** - Claude Sonnet and other models

### Developer Tools
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[Turbopack](https://turbo.build/pack)** - Incremental bundler
- **[Sentry](https://sentry.io/)** - Application monitoring and error tracking
 - **[react-error-boundary](https://github.com/bvaughn/react-error-boundary)** - Resilient UI error boundaries

### Utilities
- **[random-word-slugs](https://github.com/coollabsio/random-word-slugs)** - Human-readable ID/slug generation
 - **[date-fns](https://date-fns.org/)** - Date utilities
 - **[react-day-picker](https://react-day-picker.js.org/)** - Date picker component
 - **[Recharts](https://recharts.org/en-US)** - Composable charting library
 - **[vaul](https://vaul.emilkowal.ski/)** - Accessible drawer component
 - **[@paralleldrive/cuid2](https://github.com/paralleldrive/cuid2)** - Compact id generation used in the codebase

## Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **PostgreSQL** database
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhijeetkv/quiver.git
   cd quiver
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/quiver"
   BETTER_AUTH_SECRET="your-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # AI Provider API Keys
   OPENAI_API_KEY="your-openai-api-key"
   GOOGLE_GENERATIVE_AI_API_KEY="your-google-api-key"
   ANTHROPIC_API_KEY="your-anthropic-api-key"
   
   # Sentry (optional for error tracking)
   SENTRY_DSN="your-sentry-dsn"
   
  # Polar (subscriptions & billing)
  POLAR_ACCESS_TOKEN="your-polar-access-token"
  POLAR_SUCCESS_URL="http://localhost:3000" # Where to redirect after successful checkout
   
   # Inngest (optional for local dev, required for production)
   # INNGEST_EVENT_KEY="your-inngest-event-key"
   # INNGEST_SIGNING_KEY="your-inngest-signing-key"
   ```

### Environment variables (detailed)

The app expects the following environment variables (explanations):

- `DATABASE_URL` — Postgres connection string used by Prisma
- `BETTER_AUTH_SECRET` — Secret for Better Auth (session signing)
- `BETTER_AUTH_URL` — The base URL used by Better Auth for emails and redirects
- `OPENAI_API_KEY` — OpenAI API key (used by the Vercel AI SDK)
- `GOOGLE_GENERATIVE_AI_API_KEY` — Google Generative AI key (Gemini)
- `ANTHROPIC_API_KEY` — Anthropic API key (Claude)
- `SENTRY_DSN` — Sentry DSN for error tracking (optional)
- `POLAR_ACCESS_TOKEN` — Polar API token (sandbox by default)
- `POLAR_SUCCESS_URL` — Redirect URL after successful Polar checkout
- `INNGEST_EVENT_KEY` — (Optional) Inngest event key for remote event publishing
- `INNGEST_SIGNING_KEY` — (Optional) Inngest signing key for webhook verification

Keep secrets out of source control. For local development you can create `.env.local` and add values there.

4. **Run database migrations**
   ```bash
   pnpm prisma migrate dev
   # or
   npx prisma migrate dev
   ```

5. **Generate Prisma Client**
   ```bash
   pnpm prisma generate
   # or
   npx prisma generate
   ```

6. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

7. **(Optional) Start Inngest dev server**
   
   In a separate terminal:
   ```bash
   npx inngest-cli@latest dev
   ```
   
   Visit [http://localhost:8288](http://localhost:8288) for the Inngest dashboard.

8. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
quiver/
├── .env                      # Local environment (not checked in)
├── .env.sentry-build-plugin  # Sentry build plugin env shim
├── prisma/                   # Prisma schema & migrations
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (auth)/           # Authentication route-group (login, signup)
│   │   ├── (dashboard)/      # Dashboard route-group (editor, rest)
│   │   ├── api/              # HTTP API routes
│   │   │   ├── auth/[...all]/route.ts    # Better Auth handler
│   │   │   ├── inngest/route.ts          # Inngest webhook endpoint
│   │   │   ├── trpc/[trpc]/route.ts      # tRPC HTTP handler
│   │   │   └── sentry-example-api/       # Sentry sample API route
│   │   ├── sentry-example-page/          # Sentry sample frontend page
│   │   ├── global-error.tsx              # App-level error reporter (reports to Sentry)
│   │   ├── globals.css                   # Global styles
│   │   └── layout.tsx                    # Root layout for App Router
│   ├── components/        # Shared UI components (app-header, app-sidebar, ui/*)
│   ├── config/            # App constants (`constants.ts`)
│   ├── features/          # Domain feature folders
│   │   ├── auth/
│   │   ├── editor/
│   │   ├── executions/
│   │   ├── subscriptions/
│   │   ├── triggers/
│   │   └── workflows/     # Workflow editor UI + server router
│   ├── hooks/             # Custom React hooks
│   ├── inngest/           # Background jobs / function definitions
│   │   ├── client.ts
│   │   └── functions.ts
│   ├── instrumentation.ts         # Server Sentry init
│   ├── instrumentation-client.ts  # Client Sentry + session replay init
│   ├── lib/               # Utilities and integrations
│   │   ├── auth.ts
│   │   ├── auth-client.ts
│   │   ├── auth-utils.ts
│   │   ├── db.ts
│   │   ├── polar.ts
│   │   └── utils.ts
│   ├── trpc/              # tRPC wiring
│   │   ├── client.tsx
│   │   ├── init.ts
│   │   ├── query-client.ts
│   │   ├── server.tsx
│   │   └── routers/
│   │       └── _app.ts
│   └── generated/
│       └── prisma/        # Prisma Client output
├── public/                # Static assets (icons, images)
├── sentry.server.config.ts
├── sentry.edge.config.ts
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── biome.json
├── components.json
├── tsconfig.json
└── README.md
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `npx inngest-cli@latest dev` | Start Inngest dev server (port 8288) |

## Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User** – Core user record; relates to sessions, accounts, and workflows
- **Session** – Session records with IP and user agent tracking
- **Account** – OAuth/credentials account linkage
- **Verification** – Email and identity verification tokens
- **Workflow** – Workflow document owned by a user; relates to nodes and connections
- **Node** – A node inside a workflow graph with position, type, and data
- **Connection** – An edge from one node to another; unique per from/to/handle pair
- **NodeType (enum)** – Currently `INITIAL`; extend as more node types are added

- **NodeType (enum)** – Values: `INITIAL`, `MANUAL_TRIGGER`, `HTTP_REQUEST` (extendable as new node types are added)

Relationships:
- A `User` has many `Workflow`s
- A `Workflow` has many `Node`s and many `Connection`s
- Each `Connection` links `fromNode -> toNode` with optional `fromOutput/toInput` handles

Run migrations with:
```bash
pnpm prisma migrate dev
```

View your data with Prisma Studio:
```bash
pnpm prisma studio
```

## Authentication

Quiver uses [Better Auth](https://better-auth.com/) for authentication, providing:

- ✅ Email/Password authentication
- ✅ Session management with JWT
- ✅ Email verification
- ✅ Secure password hashing
- ✅ OAuth providers support (extensible)

Authentication routes:
- `/login` - User login
- `/signup` - User registration

## Subscriptions & Billing (Polar)

Quiver integrates with [Polar](https://polar.sh/) to handle subscriptions, checkout, and customer portals. This lets you monetize premium features easily while keeping the developer experience smooth.

### What’s included

- 🔒 Create Polar customers automatically on signup
- 🧾 Hosted checkout for paid plans (configured products)
- 🪪 Customer portal for managing subscriptions
- 🔐 Premium route protection via tRPC middleware

### Where it’s configured

- `src/lib/polar.ts` – Polar SDK client using `POLAR_ACCESS_TOKEN` (sandbox by default)
- `src/lib/auth.ts` – Better Auth + Polar plugin configuration:
  - `createCustomerOnSignUp: true`
  - `checkout({ products: [...] , successUrl: POLAR_SUCCESS_URL })`
  - `portal()` for self-serve subscription management
- `src/trpc/init.ts` – `premiumProcedure` middleware that checks active subscriptions and throws `FORBIDDEN` if missing

### Gating premium APIs (example)

```ts
// src/trpc/init.ts
export const premiumProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  const customer = await polarClient.customers.getStateExternal({
    externalId: ctx.auth.user.id,
  });
  if (!customer.activeSubscriptions || customer.activeSubscriptions.length === 0) {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Premium membership required' });
  }
  return next({ ctx: { ...ctx, customer } });
});
```

Use `premiumProcedure` instead of `protectedProcedure` for any tRPC endpoints that require an active subscription.

## Workflows & Background Jobs

There are two related concerns in the codebase:

1) Workflow CRUD and visual editing (synchronous, via tRPC + Prisma):
- API lives in `src/features/workflows/server/routers.ts` mounted under `workflows` in the root router
- Endpoints:
  - `workflows.create` – Premium-gated; creates a new workflow pre-seeded with an `INITIAL` node
  - `workflows.remove` – Delete a workflow owned by the current user
  - `workflows.updateName` – Rename a workflow
  - `workflows.getOne` – Returns nodes and edges transformed to `@xyflow/react` shape
  - `workflows.getMany` – Paginated list with search and sorting
- Uses `random-word-slugs` to generate default names
- Uses `premiumProcedure` to enforce active subscription on create

2) Background jobs (asynchronous, via Inngest):
- Inngest is integrated and currently used to demonstrate an AI execution pipeline
- Function id `execute-ai` handles the `execute/ai` event and runs multiple AI providers in parallel with observability

### Inngest Dev Server

Run the Inngest dev server to test and monitor jobs locally:

```bash
npx inngest-cli@latest dev
```

Then visit [http://localhost:8288](http://localhost:8288) to view the dashboard.

### Client usage (tRPC)

A tiny example showing how to call the `workflows` endpoints using the tRPC React context exported from `src/trpc/client.tsx`:

```tsx
import { useTRPC } from '@/trpc/client';

export default function WorkflowsList() {
  const trpc = useTRPC();

  // Paginated list
  const { data } = trpc.workflows.getMany.useQuery({ page: 1, pageSize: 10 });

  // Create (premium-gated)
  const create = trpc.workflows.create.useMutation();

  return (
    <div>
      <button onClick={() => create.mutateAsync()}>Create workflow</button>
      <ul>
        {data?.items?.map((wf) => (
          <li key={wf.id}>{wf.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## AI Integration

Quiver integrates seamlessly with multiple AI providers through the Vercel AI SDK and Inngest's AI wrapper, enabling:

- 🤖 **Multi-Provider Support** - OpenAI, Google Gemini, and Anthropic Claude
- 🔄 **Automatic Retries** - Built-in error handling for AI API calls
- 📊 **Observable AI Steps** - Monitor and debug AI interactions in Inngest dashboard
- 🎯 **Type-Safe** - Full TypeScript support for all AI operations
- ⚡ **Parallel Processing** - Run multiple AI models simultaneously


### Supported AI Models (as configured)

| Provider | Model in code | Notes |
|----------|----------------|-------|
| OpenAI | `gpt-4` | General-purpose, reasoning, code generation |
| Google Gemini | `gemini-2.5-flash` | Fast responses, long context |
| Anthropic Claude | `claude-sonnet-4-5` | Extended context, complex reasoning |

## Error Tracking & Monitoring

Quiver uses [Sentry](https://sentry.io/) for comprehensive error tracking and performance monitoring across your entire application:

- 🐛 **Real-time Error Tracking** - Catch and diagnose errors before users report them
- 📊 **Performance Monitoring** - Track response times and identify bottlenecks
- 🤖 **AI Integration Monitoring** - Vercel AI SDK integration for tracking AI operations
- 🔍 **Session Replay** - See exactly what users experienced when errors occur
- 📝 **Console Logging** - Capture console logs for better debugging
- 🌐 **Full Stack Coverage** - Client, server, and edge runtime monitoring

### Sentry Configuration

Sentry is configured in three files:

**Server-side** (`sentry.server.config.ts`):
```ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // Track AI SDK operations
    Sentry.vercelAIIntegration({
      recordInputs: true,
      recordOutputs: true,
    }),
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,
});
```

**Edge Runtime** (`sentry.edge.config.ts`):
```ts
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
  ],
  tracesSampleRate: 1,
  enableLogs: true,
});
```

**Client-side** (`src/instrumentation-client.ts`):
```ts
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    Sentry.replayIntegration(), // Session replay for debugging
  ],
  tracesSampleRate: 1,
  enableLogs: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

### Features Monitored

- **Workflow Execution Errors** - Track failures in background jobs
- **AI API Calls** - Monitor inputs, outputs, and failures from OpenAI, Gemini, Claude
- **Database Queries** - Identify slow or failing Prisma operations
- **Authentication Issues** - Capture auth failures and security events
- **API Response Times** - Monitor tRPC endpoint performance

Try it locally:
- Visit `/sentry-example-page` to send a sample frontend error and trace a request through `/api/sentry-example-api`.


## Deployment

### Prerequisites for Production

1. Set up a PostgreSQL database (Railway, Supabase, Neon, etc.)
2. Configure environment variables
3. Build the application

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Abhijeetkv/quiver)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

- **Railway** - Automatic deployments with PostgreSQL
- **Render** - Full-stack hosting
- **AWS/GCP/Azure** - Enterprise-grade hosting

## Roadmap

### Core Features
- [ ] Visual workflow builder UI with drag-and-drop
- [ ] Pre-built app integrations (Gmail, Slack, GitHub, etc.)
- [ ] Webhook support for external triggers
- [ ] Scheduled workflows (Cron jobs)
- [ ] Conditional logic and branching in workflows
- [ ] Error handling and retry mechanisms
- [ ] Workflow templates library

### AI Features
- [x] Multi-provider AI integration (OpenAI, Gemini, Claude)
- [x] AI step observability with Inngest
- [ ] AI-powered workflow suggestions
- [ ] Natural language workflow creation
- [ ] Sentiment analysis actions
- [ ] Content generation steps
- [ ] Image generation integration
- [ ] Vector embeddings and semantic search

### Platform Features
- [x] Subscriptions & billing (Polar checkout & portal)
- [ ] Team collaboration features
- [ ] Analytics and insights dashboard
- [ ] API rate limiting
- [ ] Workflow versioning
- [ ] Custom code actions (JavaScript/Python)
- [ ] Workflow marketplace
- [ ] Multi-tenant support

## What's Built Today (MVP)

Currently implemented features:

- ✅ **Authentication System**
  - Email/password signup and login with Better Auth
  - Session management with secure token handling
  - Route guards (`requireAuth` / `requireUnauth`)
  - Protected and public routes

- ✅ **Workflow Management**
  - Create and list workflows via tRPC
  - Workflows stored in PostgreSQL via Prisma
  - Type-safe API with full client/server integration

- ✅ **Background Job Processing**
  - Inngest integration for durable workflow execution
  - Multi-step job example with sleep/wait capabilities
  - Job triggering from tRPC mutations
  - Local development dashboard at `localhost:8288`

- ✅ **AI Integration**
  - Multi-provider AI support (OpenAI, Google Gemini, Anthropic Claude)
  - Inngest AI wrapper for automatic retries and observability
  - Parallel AI model execution
  - Type-safe AI workflow definitions

- ✅ **Subscriptions & Billing**
  - Polar integration with hosted checkout & customer portal
  - Automatic customer creation on signup
  - Premium API protection via `premiumProcedure`

- ✅ **Error Tracking & Monitoring**
  - Sentry integration for full-stack error tracking
  - AI operation monitoring with Vercel AI SDK integration
  - Session replay for debugging user issues
  - Performance monitoring across client, server, and edge runtimes
  - Console log capture for comprehensive debugging

- ✅ **Modern UI Framework**
  - shadcn/ui components with Radix primitives
  - Tailwind CSS v4 for styling
  - Toast notifications with Sonner
  - Form handling with React Hook Form + Zod validation

- ✅ **Developer Experience**
  - Biome for fast linting and formatting
  - Turbopack for rapid development builds
  - Full TypeScript type safety across stack
  - tRPC for end-to-end type-safe APIs

### Current Flow Example

1. User signs up/logs in → Better Auth creates session
2. User clicks "Create Workflow" → `workflows.create` mutation runs (premium-gated)
3. Prisma creates workflow plus an initial `INITIAL` node
4. UI navigates to the editor and loads via `workflows.getOne` → nodes and edges in `@xyflow/react` shape
5. User edits graph; server persists changes via dedicated endpoints (TBD)

**AI Execution Example:**

1. User triggers an AI test → backend emits `execute/ai` event
2. Inngest function `execute-ai` runs three providers in parallel (Gemini, OpenAI, Claude)
3. Each call is wrapped with `step.ai.wrap` for retries and telemetry (visible in Inngest + Sentry)
4. Result aggregated and returned/logged with full observability

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [Zapier](https://zapier.com/) and [Make](https://www.make.com/)
- Built with amazing open-source tools
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Support

- 📧 Email: support@quiver.dev
- 🐛 Issues: [GitHub Issues](https://github.com/Abhijeetkv/quiver/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/Abhijeetkv/quiver/discussions)

---

Star ⭐ this repository if you find it helpful!
