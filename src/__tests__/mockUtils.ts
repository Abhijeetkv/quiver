import { vi } from 'vitest';
import type { PrismaClient } from '@/generated/prisma';

export const createMockPrismaClient = (): PrismaClient => {
  return {
    user: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    post: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    $connect: vi.fn(),
    $disconnect: vi.fn(),
    $transaction: vi.fn(),
  } as unknown as PrismaClient;
};

export const mockUsers = [
  { id: 1, email: 'user1@example.com', name: 'User One' },
  { id: 2, email: 'user2@example.com', name: 'User Two' },
  { id: 3, email: 'user3@example.com', name: null },
];

export const mockPosts = [
  { id: 1, title: 'Post 1', content: 'Content 1', published: true, authorId: 1 },
  { id: 2, title: 'Post 2', content: null, published: false, authorId: 1 },
  { id: 3, title: 'Post 3', content: 'Content 3', published: true, authorId: 2 },
];