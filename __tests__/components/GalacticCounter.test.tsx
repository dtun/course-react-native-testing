import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react-native';

import GalacticCounter from '@/components/GalacticCounter';

describe('<GalacticCounter />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('updates the counter', async () => {
    render(<GalacticCounter />);
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    const add = screen.getByText('Add');
    const sub = screen.getByText('Decrease');

    await user.press(add);
    await user.press(add);

    expect(screen.getByText('Stars: 2')).toBeTruthy();

    await user.press(sub);
    await user.press(sub);
    await user.press(sub);

    expect(screen.getByText('Stars: -1')).toBeTruthy();
  });
});
