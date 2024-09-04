import {useQuery} from '@tanstack/react-query';

import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_GET_HISTORY_FUA || '';

export const fetchHistoryFuaList = async (
  noPengajuan: string,
  unitNo: string,
) => {
  const BASE_GET_HISTORY: string = process.env.BASE_GET_HISTORY_FUA_URL || '';
  const surveyApiClient = createApiClient(BASE_GET_HISTORY);

  try {
    const res = await surveyApiClient.post(
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
    console.log(`Error getting FUA history list: ${error}`);
    throw error;
  }
};

export const UseGetHistoryFuaList = (noPengajuan: string, unitNo: string) => {
  const {isLoading, data, isError, refetch, error} = useQuery({
    queryKey: ['newSurveyData', noPengajuan, unitNo],
    queryFn: () => fetchHistoryFuaList(noPengajuan, unitNo),
    refetchOnReconnect: 'always',
    refetchOnWindowFocus: true,
  });

  return {isLoading, data, isError, refetch, error};
};
