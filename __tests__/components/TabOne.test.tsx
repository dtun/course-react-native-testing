import { render, screen } from '@testing-library/react-native';

import TabOneScreen from '@/app/(tabs)';

describe('<TabOneScreen />', () => {
  test('Shows Galaxies text', () => {
    render(<TabOneScreen />);

    const label = screen.getByText('Galaxies Home');

    expect(label).toBeTruthy();
  });

  test('Shows the logo', () => {
    render(<TabOneScreen />);

    const logo = screen.getByRole('img');

    expect(logo.props.source.uri).toEqual(
      'https://galaxies.dev/img/logos/logo--blue.png'
    );
  });

  test('Shows the separator', () => {
    render(<TabOneScreen />);

    const separator = screen.getByTestId('separator');

    expect(separator).toBeTruthy();
  });
});
