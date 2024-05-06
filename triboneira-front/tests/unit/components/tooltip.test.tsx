import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import store from '../../../src/redux';
import { renderWithRouter } from '../../utils';
import ToolTipComponet from '../../../src/components/ToolTip';
import { streamerFilteredMock } from '../../mocks/streamers.mock';

describe('ToolTip Component', () => {
  const { streamerName, game, title, type, viewers } = streamerFilteredMock[0];

  it('should render the ToolTip component', () => {
    renderWithRouter(
      <Provider store={ store }>
        <ToolTipComponet
          userName={ streamerName }
          gameName={ game }
          title={ title }
          type={ type }
          viewerCount={ viewers }
        />
      </Provider>,
    );

    expect(screen.getByText(streamerName)).toBeInTheDocument();
    expect(screen.getByText(game)).toBeInTheDocument();
    expect(screen.getByText(type)).toBeInTheDocument();
    expect(screen.getByText(`${viewers} viewers`)).toBeInTheDocument();
  });
});
