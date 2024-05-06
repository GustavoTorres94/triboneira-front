import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import { streamerFilteredMock } from '../../mocks/streamers.mock';
import SideCard from '../../../src/components/SideCard';

const aria = 'streamer-link';

describe('Testando o componente SideCard', () => {
  it('Deve renderizar o componente SideCard', () => {
    renderWithRouter(
      <Provider store={ store }>
        <SideCard streamer="gaules" stream={ streamerFilteredMock[0] } />
      </Provider>,
    );
    expect(screen.getByLabelText(aria)).toBeInTheDocument();
  });

  it('Deve renderizar o componente SideCard com os streamers', () => {
    renderWithRouter(
      <Provider store={ store }>
        <SideCard streamer="ale_apoka" stream={ streamerFilteredMock[1] } />
      </Provider>,
    );
    expect(screen.getByLabelText(aria)).toBeInTheDocument();
  });

  it('Deve renderizar o componente SideCard com os streamers e ao clicar no streamer1 renderizar o componente Stream', async () => {
    renderWithRouter(
      <Provider store={ store }>
        <SideCard streamer="liminhag0d" stream={ streamerFilteredMock[2] } />
      </Provider>,
    );
    expect(screen.getByLabelText(aria)).toBeInTheDocument();
  });
});
