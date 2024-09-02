import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_ACCEPT_SURVEY || '';

export const patchAcceptNewSurvey = async (
  noPengajuan: string,
  unitNo: string,
  fullName: string,
) => {
  const BASE_ACCEPT_SURVEY_URL: string =
    process.env.BASE_PATCH_ACCEPT_SURVEY || '';
  const surveyApiClient = createApiClient(BASE_ACCEPT_SURVEY_URL);

  try {
    const res = await surveyApiClient.post(
      '',
      {
        key_id: KEY_ID,
        no_pengajuan: noPengajuan,
        unit_no: unitNo,
        full_name: fullName,
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
