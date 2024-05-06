import { Provider } from 'react-redux';
import store from '../../../src/redux';
import { Home } from '../../../src/pages';
import { renderWithRouter } from '../../utils';

describe('Testes da Home Page', () => {
  it('Testa se a Home Page está renderizando, com provider', () => {
    const { getByText } = renderWithRouter(
      <Provider store={ store }>
        <Home />
      </Provider>,
    );
    const text = getByText('Home');
    expect(text).toBeInTheDocument();
  });
});
