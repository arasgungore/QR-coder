import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { parseQRCode } from '../utils/qrCodeUtils';

const QRCodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const parsedData = parseQRCode(data);
    if (parsedData) {
      // Handle the parsed data (e.g., navigate to a new screen)
      setScannedData(parsedData);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <Text>QR Code Scanner</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {scanned && <Text>Scanned Data: {scannedData}</Text>}
    </View>
  );
};

export default QRCodeScanner;
