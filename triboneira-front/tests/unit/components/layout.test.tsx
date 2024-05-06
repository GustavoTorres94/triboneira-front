import { Provider } from 'react-redux';
import { beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import Layout from '../../../src/components/Layout';

describe('Testando o componente Layout', () => {
  beforeEach(() => {
    renderWithRouter(
      <Provider store={ store }>
        <Layout />
      </Provider>,
    );
  });

  it('Deve renderizar o componente Layout', () => {
    expect(screen.getByText('Triboneira!')).toBeInTheDocument();
    expect(screen.getByText('A Tribo cuida da Tribo!')).toBeInTheDocument();
  });

  it('Deve renderizar o botão de login', () => {
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('Deve renderizar o botão de cadastro', () => {
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
  });
});
