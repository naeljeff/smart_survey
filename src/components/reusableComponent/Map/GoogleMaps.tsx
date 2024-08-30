import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {surveyJobProps} from '../../../props/surveyJobProps';

type GoogleMapsProps = {
  item: surveyJobProps;
  lat: string;
  long: string;
  alamat: string;
};

const GoogleMaps = ({item, lat, long, alamat}: GoogleMapsProps) => {
  console.log(`Dari gmaps: ${item.alamatSurvey}`)
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          coordinate={{latitude: parseFloat(lat), longitude: parseFloat(long)}}
          title={alamat}
        /> */}
      </MapView>
      <View style={styles.addressContainer}>
        <Text>{alamat}</Text>
      </View>
    </View>
  );
};

export default GoogleMaps;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  addressContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});
