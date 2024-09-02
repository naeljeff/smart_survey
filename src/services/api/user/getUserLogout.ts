import {useMutation} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const deleteUserTokenJWT = async (deviceId: string) => {
  const BASE_LOGOUT_USER: string = process.env.BASE_LOGOUT_USER_URL || '';
  const logoutApiClient = createApiClient(BASE_LOGOUT_USER);

  try {
    const response = await logoutApiClient.post(
      '',
      {
        device_id: deviceId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(`Error deleting user JWT: ${error}`);
    throw error;
  }
};

export const useDeleteUserToken = () => {
  return useMutation({
    mutationFn: (deviceId: string) => deleteUserTokenJWT(deviceId),
    onError: error => {
      console.error('Failed to delete user JWT:', error);
    },
    onSuccess: () => {
      console.log('User JWT deleted successfully');
    },
    retry: false,
  });
};
