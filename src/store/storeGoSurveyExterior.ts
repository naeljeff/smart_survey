import {create} from 'zustand';

type Photo = {
  photo_uri: string;
};

type ExteriorPartData = {
  statusOfCondition: string;
  status: string;
  condition: string;
  brand: string;
  photos: Photo[];
};

type ExteriorData = {
  [key: string]: ExteriorPartData;
};

interface ExteriorDataInterface {
  exteriorData: ExteriorData;
  addOrUpdateExteriorData: (
    part: string,
    newData: Partial<ExteriorPartData>,
  ) => void;
}

export const useGoSurveyExterior = create<ExteriorDataInterface>(set => ({
  exteriorData: {},
  addOrUpdateExteriorData: (part, newData) =>
    set(state => ({
      exteriorData: {
        ...state.exteriorData,
        [part]: {
          ...state.exteriorData[part],
          ...newData,
        },
      },
    })),
}));
