import { render } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import Button from '../../../src/components/Buttons';

describe('Testing Button component', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Teste para renderizar um button com um texto', () => {
    const { getByText } = render(<Button text="Test" type="button" />);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('Deve testar se o onClick do button é chamado', async () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button text="Test" type="button" onClick={ onClick } />);
    await userEvent.click(getByText('Test'));
    expect(onClick).toHaveBeenCalled();
  });
});
