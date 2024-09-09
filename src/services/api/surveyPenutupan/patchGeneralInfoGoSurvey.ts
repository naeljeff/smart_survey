import { surveyJobProps } from '../../../props/surveyJobProps';
import createApiClient from '../../../utilities/apiClient';

const KEY_ID: string = process.env.KEY_ID_PATCH_SURVEY || '';

export const patchGeneralInfoGoSurvey = async (
  data: surveyJobProps,
  noPengajuan: string,
) => {
  const BASE_ACCEPT_SURVEY_URL: string =
    process.env.BASE_PATCH_SURVEY_URL || '';
  const surveyApiClient = createApiClient(BASE_ACCEPT_SURVEY_URL);

  try {
    const res = await surveyApiClient.post(
      '',
      {
        key_id: KEY_ID,
        no_pengajuan: noPengajuan,
        unit_no: data?.unitNo,
        alamat_survey: data?.alamatSurvey,
        body_type: data?.bodyType,
        chassis_no: data?.chassisNo,
        email: data?.email,
        engine_no: data?.engineNo,
        fuel: data?.fuel,
        jenis_asuransi: data?.jenisAsuransi,
        merek: data?.merek,
        model: data?.model,
        nama: data?.nama,
        no_telp: data?.noTelp,
        plat_nomor: data?.platNomor,
        tipe: data?.tipe,
        transmission: data?.transmission,
        warna: data?.warna,
        year: data?.year,
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
