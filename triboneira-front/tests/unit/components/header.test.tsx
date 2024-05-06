import { Provider } from 'react-redux';
import { beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import Header from '../../../src/components/Header';

describe('Testando o componente Header', () => {
  beforeEach(() => {
    renderWithRouter(
      <Provider store={ store }>
        <Header />
      </Provider>,
    );
  });

  it('Deve renderizar o componente Header', () => {
    expect(screen.getByText('Triboneira!')).toBeInTheDocument();
    expect(screen.getByText('A Tribo cuida da Tribo!')).toBeInTheDocument();
  });

  it('Deve renderizar o botão de login', () => {
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('Deve renderizar o botão de cadastro', () => {
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
  });
  // Bug encontrado. Quando o click no link acontece o teste não está renderizando o componente de login.
  // Olhar o que pode ser mais tarde.
  // it.only('Deve renderizar o botão de dashboard', async () => {
  //   await userEvent.click(screen.getByText('Login'));
  //   console.log(screen.getByText('Login'));

  //   await waitFor(() => {
  //     userEvent.type(screen.getByPlaceholderText('email@email.com ou meu_nick'), 'user');
  //     userEvent.type(screen.getByLabelText('Senha'), 'password');
  //     userEvent.click(screen.getByText('Entrar'));
  //     expect(screen.getByText('Dashboard')).toBeInTheDocument();
  //   });
  // });

  // it('Deve renderizar o botão de logout', async () => {
  //   await userEvent.click(screen.getByText('Login'));
  //   await userEvent.type(screen.getByPlaceholderText('email@email.com ou meu_nick'), 'user');
  //   await userEvent.type(screen.getByLabelText('Senha'), 'password');
  //   await userEvent.click(screen.getByText('Entrar'));

  //   await waitFor(() => {
  //     userEvent.click(screen.getByText('Logout'));
  //     expect(screen.getByText('Login')).toBeInTheDocument();
  //   });
  // });
});
