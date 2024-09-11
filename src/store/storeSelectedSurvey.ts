import {create} from 'zustand';

import {surveyJobProps} from '../props/surveyJobProps';

interface SelectedSurveyStore {
  data: surveyJobProps | null;
  setSelectedSurvey: (survey: surveyJobProps) => void;
  clearSelectedSurvey: () => void;
}

export const useSelectedSurvey = create<SelectedSurveyStore>(set => ({
  // initial
  data: null,
  setSelectedSurvey: survey => set({data: survey}),
  clearSelectedSurvey: () => set({data: null}),
}));
