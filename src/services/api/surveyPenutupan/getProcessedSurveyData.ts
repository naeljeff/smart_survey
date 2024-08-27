import {useQuery} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_PROCESSED_SURVEY || '';

export const fetchProcessedSurveyData = async () => {
  const processedSurveyClient = createApiClient(
    process.env.BASE_GET_PROCESSED_SURVEY_URL || '',
  );

  try {
    const res = await processedSurveyClient.post(
      '',
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
    console.log(`Error getting processed survey: ${error}`);
    throw error;
  }
};

export const UseGetProcessedSurveyData = () => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['processedSurveyData'],
    queryFn: fetchProcessedSurveyData,
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError, refetch, error};
};
