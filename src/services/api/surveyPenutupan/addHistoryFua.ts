import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_ADD_HISTORY_FUA || '';

export const addNewHistoryFua = async (
  noPengajuan: string,
  unitNo: string,
  userName: string,
  contactDate: Date,
  appointmentDate: Date,
  address: string,
  status: string,
  remarks: string,
) => {
  const BASE_ADD_HISTORY_FUA_URL: string =
    process.env.BASE_POST_HISTORY_FUA_URL || '';
  const surveyApiClient = createApiClient(BASE_ADD_HISTORY_FUA_URL);
  try {
    const res = await surveyApiClient.post(
      '',
      {
        key_id: KEY_ID,
        no_pengajuan: noPengajuan,
        unit_no: unitNo,
        user_name: userName,
        contact_date: contactDate,
        appointment_date: appointmentDate,
        address: address,
        status: status,
        remarks: remarks,
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
