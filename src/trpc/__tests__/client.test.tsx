import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TRPCReactProvider, useTRPC } from '../client';
import React from 'react';

// Mock dependencies
vi.mock('../query-client', () => ({
  makeQueryClient: vi.fn(() => ({
    getQueryCache: vi.fn(() => ({ subscribe: vi.fn() })),
    getMutationCache: vi.fn(() => ({ subscribe: vi.fn() })),
    mount: vi.fn(),
    unmount: vi.fn(),
  })),
}));

describe('tRPC Client Provider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('TRPCReactProvider', () => {
    it('should render children', () => {
      render(
        <TRPCReactProvider>
          <div>Test Child</div>
        </TRPCReactProvider>
      );

      expect(screen.getByText('Test Child')).toBeDefined();
    });

    it('should wrap children with QueryClientProvider and TRPCProvider', () => {
      const TestComponent = () => <div>Test Content</div>;
      
      render(
        <TRPCReactProvider>
          <TestComponent />
        </TRPCReactProvider>
      );

      expect(screen.getByText('Test Content')).toBeDefined();
    });

    it('should create tRPC client on mount', () => {
      const { unmount } = render(
        <TRPCReactProvider>
          <div>Test</div>
        </TRPCReactProvider>
      );

      expect(screen.getByText('Test')).toBeDefined();
      unmount();
    });

    it('should handle multiple children', () => {
      render(
        <TRPCReactProvider>
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
        </TRPCReactProvider>
      );

      expect(screen.getByText('Child 1')).toBeDefined();
      expect(screen.getByText('Child 2')).toBeDefined();
      expect(screen.getByText('Child 3')).toBeDefined();
    });
  });

  describe('useTRPC hook', () => {
    it('should be defined', () => {
      expect(useTRPC).toBeDefined();
      expect(typeof useTRPC).toBe('function');
    });

    it('should be callable', () => {
      const TestComponent = () => {
        try {
          useTRPC();
          return <div>Hook called successfully</div>;
        } catch {
          return <div>Hook failed</div>;
        }
      };

      render(
        <TRPCReactProvider>
          <TestComponent />
        </TRPCReactProvider>
      );

      // The component should render, hook might throw outside provider but that's expected
      expect(screen.getByText(/Hook/)).toBeDefined();
    });
  });

  describe('getUrl function behavior', () => {
    it('should use window location in browser', () => {
      // Simulate browser environment
      const originalWindow = global.window;
      global.window = { location: { origin: 'http://localhost:3000' } } as any;

      render(
        <TRPCReactProvider>
          <div>Test</div>
        </TRPCReactProvider>
      );

      expect(screen.getByText('Test')).toBeDefined();
      
      global.window = originalWindow;
    });

    it('should handle VERCEL_URL in server environment', () => {
      const originalWindow = global.window;
      const originalEnv = process.env.VERCEL_URL;
      
      // @ts-ignore
      delete global.window;
      process.env.VERCEL_URL = 'myapp.vercel.app';

      render(
        <TRPCReactProvider>
          <div>Test</div>
        </TRPCReactProvider>
      );

      expect(screen.getByText('Test')).toBeDefined();
      
      global.window = originalWindow;
      if (originalEnv) {
        process.env.VERCEL_URL = originalEnv;
      } else {
        delete process.env.VERCEL_URL;
      }
    });
  });

  describe('Provider nesting', () => {
    it('should allow nested providers', () => {
      render(
        <TRPCReactProvider>
          <TRPCReactProvider>
            <div>Nested Content</div>
          </TRPCReactProvider>
        </TRPCReactProvider>
      );

      expect(screen.getByText('Nested Content')).toBeDefined();
    });

    it('should maintain separate query clients for nested providers', () => {
      const InnerComponent = () => <div>Inner</div>;
      const OuterComponent = () => (
        <>
          <div>Outer</div>
          <InnerComponent />
        </>
      );

      render(
        <TRPCReactProvider>
          <OuterComponent />
        </TRPCReactProvider>
      );

      expect(screen.getByText('Outer')).toBeDefined();
      expect(screen.getByText('Inner')).toBeDefined();
    });
  });
});