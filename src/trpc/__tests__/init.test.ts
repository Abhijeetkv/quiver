import { describe, it, expect, vi } from 'vitest';
import { createTRPCContext, createTRPCRouter, baseProcedure } from '../init';

describe('tRPC Initialization', () => {
  describe('createTRPCContext', () => {
    it('should create a context with userId', async () => {
      const context = await createTRPCContext();
      
      expect(context).toHaveProperty('userId');
      expect(context.userId).toBe('user_123');
    });

    it('should return consistent context', async () => {
      const context1 = await createTRPCContext();
      const context2 = await createTRPCContext();
      
      expect(context1).toEqual(context2);
    });

    it('should be cached with React cache', async () => {
      const context1 = await createTRPCContext();
      const context2 = await createTRPCContext();
      
      // Since it's cached, should return the same object reference
      expect(context1).toBe(context2);
    });
  });

  describe('createTRPCRouter', () => {
    it('should create a router with procedures', () => {
      const router = createTRPCRouter({
        test: baseProcedure.query(() => 'test'),
      });
      
      expect(router).toBeDefined();
      expect(typeof router).toBe('object');
    });

    it('should handle multiple procedures', () => {
      const router = createTRPCRouter({
        query1: baseProcedure.query(() => 'query1'),
        query2: baseProcedure.query(() => 'query2'),
        mutation1: baseProcedure.mutation(() => 'mutation1'),
      });
      
      expect(router).toBeDefined();
    });

    it('should create empty router', () => {
      const router = createTRPCRouter({});
      
      expect(router).toBeDefined();
      expect(typeof router).toBe('object');
    });
  });

  describe('baseProcedure', () => {
    it('should create a query procedure', () => {
      const procedure = baseProcedure.query(() => 'test');
      
      expect(procedure).toBeDefined();
    });

    it('should create a mutation procedure', () => {
      const procedure = baseProcedure.mutation(() => 'test');
      
      expect(procedure).toBeDefined();
    });

    it('should chain input validation', () => {
      const procedure = baseProcedure
        .input((val: unknown) => val)
        .query(() => 'test');
      
      expect(procedure).toBeDefined();
    });
  });
});