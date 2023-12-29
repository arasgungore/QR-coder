import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { generateQRCode } from '../utils/qrCodeUtils';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleGenerateQRCode = () => {
    if (text) {
      // Generate QR code
      const qrCodeDataUri = generateQRCode(text);
      // Use qrCodeDataUri as needed (e.g., display it in an Image component)
    }
  };

  return (
    <View>
      <Text>QR Code Generator</Text>
      <TextInput
        placeholder="Enter data for QR code"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Generate QR Code" onPress={handleGenerateQRCode} />
      {text ? <QRCode value={text} size={200} /> : null}
    </View>
  );
};

export default QRCodeGenerator;
