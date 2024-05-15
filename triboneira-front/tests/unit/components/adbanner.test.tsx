import { screen, act } from '@testing-library/react';
import { vi, describe, it, expect, afterEach, beforeEach } from 'vitest';
import { nikeArrImg } from '../../../src/utils';
import { renderWithRouter } from '../../utils';
import AdBanner from '../../../src/components/AdBanner';

describe('Testando os AdBanners', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('Teste para renderizar um banner com um texto', () => {
    renderWithRouter(<AdBanner text="Test" linkTo="test" imageArr={ nikeArrImg } />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('Deve testar se uma imagem é renderizada', async () => {
    renderWithRouter(<AdBanner text="Test" linkTo="test" imageArr={ nikeArrImg } />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('Deve testar se a imagem muda a cada 5 segundos', async () => {
    renderWithRouter(<AdBanner text="Test" linkTo="test" imageArr={ nikeArrImg } />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', nikeArrImg[0]);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(img).toHaveAttribute('src', nikeArrImg[1]);
  });

  it('Deve testar se a imagem muda a cada 5 segundos e volta para a primeira imagem', async () => {
    renderWithRouter(<AdBanner text="Test" linkTo="test" imageArr={ nikeArrImg } />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', nikeArrImg[0]);
    act(() => {
      vi.advanceTimersByTime(25000);
    });
    expect(img).toHaveAttribute('src', nikeArrImg[0]);
  });
});
