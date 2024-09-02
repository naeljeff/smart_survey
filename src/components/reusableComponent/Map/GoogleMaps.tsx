import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {surveyJobProps} from '../../../props/surveyJobProps';

type GoogleMapsProps = {
  item: surveyJobProps;
};

const GoogleMaps = ({item}: GoogleMapsProps) => {
  // console.log(`Dari gmaps: ${item.alamatSurvey}`);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>
    </View>
  );
};

export default GoogleMaps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
