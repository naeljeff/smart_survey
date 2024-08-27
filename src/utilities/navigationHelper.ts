import {CommonActions} from '@react-navigation/native';

export const navigateToLogin = (navigation: any) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'login'}],
    }),
  );
};
