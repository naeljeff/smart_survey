import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getHomeCarouselData = async () => {
  try {
    const response = await axios.post(
      'https://www.araksa.com/prog-x/api/underwriting_approval/api_get_slideshow.php',
      {
        key_id: 'kagjwlak123@djkaldwj123@$%2',
        source: 'Transmet',
        source_phone: 'ANDROID',
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
  const {isLoading, data, isError} = useQuery({
    queryKey: ['homeCarousel'],
    queryFn: getHomeCarouselData,
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError};
};
