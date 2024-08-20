import 'react-native';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native/Libraries/Animated/Animated', () => {
    return {
      Easing: {
        bezier: jest.fn(() => ({})),
      },
    };
  });