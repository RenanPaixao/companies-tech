import '@testing-library/jest-dom'
import { expect, vi } from 'vitest'

import resizeObserver from 'resize-observer-polyfill'

import serializer from '@/tests/serializer'

global.ResizeObserver = resizeObserver

// Some methods are not implement by JSDOM. We can mock all of them using this function to avoid errors.
// @see https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

expect.addSnapshotSerializer(serializer)
