# Test Suite for tRPC Implementation

This directory contains comprehensive unit tests for the tRPC setup in this Next.js application.

## Test Structure

### Core Tests
- **`setup.ts`**: Global test setup and mocks for Next.js modules
- **`mockUtils.ts`**: Reusable mock utilities for Prisma and test data

### Module Tests
- **`src/lib/__tests__/db.test.ts`**: Tests for Prisma client singleton
- **`src/trpc/__tests__/init.test.ts`**: Tests for tRPC initialization and context
- **`src/trpc/__tests__/query-client.test.ts`**: Tests for React Query client factory
- **`src/trpc/routers/__tests__/_app.test.ts`**: Tests for tRPC router and procedures
- **`src/trpc/__tests__/client.test.tsx`**: Tests for client-side tRPC provider
- **`src/trpc/__tests__/server.test.tsx`**: Tests for server-side tRPC utilities
- **`src/app/api/trpc/__tests__/route.test.ts`**: Tests for API route handlers

## Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Test Coverage

The test suite covers:

✅ **Happy Paths**: Standard functionality with expected inputs
✅ **Edge Cases**: Null values, empty arrays, large datasets
✅ **Error Handling**: Database errors, invalid requests, network failures
✅ **Pure Functions**: All pure functions with various inputs
✅ **Mocked Dependencies**: Prisma, Next.js modules, external APIs
✅ **Type Safety**: TypeScript type exports and interfaces
✅ **React Components**: Client and server rendering scenarios
✅ **API Routes**: GET/POST handlers, request validation

## Test Philosophy

This test suite follows these principles:

1. **Comprehensive Coverage**: Tests for all public interfaces and exported functions
2. **Isolation**: Each test is independent with proper setup/teardown
3. **Mocking**: External dependencies are mocked to ensure fast, reliable tests
4. **Readability**: Descriptive test names that explain the expected behavior
5. **Maintainability**: Tests follow the same structure and naming conventions

## Adding New Tests

When adding new tRPC procedures or modifying existing code:

1. Create test files in the same directory structure as the source
2. Use the existing mock utilities from `mockUtils.ts`
3. Follow the describe/it pattern for consistent organization
4. Test happy paths, edge cases, and error conditions
5. Mock external dependencies appropriately
6. Ensure tests are deterministic and don't rely on external state

## Debugging Tests

If tests fail:

1. Check the error message and stack trace
2. Run the specific test file: `vitest src/path/to/test.test.ts`
3. Use `test.only()` to focus on a single test
4. Add `console.log()` statements to inspect values
5. Check that mocks are properly configured in `beforeEach`

## Dependencies

- **Vitest**: Fast unit test framework with TypeScript support
- **@testing-library/react**: React component testing utilities
- **jsdom**: Browser environment simulation
- **@vitejs/plugin-react**: React plugin for Vitest