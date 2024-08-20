import {render} from '@testing-library/react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import LoginForm from '../src/components/layoutComponent/Login/molecules/LoginForm';
import {RootStackParamList} from '../src/routes/StackNavigator';

// Mock Navigation Prop
const mockNavigation: NativeStackNavigationProp<RootStackParamList, 'login'> = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  getId: jest.fn(),
  getParent: jest.fn(),
  getState: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  pop: jest.fn(),
  popToTop: jest.fn(),
  push: jest.fn(),
  isFocused: jest.fn(),
  setOptions: jest.fn(),
};

// Mock Zustand user store
jest.mock('../src/store/storeUser', () => ({
  useUserStore: jest.fn(() => ({
    setUserData: jest.fn(),
  })),
}));

// Mock API User login
jest.mock('../src/services/api/user/getUserLogin.ts', () => ({
  UseGetUserValidationWithEmail: jest.fn(() => ({
    refetch: jest.fn().mockResolvedValue({
      data: {status: '01', message: 'success'},
    }),
    isLoading: false,
  })),
  UseGetUserValidationWithUsername: jest.fn(() => ({
    refetch: jest.fn().mockResolvedValue({
      data: {status: '01', message: 'success'},
    }),
    isLoading: false,
  })),
}));

// Mock User Login
jest.mock('react-native-simple-toast', () => ({
  show: jest.fn(),
  LONG: 'LONG',
}));

describe('User login simulation using username', () => {
  it('renders login screen correctly', () => {
    const {getByPlaceholderText} = render(
      <PaperProvider>
        <LoginForm navigation={mockNavigation} />
      </PaperProvider>,
    );

    expect(getByPlaceholderText('Enter your username')).toBeTruthy();
    expect(getByPlaceholderText('Enter your password')).toBeTruthy();
  });
});

// describe('LoginForm', () => {
//   it('should render correctly', () => {
//     // Given
//     const { getByPlaceholderText, getByText } = render(
//       <LoginForm navigation={mockNavigation} />
//     );

//     // When (In this case, there's no specific action, so this phase is implicit)

//     // Then
//     expect(getByPlaceholderText('Enter your username')).toBeTruthy();
//     expect(getByPlaceholderText('Enter your password')).toBeTruthy();
//   });

//   it('should display an error message when fields are empty and submit is clicked', () => {
//     // Given
//     const { getByText } = render(<LoginForm navigation={mockNavigation} />);
//     const loginButton = getByText('Login');

//     // When
//     fireEvent.press(loginButton);

//     // Then
//     expect(getByText('Please fill all the fields!')).toBeTruthy();
//   });

//   it('should call the correct API method based on the username format', async () => {
//     // Given
//     const { getByPlaceholderText, getByText } = render(
//       <LoginForm navigation={mockNavigation} />
//     );
//     const usernameInput = getByPlaceholderText('Enter your username');
//     const passwordInput = getByPlaceholderText('Enter your password');
//     const loginButton = getByText('Login');

//     // When
//     fireEvent.changeText(usernameInput, 'test@example.com');
//     fireEvent.changeText(passwordInput, 'password123');
//     fireEvent.press(loginButton);

//     const { UseGetUserValidationWithEmail, UseGetUserValidationWithUsername } =
//       jest.requireMock('../../services/api/user/getUserLogin');

//     // Then
//     expect(UseGetUserValidationWithEmail().refetch).toHaveBeenCalled();
//     expect(UseGetUserValidationWithUsername().refetch).not.toHaveBeenCalled();
//   });

//   // Add more tests as needed
// });
