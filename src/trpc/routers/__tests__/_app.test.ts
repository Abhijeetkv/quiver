import { describe, it, expect, vi, beforeEach } from 'vitest';
import { appRouter } from '../_app';
import type { AppRouter } from '../_app';
import { createMockPrismaClient, mockUsers } from '@/__tests__/mockUtils';

// Mock the db module
vi.mock('@/lib/db', () => ({
  default: createMockPrismaClient(),
}));

describe('App Router', () => {
  let mockPrisma: ReturnType<typeof createMockPrismaClient>;

  beforeEach(() => {
    vi.clearAllMocks();
    // Get the mocked prisma instance
    mockPrisma = require('@/lib/db').default;
  });

  describe('appRouter structure', () => {
    it('should be defined', () => {
      expect(appRouter).toBeDefined();
    });

    it('should have getUsers procedure', () => {
      expect(appRouter._def.procedures).toHaveProperty('getUsers');
    });

    it('should export AppRouter type', () => {
      // Type assertion to verify type exists
      const router: AppRouter = appRouter;
      expect(router).toBeDefined();
    });
  });

  describe('getUsers procedure', () => {
    it('should call prisma.user.findMany', async () => {
      const caller = appRouter.createCaller({ userId: 'test-user' });
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue(mockUsers);

      const result = await caller.getUsers();

      expect(mockPrisma.user.findMany).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockUsers);
    });

    it('should return empty array when no users exist', async () => {
      const caller = appRouter.createCaller({ userId: 'test-user' });
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue([]);

      const result = await caller.getUsers();

      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });

    it('should return all users with correct structure', async () => {
      const caller = appRouter.createCaller({ userId: 'test-user' });
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue(mockUsers);

      const result = await caller.getUsers();

      expect(result).toHaveLength(3);
      result.forEach(user => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('name');
      });
    });

    it('should handle users with null names', async () => {
      const usersWithNull = [
        { id: 1, email: 'test@example.com', name: null },
      ];
      const caller = appRouter.createCaller({ userId: 'test-user' });
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue(usersWithNull);

      const result = await caller.getUsers();

      expect(result).toHaveLength(1);
      expect(result[0].name).toBeNull();
    });

    it('should propagate database errors', async () => {
      const caller = appRouter.createCaller({ userId: 'test-user' });
      const dbError = new Error('Database connection failed');
      vi.mocked(mockPrisma.user.findMany).mockRejectedValue(dbError);

      await expect(caller.getUsers()).rejects.toThrow('Database connection failed');
    });

    it('should handle large result sets', async () => {
      const caller = appRouter.createCaller({ userId: 'test-user' });
      const largeUserSet = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        email: `user${i + 1}@example.com`,
        name: `User ${i + 1}`,
      }));
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue(largeUserSet);

      const result = await caller.getUsers();

      expect(result).toHaveLength(1000);
      expect(mockPrisma.user.findMany).toHaveBeenCalledTimes(1);
    });

    it('should not accept any input parameters', async () => {
      const caller = appRouter.createCaller({ userId: 'test-user' });
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue(mockUsers);

      // getUsers should not accept parameters
      const result = await caller.getUsers();
      
      expect(mockPrisma.user.findMany).toHaveBeenCalledWith();
      expect(result).toBeDefined();
    });
  });

  describe('router caller creation', () => {
    it('should create caller with context', () => {
      const caller = appRouter.createCaller({ userId: 'test-user-123' });
      
      expect(caller).toBeDefined();
      expect(caller.getUsers).toBeDefined();
    });

    it('should work with different contexts', async () => {
      const caller1 = appRouter.createCaller({ userId: 'user-1' });
      const caller2 = appRouter.createCaller({ userId: 'user-2' });
      
      vi.mocked(mockPrisma.user.findMany).mockResolvedValue(mockUsers);
      
      const result1 = await caller1.getUsers();
      const result2 = await caller2.getUsers();
      
      expect(result1).toEqual(result2);
      expect(mockPrisma.user.findMany).toHaveBeenCalledTimes(2);
    });
  });
});