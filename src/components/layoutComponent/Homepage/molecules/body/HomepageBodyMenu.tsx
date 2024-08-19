import {View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../../../../../routes/StackNavigator';
import HomepageNavigationButton from '../../atoms/HomepageNavigationButton';

type HomepageToSurveyPenutupanProps = NativeStackNavigationProp<
  RootStackParamList,
  'surveyPenutupan'
>;
type HomepageToSupervisor = NativeStackNavigationProp<
  RootStackParamList,
  'supervisor'
>;
type HomepageToSurveyor = NativeStackNavigationProp<
  RootStackParamList,
  'surveyor'
>;

const HomepageBodyMenu = () => {
  const navigateToSurveyPenutupan =
    useNavigation<HomepageToSurveyPenutupanProps>();
  const navigateToSupervisor = useNavigation<HomepageToSupervisor>();
  const navigateToSurveyor = useNavigation<HomepageToSurveyor>();

  return (
    <View className="flex-1 flex-row justify-between items-start p-10">
      {/* Navigation Button */}
      {/* Survey Penutupan */}
      <HomepageNavigationButton
        title={'Survey Penutupan'}
        icon={'event-note'}
        onPress={() => {
          navigateToSurveyPenutupan.navigate('surveyPenutupan');
        }}
      />

      {/* Supervisor */}
      <HomepageNavigationButton
        title={'Supervisor'}
        icon={'supervisor'}
        onPress={() => {
          navigateToSupervisor.navigate('supervisor');
        }}
      />

      {/* Surveyor */}
      <HomepageNavigationButton
        title={'Surveyor'}
        icon={'surveyor'}
        onPress={() => {
          navigateToSurveyor.navigate('surveyor');
        }}
      />
    </View>
  );
};

export default HomepageBodyMenu;
