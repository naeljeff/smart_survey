import {Alert, ScrollView, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import Toast from 'react-native-simple-toast';

import {RootStackParamList} from '../routes/StackNavigator';
import NavigationHeader from '../components/reusableComponent/Header/NavigationHeader';
import MySurveyAppointment from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyAppointment';
import MySurveyPersonalContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyPersonalContact';
import MySurveyCoorporateContact from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyCoorporateContact';
import MySurveyFUA from '../components/layoutComponent/SurveyPenutupan/organism/MySurvey/MySurveyFUA/MySurveyFUA';
import MySurveyFUAButtons from '../components/layoutComponent/SurveyPenutupan/atoms/MySurvey/MySurveyFUA/MySurveyFUAButtons';
import {useFuaStore} from '../store/storeTempFua';
import {FuaType} from '../props/fuaDataProps';
import ConfirmationModal from '../components/reusableComponent/Modal/ConfirmationModal';
import {useUserStore} from '../store/storeUser';
import {formatDateToDateTime} from '../utilities/functions';
import {addNewHistoryFua} from '../services/api/surveyPenutupan/addHistoryFua';
import {useSelectedSurvey} from '../store/storeSelectedSurvey';

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
  const [confirmSubmitFua, setConfirmSubmitFua] = useState<boolean>(false);
  const {data: item} = useSelectedSurvey(state => state);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const fullName = messageResponse?.full_name || '';

  // Access Temporary FUA
  const {addTemporaryFUA, getTemporaryFUAData} = useFuaStore();
  useFocusEffect(
    useCallback(() => {
      const currentFuaData = getTemporaryFUAData(
        item!.noPengajuanSurvey,
        item!.unitNo,
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
    }, [item!.noPengajuanSurvey, item!.unitNo, getTemporaryFUAData]),
  );

  const handleSaveTemporaryFUA = () => {
    const newFuaData = {
      noPengajuan: item!.noPengajuanSurvey,
      unitNo: item!.unitNo,
      contactDate: tempFua.contactDate ?? new Date(),
      appointmentDate: tempFua.appointmentDate ?? new Date(),
      address: tempFua.address,
      status: tempFua.status,
      remarks: tempFua.remarks,
    };
    addTemporaryFUA(newFuaData);
  };

  const handleSubmitFUA = async (confirmed: boolean) => {
    setConfirmSubmitFua(false);
    if (
      confirmed &&
      tempFua.contactDate &&
      tempFua.appointmentDate &&
      tempFua.address &&
      tempFua.status &&
      tempFua.remarks
    ) {
      const contactDate = formatDateToDateTime(tempFua.contactDate);
      const appointmentDate = formatDateToDateTime(tempFua.appointmentDate);
      const res = await addNewHistoryFua(
        item!.noPengajuanSurvey,
        item!.unitNo,
        fullName,
        contactDate,
        appointmentDate,
        tempFua.address,
        tempFua.status,
        tempFua.remarks,
      );

      switch (res.status) {
        case '01':
          Alert.alert('Follow Up Activity', 'Your FUA has been submitted!', [
            {text: 'OK'},
          ]);
          setTempFua({
            contactDate: undefined,
            appointmentDate: undefined,
            address: '',
            status: '',
            remarks: '',
          });
          break;
        case '02':
          Toast.show('Some FUA fields are missing!', Toast.SHORT);
          break;
        case '03':
          Alert.alert(
            'Follow Up Activity',
            'Failed submitting FUA, please try again!',
            [{text: 'OK'}],
          );
        default:
          console.log('weird errors');
          break;
      }
    } else {
      Toast.show('Please fill all FUA fields!', Toast.SHORT);
    }
  };

  const handleTriggerSubmitFua = () => {
    setConfirmSubmitFua(true);
  };

  return (
    <>
      <View className="w-full h-full flex flex-col bg-[#FFF]">
        {/* Header */}
        <NavigationHeader title={'FUA'} onPress={() => navigation.goBack()} />

        {/* Body */}
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          {/* Appointment Schedule */}
          <MySurveyAppointment />

          {/* Personal Contact Schedule */}
          <MySurveyPersonalContact />

          {/* Coorporate Contact Person */}
          <MySurveyCoorporateContact />

          {/* Follow Up Activity */}
          <MySurveyFUA tempFua={tempFua} setTempFua={setTempFua} />

          {/* Buttons */}
          <MySurveyFUAButtons
            onSaveFua={handleSaveTemporaryFUA}
            onTriggerSubmitFua={handleTriggerSubmitFua}
          />
        </ScrollView>
      </View>
      {confirmSubmitFua && (
        <ConfirmationModal
          title={`Are you sure you want to submit this FUA?`}
          visible={confirmSubmitFua}
          onConfirm={handleSubmitFUA}
        />
      )}
    </>
  );
};

export default SurveyPenutupanMySurveyJobFUA;
