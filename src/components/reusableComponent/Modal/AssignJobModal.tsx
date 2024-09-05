import {
  Text,
  View,
  Animated,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {surveyJobProps} from '../../../props/surveyJobProps';
import SurveyJobDetailForMap from '../../layoutComponent/SurveyPenutupan/atoms/IncomingJob/SurveyJobDetailForMap';

type AssignJobModalProps = {
  item: surveyJobProps;
  visible: boolean;
  onConfirm: (confirmed: boolean) => void;
};

const AssignJobModal = ({item, visible, onConfirm}: AssignJobModalProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  }, [animation, visible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => onConfirm(false)}>
      <Animated.View
        className="flex-1 justify-center items-center bg-black/20"
        style={{
          opacity: animation,
        }}>
        <View className="w-4/5 h-3/5 bg-white px-5 py-1 rounded-xl shadow-2xl">
          {/* Header Modal */}
          <View className="w-full h-[6%] flex flex-row justify-center items-center px-1 mb-2">
            {/* Confirmation Title */}
            <Text className="text-[16px] text-black/90 font-semibold capitalize">
              Supervisor Note
            </Text>
          </View>

          <View className="w-full border-b border-black" />

          {/* Body Modal */}
          <View className="flex-1 flex-col justify-start items-start py-1 bg-white">
            {/* Survey Detail */}
            <View className="w-full h-2/5">
              <SurveyJobDetailForMap item={item} />
            </View>
            {/* Notes */}
            <View className="w-full h-[57%] border border-black rounded-lg px-2 mt-3">
              <TextInput multiline placeholder="Notes" />
            </View>
          </View>

          {/* Footer Modal */}
          <View className="h-[10%] w-full flex flex-row justify-center items-center gap-x-5 my-2">
            {/* Confirm */}
            <TouchableOpacity
              className="p-0.5 bg-green-500 rounded-md"
              onPress={() => onConfirm(true)}>
              <Text className="text-white font-semibold border border-white rounded-md px-3.5 py-1.5">
                Submit
              </Text>
            </TouchableOpacity>

            {/* Close */}
            <TouchableOpacity
              className="p-0.5 bg-red-500 rounded-md"
              onPress={() => onConfirm(false)}>
              <Text className="text-white font-semibold border border-white rounded-md px-3.5 py-1.5">
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default AssignJobModal;
