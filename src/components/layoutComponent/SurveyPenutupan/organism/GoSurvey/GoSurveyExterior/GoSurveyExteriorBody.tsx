import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import GoSurveyExteriorDetail from '../../../molecules/GoSurvey/GoSurveyExterior/GoSurveyExteriorDetail';

const GoSurveyExteriorBody = () => {
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-1">
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          Exterior / Interior
        </Text>
      </View>

      {/* Bemper - belakang */}
      <GoSurveyExteriorDetail title="bemper - belakang" />

      {/* Bemper - depan */}
      <GoSurveyExteriorDetail title="bemper - depan" />

      {/* Lampu Stop Kiri - belakang */}
      <GoSurveyExteriorDetail title="lampu stop kiri - belakang" />

      {/* Lampu Besar Kiri - depan */}
      <GoSurveyExteriorDetail title="lampu besar kiri - depan" />

      {/* Lampu Stop Kanan - belakang */}
      <GoSurveyExteriorDetail title="lampu stop kanan - belakang" />

      {/* Lampu Besar Kanan - depan */}
      <GoSurveyExteriorDetail title="lampu besar kanan - depan" />

      {/* Lampu Sein Kiri - belakang */}
      <GoSurveyExteriorDetail title="lampu sein kiri - belakang" />

      {/* Lampu Sein Kiri - depan */}
      <GoSurveyExteriorDetail title="lampu sein kiri - depan" />

      {/* Lampu Sein Kanan - belakang */}
      <GoSurveyExteriorDetail title="lampu sein kanan - belakang" />

      {/* Lampu Sein Kanan - depan */}
      <GoSurveyExteriorDetail title="lampu sein kanan - depan" />

      {/* Spakboard Kiri - belakang */}
      <GoSurveyExteriorDetail title="spakboard kiri - belakang" />

      {/* Spakboard Kiri - depan */}
      <GoSurveyExteriorDetail title="spakboard kiri - depan" />

      {/* Spakboard Kanan - belakang */}
      <GoSurveyExteriorDetail title="spakboard kanan - belakang" />

      {/* Spakboard Kanan - depan */}
      <GoSurveyExteriorDetail title="spakboard kanan - depan" />

      {/* Pintu Kiri - belakang */}
      <GoSurveyExteriorDetail title="pintu kiri - belakang" />

      {/* Cover Spion Kiri - depan */}
      <GoSurveyExteriorDetail title="cover spion kiri - depan" />

      {/* Pintu Kanan - belakang */}
      <GoSurveyExteriorDetail title="pintu kanan - belakang" />

      {/* Cover Spion Kanan - depan */}
      <GoSurveyExteriorDetail title="cover spion kanan - depan" />

      {/* Kap Bagasi - belakang */}
      <GoSurveyExteriorDetail title="kap bagasi - belakang" />

      {/* Pintu Kiri - depan */}
      <GoSurveyExteriorDetail title="pintu kiri - depan" />

      {/* Kaca Belakang - belakang */}
      <GoSurveyExteriorDetail title="kaca belakang - belakang" />

      {/* Pintu Kanan - depan */}
      <GoSurveyExteriorDetail title="pintu kanan - depan" />

      {/* Trisplank kiri - belakang */}
      <GoSurveyExteriorDetail title="trisplank kiri - belakang" />

      {/* Kap Mesin - depan */}
      <GoSurveyExteriorDetail title="kap mesin - depan" />
    </ScrollView>
  );
};

export default GoSurveyExteriorBody;
