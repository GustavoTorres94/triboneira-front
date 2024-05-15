import { screen } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import { renderWithRouter } from '../../utils';
import { powerRanking, comunityRanking } from '../../../src/utils';
import RankingTable from '../../../src/components/RankingTable';

describe('Testando o RankingTable', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Testa se o componente está rendenrizando', async () => {
    renderWithRouter(<RankingTable title="Ranking da Comunidade" ranking={ comunityRanking } />);
    const text = await screen.findByText(/Ranking da Comunidade/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com os títulos', async () => {
    renderWithRouter(<RankingTable title="Power Ranking do Apokão" ranking={ powerRanking } />);
    const text = await screen.findByText(/Power Ranking do Apokão/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com os times do ranking', async () => {
    renderWithRouter(<RankingTable title="Power Ranking do Apokão" ranking={ powerRanking } />);
    const text = await screen.findByText(/g2/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando com os times do ranking da comunidade', async () => {
    renderWithRouter(<RankingTable title="Ranking da Comunidade" ranking={ comunityRanking } />);
    const text = await screen.findByText(/mibr/i);
    expect(text).toBeInTheDocument();
  });

  it('Testa se o componente está rendenrizando as posições corretas do time no ranking', async () => {
    renderWithRouter(<RankingTable title="Ranking da Comunidade" ranking={ comunityRanking } />);
    const cellArr = await screen.findAllByRole('row');
    console.log(cellArr[3]);
    expect(cellArr[3]).toHaveTextContent(/legacy/i);
  });
});
