import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const fetchGoogleMapsData = async (address: string) => {
  const BASE_URL: string = process.env.BASE_GOOGLE_MAP_API_URL || '';
  const KEY_ID: string = process.env.KEY_ID_GOOGLE_MAPS || '';
  const formattedAddress = encodeURIComponent(address);
  try {
    const res = await axios.get(
      `${BASE_URL}address=${formattedAddress}&key=${KEY_ID}`,
    );

    return res.data;
  } catch (error) {
    console.error('Error fetching Google Maps data:', error);
    throw error;
  }
};

export const UseGetGoogleMapsData = (address: string) => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['googleMapsData', address],
    queryFn: () => fetchGoogleMapsData(address),
    refetchOnReconnect: 'always',
    refetchOnWindowFocus: true,
    enabled: !!address,
  });

  return {isLoading, data, isError, refetch, error};
};
