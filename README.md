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

### Backend
- **[tRPC](https://trpc.io/)** - End-to-end typesafe APIs
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Powerful, open-source database
- **[Better Auth](https://better-auth.com/)** - Authentication library
- **[Polar](https://polar.sh/)** - Subscriptions, checkout, and customer portal
- **[Inngest](https://www.inngest.com/)** - Durable workflow engine for background jobs
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - Unified AI framework for LLMs
- **[Sentry](https://sentry.io/)** - Error tracking and performance monitoring

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
 - **[nuqs](https://github.com/47ng/nuqs)** - URL search params state for Next.js

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
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── login/        # Login page
│   │   │   └── signup/       # Signup page
│   │   ├── (dashboard)/       # App dashboard routes (editor, rest, etc.)
│   │   ├── api/               # API routes
│   │   │   ├── auth/[...all]/route.ts  # Better Auth handler
│   │   │   └── inngest/route.ts        # Inngest webhook endpoint
│   │   └── logout.tsx         # Logout button (client component)
│   ├── components/
│   │   ├── app-header.tsx     # Header
│   │   ├── app-sidebar.tsx    # Sidebar
│   │   └── ui/                # Reusable UI components
│   ├── config/
│   │   └── constants.ts       # App constants & configuration
│   ├── features/
│   │   ├── auth/              # Authentication features
│   │   ├── subscriptions/     # Polar subscription UI/flows
│   │   └── workflows/         # Workflow-related UI/logic
│   ├── hooks/                # Custom React hooks
│   ├── inngest/              # Background job definitions
│   │   ├── client.ts         # Inngest client instance
│   │   └── functions.ts      # Job functions (workflow & AI execution)
│   ├── instrumentation.ts    # Server-side instrumentation (Sentry)
│   ├── instrumentation-client.ts # Client-side instrumentation (Sentry)
│   ├── lib/                  # Utility functions and configs
│   │   ├── auth.ts           # Authentication configuration (Better Auth)
│   │   ├── auth-client.ts    # Better Auth client (browser)
│   │   ├── auth-utils.ts     # requireAuth / requireUnauth helpers
│   │   ├── polar.ts          # Polar SDK client (subscriptions & billing)
│   │   ├── db.ts             # Database client
│   │   └── utils.ts          # Helper utilities
│   └── trpc/                 # tRPC configuration
│       ├── client.tsx        # TRPC React provider/client
│       ├── server.tsx        # Server-side tRPC caller
│       ├── query-client.ts   # TanStack Query client
│       ├── routers/          # API routers
│       │   └── _app.ts       # Root router (getWorkflows, createWorkflow, testAi)
│       └── init.ts           # tRPC initialization, protectedProcedure & premiumProcedure
│
│   └── generated/
│       └── prisma/           # Prisma Client output (configured in schema)
├── public/                   # Static assets
├── sentry.server.config.ts   # Sentry server configuration
├── sentry.edge.config.ts     # Sentry edge runtime configuration
├── biome.json               # Biome configuration
├── next.config.ts           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
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

- **User** - User accounts with email verification
- **Session** - User sessions with IP and user agent tracking
- **Account** - OAuth and credential accounts
- **Verification** - Email and identity verification tokens
- **Workflow** - Automation workflows created by users

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

Quiver uses [Inngest](https://www.inngest.com/) for reliable, durable workflow execution. Background jobs are:

- ✅ **Reliable** - Automatic retries and error handling
- ✅ **Observable** - Built-in logging and monitoring
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Durable** - Multi-step workflows with sleep/wait capabilities


### Inngest Dev Server

Run the Inngest dev server to test and monitor jobs locally:

```bash
npx inngest-cli@latest dev
```

Then visit [http://localhost:8288](http://localhost:8288) to view the dashboard.

## AI Integration

Quiver integrates seamlessly with multiple AI providers through the Vercel AI SDK and Inngest's AI wrapper, enabling:

- 🤖 **Multi-Provider Support** - OpenAI, Google Gemini, and Anthropic Claude
- 🔄 **Automatic Retries** - Built-in error handling for AI API calls
- 📊 **Observable AI Steps** - Monitor and debug AI interactions in Inngest dashboard
- 🎯 **Type-Safe** - Full TypeScript support for all AI operations
- ⚡ **Parallel Processing** - Run multiple AI models simultaneously


### Supported AI Models

| Provider | Models | Use Case |
|----------|--------|----------|
| **OpenAI** | GPT-4, GPT-4 Turbo, GPT-3.5 | General-purpose, reasoning, code generation |
| **Google Gemini** | Gemini 2.5 Flash, Gemini Pro | Fast responses, multimodal, long context |
| **Anthropic Claude** | Claude Sonnet 4.5, Claude Opus | Extended context, complex reasoning, analysis |

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
2. User clicks "Create Workflow" → tRPC mutation triggered
3. Backend queues Inngest job → `test/hello.world` event sent
4. Inngest function executes multi-step workflow:
   - Fetches data (with 5s delay simulation)
   - Processes data (with 5s delay simulation)
   - Creates workflow record in database
5. UI updates with success toast notification

**AI Workflow Example:**

1. User clicks "Test AI" → tRPC `testAi` mutation triggered
2. Backend queues AI job → `execute/ai` event sent to Inngest
3. Inngest function executes parallel AI calls:
   - Google Gemini processes the prompt
   - OpenAI GPT-4 processes the same prompt
   - Anthropic Claude processes the same prompt
4. All responses collected and returned with full observability
5. UI shows success notification

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
