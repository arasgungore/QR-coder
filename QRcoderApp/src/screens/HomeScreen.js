import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to QR Code Generator"
        onPress={() => navigation.navigate('QRCodeGenerator')}
      />
      <Button
        title="Go to QR Code Scanner"
        onPress={() => navigation.navigate('Scanner')}
      />
    </View>
  );
};

export default HomeScreen;
