import { Provider } from 'react-redux';
import { vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { getAllByRole } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import Login from '../../../src/pages/Login';

describe('Testes de Login Page', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  const emailPlaceholder = 'email@email.com ou meu_nick';
  const passwordPlaceholder = 'Digite sua Senha';

  it('Testa se a Login page está renderizando, com provider', () => {
    const { getByPlaceholderText } = renderWithRouter(
      <Provider store={ store }>
        <Login />
      </Provider>,
    );
    expect(getByPlaceholderText(emailPlaceholder)).toBeInTheDocument();
    expect(getByPlaceholderText(passwordPlaceholder)).toBeInTheDocument();
  });

  it('Teste para verificar se o procedimento de localstorage funciona corretamente', async () => {
    const { getByPlaceholderText, getByRole } = renderWithRouter(
      <Provider store={ store }>
        <Login />
      </Provider>,
    );
    const emailInput = getByPlaceholderText(emailPlaceholder);
    const passwordInput = getByPlaceholderText(passwordPlaceholder);
    const submitButton = getByRole('button', { name: 'Entrar' });

    await userEvent.type(emailInput, 'email@email.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(submitButton);

    expect(localStorage.getItem('loggedUser')).toBe('"email@email.com"');
  });

  it('Testes do tooglePassword, verifica se funciona corretamente', async () => {
    const { getByPlaceholderText } = renderWithRouter(
      <Provider store={ store }>
        <Login />
      </Provider>,
    );
    const passwordInput = getByPlaceholderText(passwordPlaceholder);
    const showPasswordButton = getAllByRole(document.body, 'button')[0];

    await userEvent.type(passwordInput, '123456');
    expect(passwordInput).toHaveAttribute('type', 'password');

    await userEvent.click(showPasswordButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
  });
});
