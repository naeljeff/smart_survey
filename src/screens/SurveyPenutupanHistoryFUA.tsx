import {Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';

type SurveyPenutupanHistoryFuaRoute = RouteProp<
  RootStackParamList,
  'surveyPenutupanHistoryFUA'
>;

type SurveyPenutupanHistoryProps = {
  route: SurveyPenutupanHistoryFuaRoute;
};

const SurveyPenutupanHistoryFUA = ({route}: SurveyPenutupanHistoryProps) => {
  const {item} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <NavigationHeader
        title={'History FUA'}
        onPress={() => navigation.goBack()}
      />
      <Text>SurveyPenutupanHistoryFUA</Text>
    </View>
  );
};

export default SurveyPenutupanHistoryFUA;
