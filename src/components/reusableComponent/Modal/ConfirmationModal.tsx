import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Modal,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

type ConfirmationModalProps = {
  title: string;
  visible: boolean;
  onConfirm: (confirmed: boolean) => void;
};

const ConfirmationModal = ({
  title,
  visible,
  onConfirm,
}: ConfirmationModalProps) => {
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
        <View className="w-4/5 h-1/3 bg-white p-5 rounded-xl shadow-2xl">
          {/* Header Modal */}
          <View className="w-full h-1/6 flex flex-row justify-center items-center px-1 mb-3">
            {/* Confirmation Title */}
            <Text className="text-lg text-black/90 font-semibold capitalize">
              Confirmation
            </Text>
          </View>

          {/* Body Modal */}
          <View className="h-4/6 flex-1 justify-center items-center p-4">
            <Text className="text-justify text-black text-xl">
              Are you sure you want to {title} this survey?
            </Text>
          </View>

          {/* Footer Modal */}
          <View className="h-1/6 w-full flex flex-row justify-center items-center gap-x-5 mt-4">
            {/* Confirm */}
            <TouchableOpacity
              className="px-4 py-2 bg-green-500 rounded-md"
              onPress={() => onConfirm(true)}>
              <Text className="text-white font-semibold">Confirm</Text>
            </TouchableOpacity>

            {/* Close */}
            <TouchableOpacity
              className="px-4 py-2 bg-red-500 rounded-md"
              onPress={() => onConfirm(false)}>
              <Text className="text-white font-semibold">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default ConfirmationModal;
