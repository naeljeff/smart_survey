import {ScrollView, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import MySurveyAppointment from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyAppointment';
import MySurveyPersonalContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyPersonalContact';
import MySurveyCoorporateContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyCoorporateContact';
import MySurveyFUA from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUA';
import MySurveyFUAButtons from '../components/layoutComponent/SurveyPenutupan/atoms/MySurvey/MySurveyFUA/MySurveyFUAButtons';
import {useFuaStore} from '../store/storeTempFua';
import {FuaType} from '../props/fuaDataProps';

type SurveyPenutupanMySurveyJobFUARouteProps = RouteProp<
  RootStackParamList,
  'surveyPenutupanFormMySurveyJobFUA'
>;

type SurveyPenutupanMySurveyJobFUAPageProps = {
  route: SurveyPenutupanMySurveyJobFUARouteProps;
};

const SurveyPenutupanMySurveyJobFUA = ({
  route,
}: SurveyPenutupanMySurveyJobFUAPageProps) => {
  const [tempFua, setTempFua] = useState<FuaType>({
    contactDate: undefined,
    appointmentDate: undefined,
    address: '',
    status: '',
    remarks: '',
  });
  const {item} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Access Temporary FUA
  const {addTemporaryFUA, getTemporaryFUAData} = useFuaStore();
  useFocusEffect(
    useCallback(() => {
      const currentFuaData = getTemporaryFUAData(
        item.noPengajuanSurvey,
        item.unitNo,
      );
      if (currentFuaData) {
        setTempFua({
          contactDate: currentFuaData.contactDate || new Date(),
          appointmentDate: currentFuaData.appointmentDate || new Date(),
          address: currentFuaData.address || '',
          status: currentFuaData.status || '',
          remarks: currentFuaData.remarks || '',
        });
      }
    }, [item.noPengajuanSurvey, item.unitNo, getTemporaryFUAData]),
  );

  const handleSaveTemporaryFUA = () => {
    const newFuaData = {
      noPengajuan: item.noPengajuanSurvey,
      unitNo: item.unitNo,
      contactDate: tempFua.contactDate ?? new Date(),
      appointmentDate: tempFua.appointmentDate ?? new Date(),
      address: tempFua.address,
      status: tempFua.status,
      remarks: tempFua.remarks,
    };
    addTemporaryFUA(newFuaData);
  };

  return (
    <View className="w-full h-full flex flex-col bg-[#FFF]">
      {/* Header */}
      <NavigationHeader title={'FUA'} onPress={() => navigation.goBack()} />

      {/* Body */}
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Appointment Schedule */}
        <MySurveyAppointment item={item} />

        {/* Personal Contact Schedule */}
        <MySurveyPersonalContact item={item} />

        {/* Coorporate Contact Person */}
        <MySurveyCoorporateContact />

        {/* Follow Up Activity */}
        <MySurveyFUA tempFua={tempFua} setTempFua={setTempFua} />

        {/* Buttons */}
        <MySurveyFUAButtons item={item} onSaveFua={handleSaveTemporaryFUA} />
      </ScrollView>
    </View>
  );
};

export default SurveyPenutupanMySurveyJobFUA;
