import {useQuery} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_NEW_SURVEY || '';

export const fetchNewSurveyData = async (fullName: string) => {
  const BASE_NEW_SURVEY_URL: string = process.env.BASE_GET_NEW_SURVEY_URL || '';
  const surveyApiClient = createApiClient(BASE_NEW_SURVEY_URL);

  try {
    const res = await surveyApiClient.post(
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
    console.log(`Error getting new survey: ${error}`);
    throw error;
  }
};

export const UseGetNewSurveyData = (fullName: string) => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['newSurveyData', fullName],
    queryFn: () => fetchNewSurveyData(fullName),
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError, refetch, error};
};
