import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {surveyJobProps} from './surveyJobProps';
import {RootStackParamList} from '../routes/StackNavigator';

export type MySurveyListProp = {
  data: {
    status: string;
    code: string;
    data: surveyJobProps[];
  };
  search: string;
  refreshing: boolean;
  onRefresh: () => void;
  searchByTerm: string;
  sortBy: string;
  orderBy: string;
  navigation: NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>;
};
