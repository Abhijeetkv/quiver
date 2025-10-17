import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from '@tanstack/react-query';
/**
 * Create a QueryClient configured with a 30-second query stale time and custom de/hydration behavior.
 *
 * The dehydrate configuration treats a query as dehydratable if the default predicate accepts it or if the query's state status is `"pending"`. Hydration and serialization hooks are available (commented) for optional use.
 *
 * @returns The configured QueryClient instance
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}