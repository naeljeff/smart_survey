import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Surface} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

type homepageButtonProps = {
  title: string;
  icon: string;
  onPress: () => void;
};

const HomepageNavigationButton = ({
  title,
  icon,
  onPress,
}: homepageButtonProps) => {
  return (
    <Surface elevation={5} className="h-20 w-20 rounded-2xl">
      <TouchableOpacity
        className="flex-1 rounded-2xl bg-white"
        onPress={onPress}>
        <View className="w-full h-full flex justify-center items-center">
          {title === 'Survey Penutupan' ? (
            <MaterialIcons name={icon} size={70} color="black" />
          ) : (
            <Image
              source={require('../../../../assets/baground1.png')}
              className="w-full h-full"
              resizeMode="contain"
            />
          )}
        </View>
        <Text className="mt-3 text-black text-center tracking-tight">
          {title}
        </Text>
      </TouchableOpacity>
    </Surface>
  );
};

export default HomepageNavigationButton;
