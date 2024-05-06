import { Provider } from 'react-redux';
import { beforeEach, vi, afterEach } from 'vitest';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils';
import SideBar from '../../../src/components/SideBar';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Testando o componente SideBar', () => {
  let store: any;

  beforeEach(() => {
    const initialState = {
      stream: {
        data: [],
        isLoading: false,
      },
    };
    store = mockStore(initialState);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Deve renderizar o componente SideBar', () => {
    renderWithRouter(
      <Provider store={ store }>
        <SideBar />
      </Provider>,
    );
    expect(screen.getByAltText('Twitch Logo in SVG format')).toBeInTheDocument();
  });

  it('Testa se ao clicar no Home button o compoenente é renderizado', async () => {
    renderWithRouter(
      <Provider store={ store }>
        <SideBar />
      </Provider>,
    );
    const homeButton = screen.getByLabelText('home-icon');
    await userEvent.click(homeButton);
    expect(screen.getByAltText('Twitch Logo in SVG format')).toBeInTheDocument();
  });

  // it('Teste se o state do Redux traz as informações corretas e renderiza o SideCard', async () => {
  //   const initialState = {
  //     stream: {
  //       data: streamersMock,
  //       isLoading: false,
  //     },
  //   };
  //   const mockStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  //   const mockFunction = vi.fn();

  //   vi.spyOn(store, 'dispatch').mockImplementation(mockFunction);
  //   vi.spyOn(store, 'getState').mockReturnValue(initialState as any);

  //   renderWithRouter(
  //     <Provider store={ mockStore }>
  //       <SideBar />
  //     </Provider>,
  //   );

  //   expect(screen.getByText('michel')).toBeInTheDocument();
  // });

  // it.only('Teste se o state do Redux traz as informações corretas e renderiza o SideCard', async () => {
  //   renderWithRouter(
  //     <Provider store={ store }>
  //       <SideBar />
  //     </Provider>,
  //   );
  //   await store.dispatch(getAllStreams());

  //   await waitFor(() => {
  //     expect(screen.getByText('michel')).toBeInTheDocument();
  //   });
  // });
});
