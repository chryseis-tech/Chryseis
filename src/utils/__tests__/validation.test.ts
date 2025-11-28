import { describe, it, expect } from 'vitest'
import { validateEmail, sanitizeInput } from '../validation'

describe('Email Validation Utility', () => {
  describe('validateEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('john.doe123@sub.domain.co.uk')).toBe(true)
      expect(validateEmail('user+tag@example.org')).toBe(true)
      expect(validateEmail('simple@test.io')).toBe(true)
    })

    it('should return false for invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@.com')).toBe(false)
      expect(validateEmail('test@example')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('test.example.com')).toBe(false)
    })

    it('should return false for empty or whitespace-only strings', () => {
      expect(validateEmail('')).toBe(false)
      expect(validateEmail('   ')).toBe(false)
      expect(validateEmail('\t\n')).toBe(false)
    })

    it('should return false for null or undefined inputs', () => {
      expect(validateEmail(null as any)).toBe(false)
      expect(validateEmail(undefined as any)).toBe(false)
    })

    it('should return false for non-string inputs', () => {
      expect(validateEmail(123 as any)).toBe(false)
      expect(validateEmail({} as any)).toBe(false)
      expect(validateEmail([] as any)).toBe(false)
    })
  })

  describe('sanitizeInput', () => {
    it('should remove script tags and content', () => {
      expect(sanitizeInput('<script>alert("XSS")</script>')).toBe('')
      expect(sanitizeInput('Hello <script>alert("XSS")</script> World')).toBe('Hello  World')
    })

    it('should remove HTML tags', () => {
      expect(sanitizeInput('<div>Hello</div>')).toBe('Hello')
      expect(sanitizeInput('<p><strong>Bold</strong> text</p>')).toBe('Bold text')
    })

    it('should handle empty or invalid inputs', () => {
      expect(sanitizeInput('')).toBe('')
      expect(sanitizeInput(null as any)).toBe('')
      expect(sanitizeInput(undefined as any)).toBe('')
    })

    it('should trim whitespace', () => {
      expect(sanitizeInput('  Hello World  ')).toBe('Hello World')
    })
  })
})