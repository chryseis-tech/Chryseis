import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useToast } from '@/hooks/use-toast'
import { render } from '../../../test/test-utils'
import BookConsultationModal from '../BookConsultationModal'
import { Button } from '../ui/button'

const mockDismiss = vi.fn()
const mockToast = vi.fn()

vi.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: mockToast,
    dismiss: mockDismiss,
    toasts: []
  })
}))

vi.mock('@/components/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}))

vi.mock('@/components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}))

const DefaultBookConsultationModal = () => (
  <BookConsultationModal>
    <Button>Book Free Consultation</Button>
  </BookConsultationModal>
)

const renderWithProviders = (component: React.ReactElement) => {
  return render(component)
}

describe('BookConsultationModal Component', () => {
  let mockClipboardWriteText: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    vi.clearAllMocks()

    mockClipboardWriteText = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue()

    vi.mocked(useToast).mockReturnValue({
      toast: mockToast,
      dismiss: mockDismiss,
      toasts: []
    })
  })

  afterEach(() => {
    mockClipboardWriteText?.mockRestore()
  })

  describe('Modal Visibility and Content', () => {
    it('should render trigger button', () => {
      renderWithProviders(<DefaultBookConsultationModal />)

      expect(screen.getByRole('button', { name: /book free consultation/i })).toBeInTheDocument()
    })

    it('should open modal on button click', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      expect(screen.getByText(/contact us/i)).toBeInTheDocument()
    })

    it('should display contact information message', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      expect(screen.getByText(/please contact us at/i)).toBeInTheDocument()
      expect(screen.getByText(/we aim to respond within 24 hours/i)).toBeInTheDocument()
    })

    it('should display email address', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      expect(screen.getByText(/admin@chryseis.co.uk/i)).toBeInTheDocument()
    })

    it('should have clickable email link', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      const emailLink = screen.getByRole('link', { name: /admin@chryseis.co.uk/i })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', 'mailto:admin@chryseis.co.uk')
    })
  })

  describe('Modal Interaction', () => {
    it('should close modal on escape key press', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      expect(screen.getByText(/contact us/i)).toBeInTheDocument()

      await user.keyboard('{Escape}')

      await waitFor(() => {
        expect(screen.queryByText(/contact us/i)).not.toBeInTheDocument()
      })
    })

    it('should display copy email button', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      expect(screen.getByRole('button', { name: /copy email/i })).toBeInTheDocument()
    })
  })

  describe('Copy Email Functionality', () => {
    it('should copy email to clipboard when copy button is clicked', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      const copyButton = screen.getByRole('button', { name: /copy email/i })
      await user.click(copyButton)

      expect(mockClipboardWriteText).toHaveBeenCalledWith('admin@chryseis.co.uk')
      expect(mockToast).toHaveBeenCalledWith({
        title: "Email Copied",
        description: "Email address copied to clipboard",
      })
    })

    it('should show error toast if clipboard copy fails', async () => {
      const user = userEvent.setup()
      mockClipboardWriteText.mockRejectedValueOnce(new Error('Clipboard failed'))

      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      const copyButton = screen.getByRole('button', { name: /copy email/i })
      await user.click(copyButton)

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalledWith({
          title: "Copy Failed",
          description: "Unable to copy email address. Please copy manually.",
          variant: "destructive",
        })
      })
    })
  })

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
      expect(dialog).toHaveAttribute('aria-describedby', 'dialog-description')
    })

    it('should display Mail icon', async () => {
      const user = userEvent.setup()
      renderWithProviders(<DefaultBookConsultationModal />)

      const button = screen.getByRole('button', { name: /book free consultation/i })
      await user.click(button)

      const mailIcon = screen.getByRole('dialog').querySelector('svg')
      expect(mailIcon).toBeInTheDocument()
    })
  })
})
