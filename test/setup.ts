import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import { QueryClient } from '@tanstack/react-query'

// Extend Vitest's expect with @testing-library/jest-dom's matchers
expect.extend(matchers as any)

// Clean up after each test
afterEach(() => {
  cleanup()
})

// Mock ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock

// Configure global QueryClient for tests
globalThis.QueryClient = QueryClient

// Mock window.navigator.clipboard
const mockClipboard = {
  writeText: vi.fn().mockResolvedValue(undefined),
  readText: vi.fn().mockResolvedValue(''),
}

// Delete existing clipboard property if it exists
delete (window.navigator as any).clipboard

// Define clipboard property
Object.defineProperty(window.navigator, 'clipboard', {
  configurable: true,
  value: mockClipboard,
})

// Mock window.scrollTo
global.window.scrollTo = vi.fn()
