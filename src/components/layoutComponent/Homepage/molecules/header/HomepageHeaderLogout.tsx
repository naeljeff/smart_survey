import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const HomepageHeaderLogout = () => {
  return (
    <>
      {/* Logout */}
      <TouchableOpacity onPress={() => console.log('press logout')}>
        <MaterialIcons name="logout" size={32} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default HomepageHeaderLogout;
