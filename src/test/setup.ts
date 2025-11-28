import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock ResizeObserver globally
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock navigator.clipboard globally using vi.stubGlobal
vi.stubGlobal('navigator', {
  ...navigator,
  clipboard: {
    writeText: vi.fn(),
    readText: vi.fn(),
  },
})

// Mock Supabase client
const mockSupabase = {
  from: vi.fn(() => ({
    insert: vi.fn(),
    select: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
    eq: vi.fn(),
  })),
}

vi.mock('@/integrations/supabase/client', () => ({
  supabase: mockSupabase,
}))

// Make mockSupabase available globally for tests
global.mockSupabase = mockSupabase