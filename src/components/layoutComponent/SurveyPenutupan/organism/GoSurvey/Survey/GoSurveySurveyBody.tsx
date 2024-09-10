import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {UseQueryResult} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {CameraOptions, launchCamera} from 'react-native-image-picker';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';
import {RootStackParamList} from '../../../../../../routes/StackNavigator';
import {useSelectedSurvey} from '../../../../../../store/storeSelectedSurvey';
type surveyJobPropAsData = {
  data: surveyJobProps;
};

type GoSurveySurveyBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
  navigateToSurveyInfo: () => void;
  isSurveyValidated: () => void;
};

const GoSurveySurveyBody = ({
  surveyFunction,
  navigateToSurveyInfo,
  isSurveyValidated,
}: GoSurveySurveyBodyProps) => {
  const selectedSurvey = useSelectedSurvey(state => state.setSelectedSurvey);
  const navigateToExteriorScreen =
    useNavigation<
      NativeStackNavigationProp<
        RootStackParamList,
        'surveyPenutupanGoSurveyExterior'
      >
    >();
  const navigateToAdditionalScreen =
    useNavigation<
      NativeStackNavigationProp<
        RootStackParamList,
        'surveyPenutupanGoSurveyAdditional'
      >
    >();

  // const handleOpenCamera = () => {
  //   console.log('Open Camera function called');
  //   const options: CameraOptions = {
  //     mediaType: 'photo',
  //     cameraType: 'back',
  //   };

  //   launchCamera(options, response => {
  //     console.log('Camera response:', response);
  //     if (response.didCancel) {
  //       Alert.alert('Camera cancelled');
  //     } else if (response.errorCode) {
  //       Alert.alert('Camera error', response.errorMessage || 'Unknown error');
  //       console.error(
  //         'Camera error:',
  //         response.errorCode,
  //         response.errorMessage,
  //       );
  //     } else if (response.assets && response.assets.length > 0) {
  //       const uri = response.assets[0].uri;
  //       Alert.alert('Photo captured', `Image URI: ${uri}`);
  //     }
  //   });
  // };
  const handleNavigationToExterior = () => {
    // Set item
    if (surveyFunction.data?.data) {
      selectedSurvey(surveyFunction.data.data);
      navigateToExteriorScreen.navigate('surveyPenutupanGoSurveyExterior');
    } else {
      Alert.alert(
        'Go Survey',
        'Error occured with survey data, please try again!',
        [{text: 'OK'}],
      );
    }
  };

  const handleNavigationToAdditional = () => {
    // Set item
    if (surveyFunction.data?.data) {
      selectedSurvey(surveyFunction.data.data);
      navigateToAdditionalScreen.navigate('surveyPenutupanGoSurveyAdditional');
    } else {
      Alert.alert(
        'Go Survey',
        'Error occured with survey data, please try again!',
        [{text: 'OK'}],
      );
    }
  };
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-grow">
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          Panel Info
        </Text>
      </View>

      <View className="w-full flex justify-center items-center py-2 px-20 my-3 space-y-5">
        {/* Camera */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => {}}>
          <Text className="text-black text-sm text-center uppercase">
            Camera
          </Text>
        </TouchableOpacity>

        {/* Selfie Photo */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSurveyInfo()}>
          <Text className="text-black text-sm text-center uppercase">
            Selfie Photo
          </Text>
        </TouchableOpacity>

        {/* Exterior */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={handleNavigationToExterior}>
          <Text className="text-black text-sm text-center uppercase">
            Exterior
          </Text>
        </TouchableOpacity>

        {/* Additional */}
        <TouchableOpacity
          className="w-full bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={handleNavigationToAdditional}>
          <Text className="text-black text-sm text-center uppercase">
            Additional
          </Text>
        </TouchableOpacity>
      </View>

      {/* Button */}
      <View className="w-full flex justify-center items-center py-3 my-5">
        <TouchableOpacity
          className="bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => navigateToSurveyInfo()}>
          <Text className="text-black text-sm text-center">Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoSurveySurveyBody;
