import { screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderWithRouter } from '../../utils';
import { news } from '../../../src/utils';
import NewsSummary from '../../../src/components/NewsSumary';

describe('Testing NewsSummary component', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Testa se o componente está rendenrizando', async () => {
    renderWithRouter(<NewsSummary news={ news } />);
    const text = await screen.findByText(/Bombril 1001 utilidades surpreende e elimina o Plano no Open Qualifier./i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com as categorias', async () => {
    renderWithRouter(<NewsSummary news={ news } />);
    const text = await screen.findByText(/liminhag0d/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com as datas', async () => {
    renderWithRouter(<NewsSummary news={ news } />);
    const text = await screen.findByText(/14 Março/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para janeiro', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-01-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 janeiro/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para fevereiro', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-02-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 fevereiro/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para março', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-03-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 março/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para abril', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-04-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 abril/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para maio', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-05-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 maio/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para junho', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-06-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 junho/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para julho', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-07-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 julho/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para agosto', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-08-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 agosto/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para setembro', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-09-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 setembro/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para outubro', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-10-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 outubro/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para novembro', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-11-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 novembro/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com a data convertida para dezembro', async () => {
    renderWithRouter(<NewsSummary news={ [{ id: 1, title: 'test', realeaseTime: '2024-12-01', category: 'testing' }] } />);
    const text = await screen.findByText(/01 dezembro/i);
    expect(text).toBeInTheDocument();
  });
});
