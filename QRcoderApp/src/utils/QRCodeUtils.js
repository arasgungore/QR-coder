import QRCode from 'react-native-qrcode-svg';

// Function to generate QR codes
export const generateQRCode = (data) => {
  try {
    const qrCodeSvg = QRCode({ value: data, size: 200 });
    // Return the SVG code or image URI based on your use case
    return qrCodeSvg.toDataURL();
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
};

// Function to parse scanned QR codes
export const parseQRCode = (scannedData) => {
  try {
    // Placeholder logic for parsing scanned QR codes
    // You can add your own logic to extract meaningful data from the scanned result
    return scannedData;
  } catch (error) {
    console.error('Error parsing QR code:', error);
    return null;
  }
};
