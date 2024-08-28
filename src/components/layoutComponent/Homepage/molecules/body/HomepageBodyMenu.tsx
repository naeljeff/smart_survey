import {View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../../../../../routes/StackNavigator';
import HomepageNavigationButton from '../../atoms/HomepageNavigationButton';
import {useUserStore} from '../../../../../store/storeUser';

type HomepageNavigationProps = NativeStackNavigationProp<RootStackParamList>;

const HomepageBodyMenu = () => {
  const navigation = useNavigation<HomepageNavigationProps>();
  const {messageResponse} = useUserStore(state => ({
    messageResponse: state.messageResponse,
  }));

  const cabang = messageResponse?.cabang || '';
  const deptAegisCabang = messageResponse?.dept_aegis?.[0]?.CABANG || '';

  const isRoleLike = cabang === '01' || deptAegisCabang === '01';

  return (
    <View
      className={`flex-1 flex-row items-start p-10 ${
        isRoleLike ? 'justify-center' : 'justify-evenly'
      }`}>
      {isRoleLike ? (
        <HomepageNavigationButton
          title="Survey Penutupan"
          icon="event-note"
          onPress={() => navigation.navigate('surveyPenutupan')}
        />
      ) : (
        <>
          <HomepageNavigationButton
            title="Supervisor"
            icon="supervisor"
            onPress={() => navigation.navigate('supervisor')}
          />
          <HomepageNavigationButton
            title="Surveyor"
            icon="surveyor"
            onPress={() => navigation.navigate('surveyor')}
          />
        </>
      )}
    </View>
  );
};

export default HomepageBodyMenu;
