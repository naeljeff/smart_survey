import {useQuery} from '@tanstack/react-query';
import DeviceInfo from 'react-native-device-info';

import createApiClient from '../../../utilities/apiClient';

const apiClient = createApiClient(
  'https://www.araksa.com/prog-x/api/underwriting_approval',
);

const getHomeCarouselData = async () => {
  const systemName = DeviceInfo.getSystemName().toUpperCase();
  try {
    const response = await apiClient.post(
      '/api_get_slideshow.php',
      {
        key_id: process.env.HOME_CAROUSEL_KEY_ID,
        source: 'Transmet',
        source_phone: systemName,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching home carousel data:', error);
    throw error;
  }
};

export const UseGetCarouselData = () => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['homeCarousel'],
    queryFn: getHomeCarouselData,
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError, refetch, error};
};
