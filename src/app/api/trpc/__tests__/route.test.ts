import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createMockPrismaClient, mockUsers } from '@/__tests__/mockUtils';

// Mock dependencies
vi.mock('@/lib/db', () => ({
  default: createMockPrismaClient(),
}));

vi.mock('@trpc/server/adapters/fetch', () => ({
  fetchRequestHandler: vi.fn((opts) => {
    return Promise.resolve(new Response(JSON.stringify({ success: true })));
  }),
}));

describe('tRPC API Route Handler', () => {
  let mockFetchRequestHandler: any;

  beforeEach(async () => {
    vi.clearAllMocks();
    const fetchModule = await import('@trpc/server/adapters/fetch');
    mockFetchRequestHandler = fetchModule.fetchRequestHandler;
  });

  describe('handler exports', () => {
    it('should export GET handler', async () => {
      const { GET } = await import('../[trpc]/route');
      
      expect(GET).toBeDefined();
      expect(typeof GET).toBe('function');
    });

    it('should export POST handler', async () => {
      const { POST } = await import('../[trpc]/route');
      
      expect(POST).toBeDefined();
      expect(typeof POST).toBe('function');
    });

    it('should use the same handler for GET and POST', async () => {
      const { GET, POST } = await import('../[trpc]/route');
      
      expect(GET).toBe(POST);
    });
  });

  describe('GET handler', () => {
    it('should call fetchRequestHandler with correct parameters', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers');

      await GET(mockRequest);

      expect(mockFetchRequestHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/api/trpc',
          req: mockRequest,
          router: expect.any(Object),
          createContext: expect.any(Function),
        })
      );
    });

    it('should return a Response object', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers');

      const response = await GET(mockRequest);

      expect(response).toBeInstanceOf(Response);
    });

    it('should handle query requests', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers?batch=1');

      const response = await GET(mockRequest);

      expect(mockFetchRequestHandler).toHaveBeenCalled();
      expect(response).toBeDefined();
    });
  });

  describe('POST handler', () => {
    it('should call fetchRequestHandler with correct parameters', async () => {
      const { POST } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers', {
        method: 'POST',
        body: JSON.stringify({ id: 1 }),
      });

      await POST(mockRequest);

      expect(mockFetchRequestHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/api/trpc',
          req: mockRequest,
          router: expect.any(Object),
          createContext: expect.any(Function),
        })
      );
    });

    it('should return a Response object', async () => {
      const { POST } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers', {
        method: 'POST',
      });

      const response = await POST(mockRequest);

      expect(response).toBeInstanceOf(Response);
    });

    it('should handle mutation requests', async () => {
      const { POST } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/createUser', {
        method: 'POST',
        body: JSON.stringify({ email: 'new@example.com', name: 'New User' }),
      });

      const response = await POST(mockRequest);

      expect(mockFetchRequestHandler).toHaveBeenCalled();
      expect(response).toBeDefined();
    });
  });

  describe('endpoint configuration', () => {
    it('should use /api/trpc as endpoint', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers');

      await GET(mockRequest);

      expect(mockFetchRequestHandler).toHaveBeenCalledWith(
        expect.objectContaining({
          endpoint: '/api/trpc',
        })
      );
    });

    it('should pass appRouter to handler', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers');

      await GET(mockRequest);

      const call = vi.mocked(mockFetchRequestHandler).mock.calls[0][0];
      expect(call.router).toBeDefined();
      expect(call.router._def).toBeDefined();
    });

    it('should pass createContext function to handler', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers');

      await GET(mockRequest);

      const call = vi.mocked(mockFetchRequestHandler).mock.calls[0][0];
      expect(call.createContext).toBeDefined();
      expect(typeof call.createContext).toBe('function');
    });
  });

  describe('error handling', () => {
    it('should handle invalid requests gracefully', async () => {
      const { GET } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/invalidProcedure');

      const response = await GET(mockRequest);

      expect(response).toBeDefined();
    });

    it('should handle requests with invalid JSON body', async () => {
      const { POST } = await import('../[trpc]/route');
      const mockRequest = new Request('http://localhost:3000/api/trpc/getUsers', {
        method: 'POST',
        body: 'invalid json',
      });

      const response = await POST(mockRequest);

      expect(response).toBeDefined();
    });
  });
});