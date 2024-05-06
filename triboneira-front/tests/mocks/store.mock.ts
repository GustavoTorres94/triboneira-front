import { vi } from 'vitest';

export const storeMock = {
  dispatch: vi.fn(),
  getState: vi.fn(),
  subscribe: vi.fn(),
  replaceReducer: vi.fn(),
  [Symbol.observable]: vi.fn(),
};
