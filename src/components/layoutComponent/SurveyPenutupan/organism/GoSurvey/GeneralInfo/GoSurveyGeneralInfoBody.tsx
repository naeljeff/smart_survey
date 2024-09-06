import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UseQueryResult} from '@tanstack/react-query';

import {surveyJobProps} from '../../../../../../props/surveyJobProps';
import GoSurveyGeneralInfoFields from '../../../atoms/GoSurvey/GoSurveyGeneralInfoFields';
import GoSurveyGeneralInfoDropdown from '../../../atoms/GoSurvey/GoSurveyGeneralInfoDropdown';

type surveyJobPropAsData = {
  data: surveyJobProps;
};

type GoSurveyGeneralInfoBodyProps = {
  surveyFunction: UseQueryResult<surveyJobPropAsData>;
};

const GoSurveyGeneralInfoBody = ({
  surveyFunction,
}: GoSurveyGeneralInfoBodyProps) => {
  const data = surveyFunction?.data?.data;
  const [formData, setFormData] = useState<surveyJobProps>(data!);

  // Make sure data is fetched
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  if (surveyFunction?.isLoading) {
    return (
      <View className="h-screen w-screen flex flex-col justify-center items-center bg-gray-400/50">
        <ActivityIndicator size="large" color="#00bffe" />
      </View>
    );
  }

  if (surveyFunction?.isError) {
    return (
      <Text className="h-screen w-screen text-center text-lg text-red-500">
        Error loading data
      </Text>
    );
  }

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      className="flex-grow"
      refreshControl={
        <RefreshControl
          refreshing={surveyFunction.isLoading}
          onRefresh={surveyFunction.refetch}
          colors={['#00bfff']}
        />
      }>
      {/* General Info */}
      <View className="w-full border-b border-black">
        <Text className="font-semibold text-black text-[16px] px-5 py-1">
          General Info
        </Text>
      </View>
      <Text className="text-black text-lg px-5 py-1 mb-6">
        {data?.noPengajuanSurvey}/{data?.unitNo}
      </Text>

      {/* Data Of Insured */}
      <View className="w-full border-b border-black">
        <Text className="text-black text-[16px] px-5 py-1">
          Data Of Insured
        </Text>
      </View>
      <View className="w-full px-5 py-1 flex flex-col items-center">
        {/* Nama */}
        <GoSurveyGeneralInfoFields
          data={formData?.nama}
          onChange={handleFieldChange}
          fieldName={'nama'}
          properties={'nama'}
        />

        {/* Type of Report */}
        <GoSurveyGeneralInfoDropdown
          data={'Raksa'}
          onChange={handleFieldChange}
          fieldName={'type of report'}
          properties={'report'}
        />

        {/* Alamat Survey */}
        <GoSurveyGeneralInfoFields
          data={formData?.alamatSurvey}
          onChange={handleFieldChange}
          fieldName={'survey address'}
          properties={'alamatSurvey'}
        />

        {/* Phone Number */}
        <GoSurveyGeneralInfoFields
          data={formData?.noTelp}
          onChange={handleFieldChange}
          fieldName={'phone no'}
          properties={'noTelp'}
        />

        {/* Email */}
        <GoSurveyGeneralInfoFields
          data={formData?.email}
          onChange={handleFieldChange}
          fieldName={'email'}
          properties={'email'}
        />

        {/* Survey Data */}
        <GoSurveyGeneralInfoDropdown
          data={'Awal Penutupan'}
          onChange={handleFieldChange}
          fieldName={'survey data'}
          properties={'surveyData'}
        />

        {/* Type Of Cover */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.jenisAsuransi}
          onChange={handleFieldChange}
          fieldName={'type of cover'}
          properties={'jenisAsuransi'}
        />
      </View>

      {/* Data Of Vehicle */}
      {/* license no, make, category, model, body type, chassis no, engine no, year, color, transmission, fuel */}
      <View className="w-full border-b border-black mt-3">
        <Text className="text-black text-[16px] px-5 py-1">
          Data Of Vehicle
        </Text>
      </View>
      <View className="w-full px-5 py-1 flex flex-col items-center">
        {/* License No */}
        <GoSurveyGeneralInfoFields
          data={formData?.platNomor}
          onChange={handleFieldChange}
          fieldName={'license no'}
          properties={'platNomor'}
        />

        {/* Make */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.merek}
          onChange={handleFieldChange}
          fieldName={'make'}
          properties={'merek'}
          placeholder='Select a Make'
        />

        {/* Category */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.tipe}
          onChange={handleFieldChange}
          fieldName={'category'}
          properties={'tipe'}
          placeholder='Select a Category'
        />

        {/* Model */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.model}
          onChange={handleFieldChange}
          fieldName={'model'}
          properties={'model'}
          placeholder='Select a Model'
        />

        {/* Body Type */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.bodyType}
          onChange={handleFieldChange}
          fieldName={'body type'}
          properties={'bodyType'}
          placeholder='Select Body Type'
        />

        {/* Chassis No */}
        <GoSurveyGeneralInfoFields
          data={formData?.chassisNo}
          onChange={handleFieldChange}
          fieldName={'chassis no'}
          properties={'chassisNo'}
        />

        {/* Engine No */}
        <GoSurveyGeneralInfoFields
          data={formData?.engineNo}
          onChange={handleFieldChange}
          fieldName={'engine no'}
          properties={'engineNo'}
        />

        {/* Year */}
        <GoSurveyGeneralInfoFields
          data={formData?.year}
          onChange={handleFieldChange}
          fieldName={'year'}
          properties={'year'}
        />

        {/* Color */}
        <GoSurveyGeneralInfoFields
          data={formData?.warna}
          onChange={handleFieldChange}
          fieldName={'license no'}
          properties={'warna'}
        />

        {/* Transmission */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.transmission}
          onChange={handleFieldChange}
          fieldName={'transmission'}
          properties={'transmission'}
          placeholder="Select Transmission"
        />

        {/* Fuel */}
        <GoSurveyGeneralInfoDropdown
          data={formData?.fuel}
          onChange={handleFieldChange}
          fieldName={'fuel'}
          properties={'fuel'}
          placeholder="Select Fuel"
        />
      </View>

      {/* Button */}
      <View className="w-full flex justify-center items-center py-3 my-5">
        <TouchableOpacity
          className="bg-gray-100 rounded-md px-4 py-1.5 border border-black"
          onPress={() => console.log('pressed')}>
          <Text className="text-black text-sm text-center">Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GoSurveyGeneralInfoBody;
