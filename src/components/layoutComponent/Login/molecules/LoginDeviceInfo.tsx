import {Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import React, {useState} from 'react';

const LoginDeviceInfo = () => {
  const [deviceId, setDeviceId] = useState<string>('');
  const appVersion = '0.1.0';

  DeviceInfo.getUniqueId().then(uniqueId => {
    setDeviceId(uniqueId);
  });
  return (
    <View className='flex-1 items-center space-y-4'>
      <Text className="text-xs text-[#012252] tracking-tighter -mb-3">
        {`Device ID: ${deviceId}`}
      </Text>
      <Text className="text-sm text-[#012252] tracking-tighter">
        {`Version ${appVersion}`}
      </Text>
    </View>
  );
};

export default LoginDeviceInfo;
