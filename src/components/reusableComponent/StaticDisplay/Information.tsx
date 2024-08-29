import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Information = () => {
  return (
    <View className="w-full h-6 flex justify-center items-start px-3 bg-[#ECCA9C] border-y border-black">
      <Text className="text-white italic text-xs">
        <Icon name="exclamationcircleo" size={14} /> Information Survey
      </Text>
    </View>
  );
};

export default Information;
