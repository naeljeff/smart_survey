import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Divider, Menu} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {surveyJobProps} from '../../../../../props/surveyJobProps';
import {RootStackParamList} from '../../../../../routes/StackNavigator';
import ConfirmationModal from '../../../../reusableComponent/Modal/ConfirmationModal';
import {useUserStore} from '../../../../../store/storeUser';
import {patchAcceptNewSurvey} from '../../../../../services/api/surveyPenutupan/patchAcceptSurvey';
import {UseGetNewSurveyData} from '../../../../../services/api/surveyPenutupan/getNewSurveyData';
import {useSelectedSurvey} from '../../../../../store/storeSelectedSurvey';

type SurveyJobItemMenuProps = {
  item: surveyJobProps;
};

const SurveyJobItemMenu = ({item}: SurveyJobItemMenuProps) => {
  const navigationToGoogleMap =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'googleMaps'>
    >();
  const navigationToAssignJob =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'surveyPenutupanAssignJob'>
    >();
  const [menuState, setMenuState] = useState<boolean>(false);
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('');
  const clearSelectedSurvey = useSelectedSurvey(
    state => state.clearSelectedSurvey,
  );
  const selectedSurvey = useSelectedSurvey(state => state.setSelectedSurvey);

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const fullName = messageResponse?.full_name || '';
  const {refetch} = UseGetNewSurveyData(fullName);

  const handleOnPressView = () => {
    if (item) {
      clearSelectedSurvey();
      selectedSurvey(item);
      navigationToGoogleMap.navigate('googleMaps', {item: item});
    } else {
      selectedSurvey(item);
      navigationToGoogleMap.navigate('googleMaps', {item: item});
    }
  };

  const handleOnAcceptSurvey = () => {
    setModalType('accept');
    setConfirmationModal(true);
    closeMenu();
  };

  const handleOnRejectSurvey = () => {
    setModalType('reject');
    setConfirmationModal(true);
    closeMenu();
  };

  const handleOnAssignSurvey = () => {
    closeMenu();
    if (item) {
      clearSelectedSurvey();
      selectedSurvey(item);
      navigationToAssignJob.navigate('surveyPenutupanAssignJob', {item: item});
    } else {
      selectedSurvey(item);
      navigationToAssignJob.navigate('surveyPenutupanAssignJob', {item: item});
    }
  };

  const handleConfirm = async (confirmed: boolean) => {
    setConfirmationModal(false);
    if (confirmed) {
      switch (modalType) {
        case 'accept':
          try {
            const res = await patchAcceptNewSurvey(
              item.noPengajuanSurvey,
              item.unitNo,
              fullName,
            );
            if (res.status === '01') {
              Toast.show('Survey Has Been Updated!', Toast.SHORT);
            } else if (res.status === '02') {
              Toast.show('Update Survey Failed!', Toast.SHORT);
            }
            refetch();
          } catch (error) {
            console.log('Failed to accept survey:', error);
            throw Error;
          }
          break;
        case 'reject':
          console.log('Rejecting survey');
          break;
        default:
          console.log('Unknown modal type');
      }
    }
  };

  return (
    <>
      <Menu
        visible={menuState}
        onDismiss={closeMenu}
        contentStyle={{backgroundColor: '#fff'}}
        elevation={5}
        anchor={
          <TouchableOpacity onPress={openMenu}>
            <Feather name="more-vertical" size={22} color="black" />
          </TouchableOpacity>
        }>
        <Menu.Item
          style={{
            height: 50,
          }}
          titleStyle={{fontSize: 16, color: 'black'}}
          onPress={() => {
            closeMenu();
            handleOnPressView();
          }}
          title="View"
        />
        <Divider />
        <Menu.Item
          style={{
            height: 50,
          }}
          titleStyle={{fontSize: 16, color: 'black'}}
          onPress={handleOnRejectSurvey}
          title="Reject"
        />
        <Divider />
        <Menu.Item
          style={{
            height: 50,
          }}
          titleStyle={{fontSize: 16, color: 'black'}}
          onPress={handleOnAcceptSurvey}
          title="Accept"
        />
        <Divider />
        <Menu.Item
          style={{
            height: 50,
          }}
          titleStyle={{fontSize: 16, color: 'black'}}
          onPress={handleOnAssignSurvey}
          title="Assign"
        />
      </Menu>

      {confirmationModal && (
        <ConfirmationModal
          title={`Are you sure you want to ${modalType} this survey?`}
          visible={confirmationModal}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default SurveyJobItemMenu;
