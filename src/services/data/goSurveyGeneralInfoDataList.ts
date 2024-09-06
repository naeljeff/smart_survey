import {
  coverDataList,
  fuelDataList,
  surveyDataList,
  transmissionDataList,
} from '../../constants/surveyPenutupanGoSurveyGeneralInfoList';
import createApiClient from '../../utilities/apiClient';

const BASE_GET_VEHICLE: string = process.env.BASE_GET_VEHICLE_LIST_URL || '';
const surveyApiClient = createApiClient(BASE_GET_VEHICLE);

const getVehicleMakes = async () => {
  try {
    const res = await surveyApiClient.post(
      '',
      {
        action: 'getMakes',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseData = res.data.code;

    const formattedResponse = responseData.map(
      (item: {VEHICLE_MAKE: string}) => {
        const keyWords = item.VEHICLE_MAKE.toLowerCase().split(' ');

        const key = keyWords
          .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
          )
          .join('');

        const label = keyWords
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return {key, label};
      },
    );
    return formattedResponse;
  } catch (error) {
    console.log(`Error getting vehicle makes: ${error}`);
    throw error;
  }
};

const getVehicleTypes = async (make: string | undefined) => {
  try {
    const res = await surveyApiClient.post(
      '',
      {
        action: 'getTypes',
        make: make
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseData = res.data.Data;

    const formattedResponse = responseData.map((item: string) => {
      const keyWords = item.toLowerCase().split(' ');

      const key = keyWords
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join('');

      const label = keyWords
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {key, label};
    });
    return formattedResponse;
  } catch (error) {
    console.log(`Error getting vehicle types: ${error}`);
    throw error;
  }
};

const getVehicleModels = async (
  make: string | undefined,
  type: string | undefined,
) => {
  try {
    const res = await surveyApiClient.post(
      '',
      {
        action: 'getModels',
        make: make,
        type: type,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const responseData = res.data.Data;

    const formattedResponse = responseData.map((item: string) => {
      const keyWords = item.toLowerCase().split(' ');

      const key = keyWords
        .map((word, index) =>
          index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join('');

      const label = keyWords
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {key, label};
    });
    return formattedResponse;
  } catch (error) {
    console.log(`Error getting vehicle models: ${error}`);
    throw error;
  }
};

export const goSurveyDataByProperties = (
  properties: string,
  make?: string,
  type?: string,
) => {
  switch (properties) {
    case 'surveyData':
      return surveyDataList;
    case 'jenisAsuransi':
      return coverDataList;
    case 'transmission':
      return transmissionDataList;
    case 'fuel':
      return fuelDataList;
    case 'merek':
      return getVehicleMakes();
    case 'tipe':
      return getVehicleTypes(make);
    case 'model':
      return getVehicleModels(make, type);
    default:
      return null;
  }
};
