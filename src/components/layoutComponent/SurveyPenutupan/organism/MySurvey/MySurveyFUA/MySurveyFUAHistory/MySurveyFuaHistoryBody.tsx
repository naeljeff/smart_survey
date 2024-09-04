import {Text, View} from 'react-native';
import React from 'react';

type MySurveyFuaHistoryBodyProps = {
  data?: any;
};

const MySurveyFuaHistoryBody = ({data}: MySurveyFuaHistoryBodyProps) => {
  console.log('data: ', data);
  return (
    <View>
      <Text>MySurveyFuaHistoryBody</Text>
    </View>
  );
};

export default MySurveyFuaHistoryBody;
