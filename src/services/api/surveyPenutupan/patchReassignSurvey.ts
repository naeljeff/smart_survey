import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_REASSIGN_SURVEY || '';

export const patchReassignSurvey = async (
  noPengajuan: string,
  unitNo: string,
  fullName: string,
  userNotes: string | null,
) => {
  const BASE_REASSIGN_SURVEY: string =
    process.env.BASE_PATCH_REASSIGN_SURVEY || '';
  const surveyApiClient = createApiClient(BASE_REASSIGN_SURVEY);

  try {
    const res = await surveyApiClient.post(
      '',
      {
        key_id: KEY_ID,
        no_pengajuan: noPengajuan,
        unit_no: unitNo,
        full_name: fullName,
        user_notes: userNotes,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  } catch (error) {
    console.log(`Error reassigning survey: ${error}`);
    throw error;
  }
};
