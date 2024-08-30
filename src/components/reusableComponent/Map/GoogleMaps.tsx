import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {surveyJobProps} from '../../../props/surveyJobProps';

type GoogleMapsProps = {
  item: surveyJobProps;
  lat: string;
  long: string;
  alamat: string;
};

const GoogleMaps = ({item, lat, long, alamat}: GoogleMapsProps) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseFloat(lat),
          longitude: parseFloat(long),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: parseFloat(lat), longitude: parseFloat(long)}}
          title={alamat}
        />
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
