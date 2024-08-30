import {Text, View} from 'react-native';
import React from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import GoogleMaps from '../components/reusableComponent/Map/GoogleMaps';

type SurveyPenutupanGoogleMapsRouteProps = RouteProp<
  RootStackParamList,
  'googleMaps'
>;

type SurveyPenutupanGoogleMapsProps = {
  route: SurveyPenutupanGoogleMapsRouteProps;
};

const SurveyPenutupanGoogleMaps = ({route}: SurveyPenutupanGoogleMapsProps) => {
  const {item, lat, long, alamat} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Surveyor'}
        onPress={() => navigation.goBack()}
        onRefresh={() => {}}
      />

      {/* Google Maps */}
      <Text>Google Maps</Text>
      <GoogleMaps item={item} lat={lat} long={long} alamat={alamat} />
    </View>
  );
};

export default SurveyPenutupanGoogleMaps;
