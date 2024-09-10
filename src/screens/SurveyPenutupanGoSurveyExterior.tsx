import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'

import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader'
import { RootStackParamList } from '../routes/StackNavigator'
import { useSelectedSurvey } from '../store/storeSelectedSurvey'

const SurveyPenutupanGoSurveyExterior = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {data: item} = useSelectedSurvey((state) => state);
  
  return (
    <View className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <NavigationHeader
        title={'Exterior'}
        onPress={() => navigation.goBack()}
      />

      {/* Body */}
      
    </View>
  )
}

export default SurveyPenutupanGoSurveyExterior