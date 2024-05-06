import { Provider } from 'react-redux';
import { vi, afterEach } from 'vitest';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import Register from '../../../src/pages/Register';

describe('Testes de Register Page', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const emailPlaceholder = 'Ex: email@email.com';
  const passwordPlaceholder = 'Digite sua Senha';

  it('Testa se a Register page está renderizando, com provider', () => {
    const { getByPlaceholderText } = renderWithRouter(
      <Provider store={ store }>
        <Register />
      </Provider>,
    );
    expect(getByPlaceholderText(emailPlaceholder)).toBeInTheDocument();
    expect(getByPlaceholderText(passwordPlaceholder)).toBeInTheDocument();
  });
});
