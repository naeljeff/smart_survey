import {useQuery} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_SPECIFIC_SURVEY || '';

export const fetchSpecificSurveyById = async (
  noPengajuan: string,
  unitNo: string,
) => {
  const BASE_GET_SPECIFIC_SURVEY =
    process.env.BASE_GET_SPECIFIC_SURVEY_URL || '';
  const specificSurvey = createApiClient(BASE_GET_SPECIFIC_SURVEY);

  try {
    const res = await specificSurvey.post(
      '',
      {
        key_id: KEY_ID,
        no_pengajuan: noPengajuan,
        unit_no: unitNo,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error) {
    console.log(`Error getting specific survey: ${error}`);
    throw error;
  }
};

export const UseGetSpecificSurveyData = (
  noPengajuan: string,
  unitNo: string,
) => {
  const specificSurveyFunction = useQuery({
    queryKey: ['specificSurveyData', noPengajuan, unitNo],
    queryFn: () => fetchSpecificSurveyById(noPengajuan, unitNo),
    refetchOnReconnect: 'always',
    refetchOnWindowFocus: true,
  });

  return specificSurveyFunction;
};
