import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ListItem} from '@rneui/themed';
import {Surface} from 'react-native-paper';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {JobMonitoringListProps} from '../../../../../props/jobMonitoringListProps';
import SurveyJobAssignJobItemSubList from './SurveyJobAssignJobItemSubList';

type SurveyJobAssignJobItemProps = {
  item: JobMonitoringListProps;
  index: number;
};

const SurveyJobAssignJobItem = ({item, index}: SurveyJobAssignJobItemProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const testList = [
    {
      rowid: 45,
      noPengajuanSurvey: 'AUTO-14-00007-08-2024',
      nama: 'tip test kesekian',
      alamat: 'Jl Re Martadinata',
      noTelp: '081908482552',
      email: 'tifannymartavia@yahoo.com',
      catatan: 'test aja sih ',
      createdAt: '2024-08-15 09:37:39',
      modifiedAt: '2024-08-30 09:56:24',
      surveyToken:
        'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
      priority: 'high',
      alamatSurvey: 'Jl Re Martadinata',
      statusUser: null,
      source: 'RM_SUR_LOGIN',
      requesterFullName: 'Testing',
      cabang: '14',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'KIA',
      tipe: 'NEW CERES/K2700 II',
      model: '2.7 MT',
      jenisAsuransi: 'comprehensive',
      status: 'schedule',
      platNomor: 'BE 333 da',
      perluasan: ['TJH PIHAK III'],
    },
    {
      rowid: 46,
      noPengajuanSurvey: 'AUTO-14-00007-08-2024',
      nama: 'tip test kesekian',
      alamat: 'Jl Re Martadinata',
      noTelp: '081908482552',
      email: 'tifannymartavia@yahoo.com',
      catatan: 'test aja sih ',
      createdAt: '2024-08-15 09:37:39',
      modifiedAt: '2024-08-30 09:56:24',
      surveyToken:
        'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
      priority: 'high',
      alamatSurvey: 'Jl Re Martadinata',
      statusUser: null,
      source: 'RM_SUR_LOGIN',
      requesterFullName: 'Testing',
      cabang: '14',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'KIA',
      tipe: 'NEW CERES/K2700 II',
      model: '2.7 MT',
      jenisAsuransi: 'comprehensive',
      status: 'schedule',
      platNomor: 'BE 333 da',
      perluasan: ['TJH PIHAK III'],
    },
    {
      rowid: 47,
      noPengajuanSurvey: 'AUTO-14-00007-08-2024',
      nama: 'tip test kesekian',
      alamat: 'Jl Re Martadinata',
      noTelp: '081908482552',
      email: 'tifannymartavia@yahoo.com',
      catatan: 'test aja sih ',
      createdAt: '2024-08-15 09:37:39',
      modifiedAt: '2024-08-30 09:56:24',
      surveyToken:
        'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
      priority: 'high',
      alamatSurvey: 'Jl Re Martadinata',
      statusUser: null,
      source: 'RM_SUR_LOGIN',
      requesterFullName: 'Testing',
      cabang: '14',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'KIA',
      tipe: 'NEW CERES/K2700 II',
      model: '2.7 MT',
      jenisAsuransi: 'comprehensive',
      status: 'schedule',
      platNomor: 'BE 333 da',
      perluasan: ['TJH PIHAK III'],
    },
    {
      rowid: 48,
      noPengajuanSurvey: 'AUTO-14-00007-08-2024',
      nama: 'tip test kesekian',
      alamat: 'Jl Re Martadinata',
      noTelp: '081908482552',
      email: 'tifannymartavia@yahoo.com',
      catatan: 'test aja sih ',
      createdAt: '2024-08-15 09:37:39',
      modifiedAt: '2024-08-30 09:56:24',
      surveyToken:
        'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
      priority: 'high',
      alamatSurvey: 'Jl Re Martadinata',
      statusUser: null,
      source: 'RM_SUR_LOGIN',
      requesterFullName: 'Testing',
      cabang: '14',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'KIA',
      tipe: 'NEW CERES/K2700 II',
      model: '2.7 MT',
      jenisAsuransi: 'comprehensive',
      status: 'schedule',
      platNomor: 'BE 333 da',
      perluasan: ['TJH PIHAK III'],
    },
    {
      rowid: 49,
      noPengajuanSurvey: 'AUTO-14-00007-08-2024',
      nama: 'tip test kesekian',
      alamat: 'Jl Re Martadinata',
      noTelp: '081908482552',
      email: 'tifannymartavia@yahoo.com',
      catatan: 'test aja sih ',
      createdAt: '2024-08-15 09:37:39',
      modifiedAt: '2024-08-30 09:56:24',
      surveyToken:
        'TOKEN_nWIE9Szrt7QLt0X43BKP4Do6bm1QR2Q3KzcxbWc5TlNOUW1PdFRCTi9uVFVEeHBqOG9WNmo2WGsxVU5BND0=',
      priority: 'high',
      alamatSurvey: 'Jl Re Martadinata',
      statusUser: null,
      source: 'RM_SUR_LOGIN',
      requesterFullName: 'Testing',
      cabang: '14',
      mkgGroup: 'MKGROUP7',
      unitNo: '0001',
      merek: 'KIA',
      tipe: 'NEW CERES/K2700 II',
      model: '2.7 MT',
      jenisAsuransi: 'comprehensive',
      status: 'schedule',
      platNomor: 'BE 333 da',
      perluasan: ['TJH PIHAK III'],
    },
  ];
  return (
    <ListItem.Accordion
      content={
        <ListItem.Content className="bg-[#fff]">
          <View className="w-screen flex-row justify-between items-center py-6 pr-10 pl-6 border-b border-black bg-[#fff]">
            <Text className="flex-[0.5] text-lg text-black font-semibold">
              {item.nama}
            </Text>
            <View className="flex-[0.5] flex-row justify-end items-center">
              {/* To Do List */}
              <Surface
                className="justify-center items-center border bg-white border-black rounded px-2 py-0.5"
                elevation={2}>
                <TouchableOpacity
                  onPress={() => console.log(`Pressed: ${item.nama}`)}>
                  <Text className="text-xs text-black tracking-tighter">
                    To Do List
                  </Text>
                </TouchableOpacity>
              </Surface>

              {/* Mail Icon */}
              <View className="flex-[0.3] flex items-center justify-center ml-2">
                <Ionicon name="mail" size={24} color="black" />
                <Text
                  className={`absolute w-3.5 h-3.5 text-[8px] text-center pt-0.5 bg-red-500 text-white rounded-full top-4 -left-1`}>
                  {testList.length}
                </Text>
              </View>
            </View>
          </View>
        </ListItem.Content>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
        console.log(item.nama);
      }}
      containerStyle={{
        backgroundColor: '#f7ebd7',
        padding: 0,
        paddingRight: 10,
      }}>
      {testList.map((item, index) => (
        <View key={index}>
          <ListItem
            onPress={() => console.log('keluar')}
            containerStyle={{
              backgroundColor: 'rgba(255, 188, 60, 0.3)',
              paddingLeft: 0,
              paddingRight: 0,
            }}>
            <ListItem.Content>
              <SurveyJobAssignJobItemSubList item={item} index={index} />
            </ListItem.Content>
          </ListItem>
          <View className="w-screen border-b border-black" />
        </View>
      ))}
    </ListItem.Accordion>
  );
};

export default SurveyJobAssignJobItem;
