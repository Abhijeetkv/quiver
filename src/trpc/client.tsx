'use client';
// ^-- to make sure we can mount the Provider from a server component
import type { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCContext } from '@trpc/tanstack-react-query';
import { useState } from 'react';
import { makeQueryClient } from './query-client';

import type { AppRouter } from './routers/_app';
export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();
let browserQueryClient: QueryClient;
/**
 * Obtain a React Query client appropriate for the current environment.
 *
 * On the server this returns a new QueryClient instance for each call. In the browser
 * this returns a single cached QueryClient instance reused across renders.
 *
 * @returns A QueryClient instance — a new instance on the server, or the shared browser instance when running in the browser.
 */
function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important, so we don't re-make a new client if React
  // suspends during the initial render. This may not be needed if we
  // have a suspense boundary BELOW the creation of the query client
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
/**
 * Compute the TRPC API endpoint URL appropriate for the current runtime environment.
 *
 * On the browser this yields a relative path; on the server it yields an absolute URL:
 * - Browser: "/api/trpc"
 * - Server with VERCEL_URL: "https://{VERCEL_URL}/api/trpc"
 * - Server without VERCEL_URL: "http://localhost:3000/api/trpc"
 *
 * @returns The full TRPC API URL as a string for the current environment.
 */
function getUrl() {
  const base = (() => {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  })();
  return `${base}/api/trpc`;
}
/**
 * Provide TRPC and React Query contexts to descendant components.
 *
 * Wraps children with a QueryClientProvider and TRPCProvider so descendant components can access the shared React Query client and TRPC client.
 *
 * @returns A React element that provides TRPC and React Query contexts to its children.
 */
export function TRPCReactProvider(
  props: Readonly<{
    children: React.ReactNode;
  }>,
) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          // transformer: superjson, <-- if you use a data transformer
          url: getUrl(),
        }),
      ],
    }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        {props.children}
      </TRPCProvider>
    </QueryClientProvider>
  );
}