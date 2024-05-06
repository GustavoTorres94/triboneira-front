import { renderWithRouter } from '../../utils';
import About from '../../../src/pages/About';

describe('Testes da About Page', () => {
  it('Teste se a page está renderizando', () => {
    const { getByText } = renderWithRouter(<About />);
    expect(getByText('about')).toBeInTheDocument();
  });
});
