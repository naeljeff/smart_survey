import {useQuery} from '@tanstack/react-query';
import DeviceInfo from 'react-native-device-info';

import createApiClient from '../../../utilities/apiClient';

const getHomeCarouselData = async () => {
  const BASE_HOME_CAROUSEL_URL: string =
    process.env.BASE_HOME_CAROUSEL_URL || '';
  const apiClient = createApiClient(BASE_HOME_CAROUSEL_URL);
  const systemName = DeviceInfo.getSystemName().toUpperCase();
  try {
    const response = await apiClient.post(
      '',
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
