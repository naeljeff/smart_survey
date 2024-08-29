import {useQuery} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_NEW_SURVEY || '';

export const fetchNewSurveyData = async () => {
  const surveyApiClient = createApiClient(
    process.env.BASE_GET_NEW_SURVEY_URL ||
      'https://www.rks-s.com/prog-x/api/pengajuan_survey/survey/getSurveyList.php',
  );

  try {
    const res = await surveyApiClient.post(
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
    console.log(`Error getting new survey: ${error}`);
    throw error;
  }
};

export const UseGetNewSurveyData = () => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['newSurveyData'],
    queryFn: fetchNewSurveyData,
    refetchOnReconnect: 'always',
  });

  return {isLoading, data, isError, refetch, error};
};
