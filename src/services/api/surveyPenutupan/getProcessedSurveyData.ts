import {useQuery} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_PROCESSED_SURVEY || '';

export const fetchProcessedSurveyData = async (fullName: string) => {
  const BASE_PROCESSED_SURVEY_URL =
    process.env.BASE_GET_PROCESSED_SURVEY_URL || '';
  const processedSurveyClient = createApiClient(BASE_PROCESSED_SURVEY_URL);

  try {
    const res = await processedSurveyClient.post(
      '',
      {
        key_id: KEY_ID,
        user_full_name: fullName,
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

export const UseGetProcessedSurveyData = (fullName: string) => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['processedSurveyData', fullName],
    queryFn: () => fetchProcessedSurveyData(fullName),
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError, refetch, error};
};
