import { Provider } from 'react-redux';
import { beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { getByText, screen, waitFor } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import Navbar from '../../../src/components/NavBar';

describe('Testando o componente Navbar', () => {
  beforeEach(() => {
    renderWithRouter(
      <Provider store={ store }>
        <Navbar />
      </Provider>,
    );
  });

  it('Deve renderizar o componente Navbar', () => {
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre a Tribo')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('Deve redirecionar para a página Home', async () => {
    await userEvent.click(screen.getByText('Home'));
    await waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument());
  });
});
