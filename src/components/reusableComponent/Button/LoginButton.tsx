import {Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

type LoginButtonProps = {
  isLoading: boolean;
  handleFormSubmit: () => void;
};

const LoginButton = ({isLoading, handleFormSubmit}: LoginButtonProps) => {
  return (
    <>
      {isLoading ? (
        <Button
          mode="contained-tonal"
          className="w-full py-1"
          buttonColor="#fed700"
          labelStyle={{fontSize: 16, fontWeight: 'bold'}}
          textColor="black"
          rippleColor="white"
          uppercase
          loading
          disabled
          onPress={handleFormSubmit}>
          Loading...
        </Button>
      ) : (
        <Button
          mode="contained-tonal"
          className="w-full py-1"
          buttonColor="#fed700"
          labelStyle={{fontSize: 16, fontWeight: 'bold'}}
          textColor="black"
          rippleColor="white"
          uppercase
          onPress={handleFormSubmit}>
          Login
        </Button>
      )}
    </>
  );
};

export default LoginButton;
