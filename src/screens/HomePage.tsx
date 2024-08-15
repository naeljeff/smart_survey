import {Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Components
import {RootStackParamList} from '../../App';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'homePage'>;

const HomePage = ({route}: HomePageProps) => {
  const {username} = route.params;
  return (
    <View>
      <Text>{username}</Text>
    </View>
  );
};

export default HomePage;
