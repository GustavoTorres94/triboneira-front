import { renderWithRouter } from '../../utils';
import { Contact } from '../../../src/pages';

describe('Testes da Page de Contatos', () => {
  it('Teste se a Page de Contatos está renderizando', () => {
    const { getByText } = renderWithRouter(<Contact />);
    expect(getByText('Contact')).toBeInTheDocument();
  });
});
