import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const BASE_URL: string = process.env.BASE_GET_PROCESSED_SURVEY_URL || '';
const KEY_ID: string = process.env.KEY_ID_PROCESSED_SURVEY || '';

export const fetchProcessedSurveyData = async () => {
  try {
    const res = await axios.post(
      BASE_URL,
      {
        key_id: KEY_ID,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};

export const UseGetProcessedSurveyData = () => {
  const {isLoading, data, isError, refetch} = useQuery({
    queryKey: ['processedSurveyData'],
    queryFn: fetchProcessedSurveyData,
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError, refetch};
};
