import renderer from 'react-test-renderer';

import TabOneScreen from '@/app/(tabs)';
import TabTwoScreen from '@/app/(tabs)/two';

describe('App', () => {
  test('renders Tab 1 correctly', () => {
    const tree = renderer.create(<TabOneScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders Tab 2 correctly', () => {
    const tree = renderer.create(<TabTwoScreen />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
