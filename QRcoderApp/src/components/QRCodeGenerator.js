import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const generateQRCode = () => {
    // Logic for generating QR codes
    // Assume a library like react-native-qrcode-svg for QR code generation
    // (Make sure to install it using: npm install react-native-qrcode-svg)
  };

  return (
    <View>
      <Text>QR Code Generator</Text>
      <TextInput
        placeholder="Enter data for QR code"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Generate QR Code" onPress={generateQRCode} />
      {text ? <QRCode value={text} size={200} /> : null}
    </View>
  );
};

export default QRCodeGenerator;
