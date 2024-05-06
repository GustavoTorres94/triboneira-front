import { renderWithRouter } from '../../utils';
import NotFound from '../../../src/pages/NotFound';

describe('Testes da NotFound Page', () => {
  it('Testa se a NotFound page está renderizando', () => {
    const { getByText } = renderWithRouter(<NotFound />);
    expect(getByText('NotFound')).toBeInTheDocument();
  });
});
