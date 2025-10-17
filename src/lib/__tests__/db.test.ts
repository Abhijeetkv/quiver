import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Prisma Client Singleton', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('should create a singleton PrismaClient instance', async () => {
    const { default: prisma1 } = await import('../db');
    const { default: prisma2 } = await import('../db');
    
    expect(prisma1).toBe(prisma2);
  });

  it('should have PrismaClient methods available', async () => {
    const { default: prisma } = await import('../db');
    
    expect(prisma).toHaveProperty('user');
    expect(prisma).toHaveProperty('post');
    expect(prisma).toHaveProperty('$connect');
    expect(prisma).toHaveProperty('$disconnect');
  });

  it('should store instance in global object in development', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    
    vi.resetModules();
    const { default: prisma } = await import('../db');
    const globalForPrisma = global as unknown as { prisma: typeof prisma };
    
    expect(globalForPrisma.prisma).toBeDefined();
    
    process.env.NODE_ENV = originalEnv;
  });

  it('should not pollute global in production', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';
    
    vi.resetModules();
    const globalBefore = { ...(global as any) };
    await import('../db');
    
    // In production, the global should not be modified with new prisma instance
    expect(global).toEqual(globalBefore);
    
    process.env.NODE_ENV = originalEnv;
  });
});