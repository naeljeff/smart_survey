import {useMutation} from '@tanstack/react-query';
import axios from 'axios';

const BASE_LOGOUT_USER: string =
  'https://www.rks-s.com/prog-x/pengajuan_survey/api/user/deleteTokenJWT.php';

const deleteUserTokenJWT = async (deviceId: string) => {
  try {
    const response = await axios.post(
      BASE_LOGOUT_USER,
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
