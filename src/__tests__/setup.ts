import { vi } from 'vitest';

// Mock Next.js modules
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(),
}));

vi.mock('server-only', () => ({}));
vi.mock('client-only', () => ({}));

// Global test utilities
global.fetch = vi.fn();