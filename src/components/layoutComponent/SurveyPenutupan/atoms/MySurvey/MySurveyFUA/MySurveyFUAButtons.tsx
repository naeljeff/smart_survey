import {Text, TouchableOpacity, View, Alert, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';

import {RootStackParamList} from '../../../../../../routes/StackNavigator';
import ConfirmationModal from '../../../../../reusableComponent/Modal/ConfirmationModal';
import {useSelectedSurvey} from '../../../../../../store/storeSelectedSurvey';

type MySurveyFUAButtonProps = {
  onSaveFua: () => void;
  onTriggerSubmitFua: () => void;
};

const MySurveyFUAButtons = ({
  onSaveFua,
  onTriggerSubmitFua,
}: MySurveyFUAButtonProps) => {
  const {data: item} = useSelectedSurvey(state => state);
  const clearSelectedSurvey = useSelectedSurvey(
    state => state.clearSelectedSurvey,
  );
  const selectedSurvey = useSelectedSurvey(state => state.setSelectedSurvey);
  const [confirmedGoSurvey, setConfirmedGoSurvey] = useState<boolean>(false);
  const navigationToHistory =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'surveyPenutupanHistoryFUA'>
    >();
  const navigationToGoSurvey =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'surveyPenutupanGoSurvey'>
    >();

  const handleSaveFuaPressed = () => {
    Alert.alert('Follow Up Activity', 'Your FUA has been saved!', [
      {text: 'OK'},
    ]);
    onSaveFua();
  };

  const handleOpenHistoryFua = () => {
    if (item) {
      clearSelectedSurvey();
      selectedSurvey(item!);
      navigationToHistory.navigate('surveyPenutupanHistoryFUA');
    } else {
      selectedSurvey(item!);
      navigationToHistory.navigate('surveyPenutupanHistoryFUA');
    }
  };

  const handleCallContactPerson = () => {
    const phoneNumber = `tel:${item!.noTelp}`;
    Linking.openURL(phoneNumber);
  };

  const handleOpenGoSurveyPressed = () => {
    setConfirmedGoSurvey(true);
  };

  const handleConfirmedGoSurvey = async (confirmed: boolean) => {
    setConfirmedGoSurvey(false);
    if (confirmed) {
      if (item) {
        clearSelectedSurvey();
        selectedSurvey(item!);
        navigationToGoSurvey.navigate('surveyPenutupanGoSurvey');
      } else {
        selectedSurvey(item!);
        navigationToGoSurvey.navigate('surveyPenutupanGoSurvey');
      }
    }
  };

  return (
    <>
      <View className="w-full h-[70px] mt-2 mb-3">
        <View className="flex-1 flex-row justify-center items-center px-3">
          <View className="h-full flex-[1/3]">
            {/* History */}
            <TouchableOpacity
              onPress={handleOpenHistoryFua}
              className="h-full w-full flex justify-center items-center px-2 py-1 bg-gray-200 rounded-md shadow-xl border border-black">
              <Text className="text-black">History FUA</Text>
            </TouchableOpacity>
          </View>

          {/* Call and Save */}
          <View className="h-full flex-[1/3] flex flex-col justify-between items-center mx-5">
            {/* Call */}
            <TouchableOpacity
              onPress={handleCallContactPerson}
              className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black">
              <Text className="text-black">Call Contact Person</Text>
            </TouchableOpacity>

            {/* Save */}
            <TouchableOpacity
              onPress={handleSaveFuaPressed}
              className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-gray-200 border border-black">
              <Text className="text-black">Save FUA</Text>
            </TouchableOpacity>
          </View>

          {/* Go Survey and Submit FUA */}
          <View className="h-full flex-[1/3] flex flex-col justify-between items-center">
            {/* Go Survey */}
            <TouchableOpacity
              onPress={handleOpenGoSurveyPressed}
              className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400">
              <Text className="text-black">Go Survey</Text>
            </TouchableOpacity>

            {/* Submit FUA */}
            <TouchableOpacity
              onPress={onTriggerSubmitFua}
              className="h-[45%] w-full flex justify-center items-center px-2 py-1 rounded-md shadow-xl bg-orange-400">
              <Text className="text-black">Submit FUA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {confirmedGoSurvey && (
        <ConfirmationModal
          title="Do you want to go survey?"
          visible={confirmedGoSurvey}
          onConfirm={handleConfirmedGoSurvey}
        />
      )}
    </>
  );
};

export default MySurveyFUAButtons;
