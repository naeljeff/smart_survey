import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../routes/StackNavigator";

export type JobMonitoringListProps = {
  id: number;
  nama: string;
  jumlahTask: number;
};

export interface JobMonitoringProps {
  data: {
    status: string;
    code: string;
    data: JobMonitoringListProps[];
  }
  search: string;
  refreshing: boolean;
  onRefresh: () => void;
  searchByTerm: string;
  sortBy: string;
  orderBy: string;
  navigation: NativeStackNavigationProp<RootStackParamList, 'surveyPenutupan'>;
}