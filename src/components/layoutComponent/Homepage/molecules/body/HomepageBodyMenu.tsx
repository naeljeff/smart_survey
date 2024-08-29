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
  const {source_login} = useUserStore(state => ({
    source_login: state.source_login || [],
  }));

  // Display menu based on role (grant)
  const canAccessPenutupan = source_login.includes('RM_SUR_MENU_PENUTUPAN');
  const canAccessKerusakan = source_login.includes('RM_SUR_MENU_KERUSAKAN');
  const isRoleLike = source_login.includes('RM_SUR_LOGIN');

  return (
    <View
      className={`flex-1 flex-row items-start p-10 ${
        isRoleLike && canAccessKerusakan && canAccessPenutupan
          ? 'justify-evenly'
          : isRoleLike && canAccessKerusakan
          ? 'justify-evenly'
          : isRoleLike && canAccessPenutupan
          ? 'justify-center'
          : ''
      }`}>
      {/* Semua bisa diakses (ada semua role) */}
      {isRoleLike && canAccessPenutupan && canAccessKerusakan ? (
        <>
          <HomepageNavigationButton
            title="Survey Penutupan"
            icon="event-note"
            onPress={() => navigation.navigate('surveyPenutupan')}
          />
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
      ) : isRoleLike && canAccessKerusakan ? (
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
      ) : isRoleLike && canAccessPenutupan ? (
        <HomepageNavigationButton
          title="Survey Penutupan"
          icon="event-note"
          onPress={() => navigation.navigate('surveyPenutupan')}
        />
      ) : (
        ''
      )}
    </View>
  );
};

export default HomepageBodyMenu;
