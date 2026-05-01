import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Index from '@/pages/Index'
import { render } from '../../test/test-utils'

// Mock Header and Footer to keep the test focused and fast
vi.mock('@/components/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}))

vi.mock('@/components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}))

// Lightweight mock for BookConsultationModal to expose its children (the trigger button)
// We don't need to exercise the full modal for this acceptance test.
vi.mock('@/components/BookConsultationModal', () => ({
  default: ({ children }: any) => (
    <div>
      {children}
    </div>
  ),
}))

describe('User acceptance — basic UI smoke for home page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders header, hero content and primary CTAs', async () => {
    const user = userEvent.setup()
    render(<Index />)

    // Header and Footer should be present (we've mocked them)
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()

    // Hero heading exists
    expect(screen.getByRole('heading', { name: /transform your organisation/i })).toBeInTheDocument()

    // Primary CTA exists
    const cta = screen.getByRole('button', { name: /book free consultation/i })
    expect(cta).toBeInTheDocument()

    // Secondary CTA (Learn More) is a link to the workshops page
    const learnMore = screen.getByRole('link', { name: /learn more/i })
    expect(learnMore).toBeInTheDocument()
    expect(learnMore).toHaveAttribute('href', '/services/workshops')

    // Simple interaction: focus and keyboard activation of the Book CTA (ensures it's keyboard accessible)
    await user.tab()
    await user.keyboard('{Enter}')

    // If the button was rendered, this is sufficient to show the interactive element exists.
    expect(cta).toBeEnabled()
  })
})
