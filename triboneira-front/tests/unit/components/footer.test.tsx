import { screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderWithRouter } from '../../utils';
import Footer from '../../../src/components/Footer';

describe('Testando o Footer', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Testa se o footer está renderizando', async () => {
    renderWithRouter(<Footer />);
    const text = await screen.findByText(/Ajuda/i);
    expect(text).toBeInTheDocument();
  });

  it('Deve rendenrizar as logos', async () => {
    renderWithRouter(<Footer />);
    const img = await screen.findAllByRole('img');
    expect(img[0]).toBeInTheDocument();
  });
});
