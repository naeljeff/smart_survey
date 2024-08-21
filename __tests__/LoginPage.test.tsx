import React from 'react';
import {render, waitFor} from '@testing-library/react-native';

import LoginHeader from '../src/components/layoutComponent/Login/organisms/LoginHeader';
import LoginDeviceInfo from '../src/components/layoutComponent/Login/molecules/LoginDeviceInfo';

jest.mock('react-native-device-info', () => ({
  getUniqueId: jest.fn(() => Promise.resolve('unique-device-id')),
}));

describe('Test beberapa login components', () => {
  it('should render login header component and its image header correctly', () => {
    // Given
    const {getByTestId} = render(<LoginHeader />);

    // Then
    expect(getByTestId('login-header')).toBeTruthy();
    expect(getByTestId('login-banner-image')).toBeTruthy();
  });

  it('should render LoginDeviceInfo with correct device ID and app version', async () => {
    // Given
    const {getByText} = render(<LoginDeviceInfo />);

    // Then
    await waitFor(() => {
      expect(getByText('Device ID: unique-device-id')).toBeTruthy();
      expect(getByText('Version 0.1.0')).toBeTruthy();
    });
  });
});
