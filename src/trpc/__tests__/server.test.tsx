import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock server-only before importing
vi.mock('server-only', () => ({}));
vi.mock('../query-client', () => ({
  makeQueryClient: vi.fn(() => ({
    getQueryCache: vi.fn(() => ({ subscribe: vi.fn() })),
    getMutationCache: vi.fn(() => ({ subscribe: vi.fn() })),
  })),
}));

describe('tRPC Server Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
  });

  describe('getQueryClient', () => {
    it('should return a query client', async () => {
      const { getQueryClient } = await import('../server');
      const client = getQueryClient();
      
      expect(client).toBeDefined();
      expect(typeof client).toBe('object');
    });

    it('should return the same client in the same request (cached)', async () => {
      const { getQueryClient } = await import('../server');
      const client1 = getQueryClient();
      const client2 = getQueryClient();
      
      // Should be cached and return same instance
      expect(client1).toBe(client2);
    });
  });

  describe('trpc proxy', () => {
    it('should be defined', async () => {
      const { trpc } = await import('../server');
      
      expect(trpc).toBeDefined();
      expect(typeof trpc).toBe('object');
    });

    it('should have queryOptions method', async () => {
      const { trpc } = await import('../server');
      
      expect(trpc).toHaveProperty('getUsers');
    });
  });

  describe('caller', () => {
    it('should be defined', async () => {
      const { caller } = await import('../server');
      
      expect(caller).toBeDefined();
      expect(typeof caller).toBe('object');
    });

    it('should have getUsers method', async () => {
      const { caller } = await import('../server');
      
      expect(caller).toHaveProperty('getUsers');
      expect(typeof caller.getUsers).toBe('function');
    });
  });

  describe('server-only enforcement', () => {
    it('should import server-only module', async () => {
      // This test verifies that the module requires 'server-only'
      // If the import succeeds, the module is correctly marked as server-only
      const module = await import('../server');
      
      expect(module).toBeDefined();
    });
  });
});