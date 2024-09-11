import {ScrollView, Text, View} from 'react-native';
import React from 'react';

import GoSurveyExteriorDetail from '../../../molecules/GoSurvey/GoSurveyExterior/GoSurveyExteriorDetail';
import {useGoSurveyExterior} from '../../../../../../store/storeGoSurveyExterior';

const GoSurveyExteriorBody = () => {
  const {exteriorData} = useGoSurveyExterior();
  console.log(exteriorData);
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true} className="flex-1">
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          Exterior / Interior
        </Text>
      </View>

      {/* Bemper - belakang */}
      <GoSurveyExteriorDetail
        title="bemper - belakang"
        type="bemper_belakang"
      />

      {/* Bemper - depan */}
      <GoSurveyExteriorDetail title="bemper - depan" type="bemper_depan" />

      {/* Lampu Stop Kiri - belakang */}
      <GoSurveyExteriorDetail
        title="lampu stop kiri - belakang"
        type="lampu_stop_kiri_belakang"
      />

      {/* Lampu Besar Kiri - depan */}
      <GoSurveyExteriorDetail
        title="lampu besar kiri - depan"
        type="lampu_besar_kiri_depan"
      />

      {/* Lampu Stop Kanan - belakang */}
      <GoSurveyExteriorDetail
        title="lampu stop kanan - belakang"
        type="lampu_stop_kanan_belakang"
      />

      {/* Lampu Besar Kanan - depan */}
      <GoSurveyExteriorDetail
        title="lampu besar kanan - depan"
        type="lampu_besar_kanan_depan"
      />

      {/* Lampu Sein Kiri - belakang */}
      <GoSurveyExteriorDetail
        title="lampu sein kiri - belakang"
        type="lampu_sein_kiri_belakang"
      />

      {/* Lampu Sein Kiri - depan */}
      <GoSurveyExteriorDetail
        title="lampu sein kiri - depan"
        type="lampu_sein_kiri_depan"
      />

      {/* Lampu Sein Kanan - belakang */}
      <GoSurveyExteriorDetail
        title="lampu sein kanan - belakang"
        type="lampu_sein_kanan_belakang"
      />

      {/* Lampu Sein Kanan - depan */}
      <GoSurveyExteriorDetail
        title="lampu sein kanan - depan"
        type="lampu_sein_kanan_depan"
      />

      {/* Spakboard Kiri - belakang */}
      <GoSurveyExteriorDetail
        title="spakboard kiri - belakang"
        type="spakboard_kiri_belakang"
      />

      {/* Spakboard Kiri - depan */}
      <GoSurveyExteriorDetail
        title="spakboard kiri - depan"
        type="spakboard_kiri_depan"
      />

      {/* Spakboard Kanan - belakang */}
      <GoSurveyExteriorDetail
        title="spakboard kanan - belakang"
        type="spakboard_kanan_belakang"
      />

      {/* Spakboard Kanan - depan */}
      <GoSurveyExteriorDetail
        title="spakboard kanan - depan"
        type="spakboard_kanan_depan"
      />

      {/* Pintu Kiri - belakang */}
      <GoSurveyExteriorDetail
        title="pintu kiri - belakang"
        type="pintu_kiri_belakang"
      />

      {/* Cover Spion Kiri - depan */}
      <GoSurveyExteriorDetail
        title="cover spion kiri - depan"
        type="cover_spion_kiri_depan"
      />

      {/* Pintu Kanan - belakang */}
      <GoSurveyExteriorDetail
        title="pintu kanan - belakang"
        type="pintu_kanan_belakang"
      />

      {/* Cover Spion Kanan - depan */}
      <GoSurveyExteriorDetail
        title="cover spion kanan - depan"
        type="cover_spion_kanan_depan"
      />

      {/* Kap Bagasi - belakang */}
      <GoSurveyExteriorDetail
        title="kap bagasi - belakang"
        type="kap_bagasi_belakang"
      />

      {/* Pintu Kiri - depan */}
      <GoSurveyExteriorDetail
        title="pintu kiri - depan"
        type="pintu_kiri_depan"
      />

      {/* Kaca Belakang - belakang */}
      <GoSurveyExteriorDetail
        title="kaca belakang - belakang"
        type="kaca_belakang_belakang"
      />

      {/* Pintu Kanan - depan */}
      <GoSurveyExteriorDetail
        title="pintu kanan - depan"
        type="pintu_kanan_depan"
      />

      {/* Trisplank kiri - belakang */}
      <GoSurveyExteriorDetail
        title="trisplank kiri - belakang"
        type="trisplank_kiri_belakang"
      />

      {/* Kap Mesin - depan */}
      <GoSurveyExteriorDetail
        title="kap mesin - depan"
        type="kap_mesin_depan"
      />
    </ScrollView>
  );
};

export default GoSurveyExteriorBody;
