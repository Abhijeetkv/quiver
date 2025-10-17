import { describe, it, expect } from 'vitest';
import { makeQueryClient } from '../query-client';
import { QueryClient } from '@tanstack/react-query';

describe('Query Client Factory', () => {
  describe('makeQueryClient', () => {
    it('should create a new QueryClient instance', () => {
      const client = makeQueryClient();
      
      expect(client).toBeInstanceOf(QueryClient);
    });

    it('should create unique instances on each call', () => {
      const client1 = makeQueryClient();
      const client2 = makeQueryClient();
      
      expect(client1).not.toBe(client2);
    });

    it('should have default staleTime of 30 seconds', () => {
      const client = makeQueryClient();
      const defaultOptions = client.getDefaultOptions();
      
      expect(defaultOptions.queries?.staleTime).toBe(30000);
    });

    it('should have dehydrate configuration', () => {
      const client = makeQueryClient();
      const defaultOptions = client.getDefaultOptions();
      
      expect(defaultOptions.dehydrate).toBeDefined();
      expect(defaultOptions.dehydrate?.shouldDehydrateQuery).toBeDefined();
    });

    it('should have hydrate configuration', () => {
      const client = makeQueryClient();
      const defaultOptions = client.getDefaultOptions();
      
      expect(defaultOptions.hydrate).toBeDefined();
    });

    it('should dehydrate pending queries', () => {
      const client = makeQueryClient();
      const defaultOptions = client.getDefaultOptions();
      
      const mockQuery = {
        state: { status: 'pending' as const },
        queryKey: ['test'],
        queryHash: 'test',
      } as any;
      
      const shouldDehydrate = defaultOptions.dehydrate?.shouldDehydrateQuery?.(mockQuery);
      expect(shouldDehydrate).toBe(true);
    });

    it('should dehydrate success queries by default', () => {
      const client = makeQueryClient();
      const defaultOptions = client.getDefaultOptions();
      
      const mockQuery = {
        state: { status: 'success' as const, data: 'test' },
        queryKey: ['test'],
        queryHash: 'test',
      } as any;
      
      const shouldDehydrate = defaultOptions.dehydrate?.shouldDehydrateQuery?.(mockQuery);
      expect(shouldDehydrate).toBe(true);
    });
  });
});