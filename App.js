import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID="mainApp" />
    </>
  );
};

export default App;
