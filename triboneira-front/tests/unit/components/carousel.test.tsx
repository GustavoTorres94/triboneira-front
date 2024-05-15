import { screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import { newsArray } from '../../../src/utils';
import { renderWithRouter } from '../../utils';
import Carousel from '../../../src/components/Carousel';

describe('Testando o Carousel', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Testa se o carousel está rendenrizando', async () => {
    renderWithRouter(<Carousel newsArr={ newsArray } />);
    const text = await screen.findByText(/kings/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o carousel está rendenrizando com as imagens', async () => {
    renderWithRouter(<Carousel newsArr={ newsArray } />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
