import React, { useEffect, useState } from "react";
import { Box, Button, Image, Text } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const QRScanner = () => {
  const [scanned, setScanned] = useState(false);
  const [message,setMessage] = useState("")
  const navigation = useNavigation()

  const handleBarCodeScanned = ({ data }) => {
    setMessage(data)
    setScanned(false);
  };

  useEffect(() => {
    if(message !== ""){
        navigation.navigate("ScanForm",{
            name:"Slot1"
        })
    }
  },[message])

  return (
    <Box>
        <Text fontSize="xl" fontWeight="bold" marginBottom="2" margin="auto">
            SCAN QR TO BOOK THE SLOT
          </Text>

        <Box height="60%" width="80%" bg="#D9D9D9" margin="auto" borderRadius="md">
        {scanned ? (
        <Box height="100%" width="100%">
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </Box>
      ):
            <Image source={require("../../assets/Camera.png")} alt="Camera" margin="auto"/>
      }
        </Box>

      {!scanned && (
        <Box alignItems="center" justifyContent="center" >
          <Button
            onPress={() => {
              setScanned(true);
            }}
            backgroundColor="#219F94"
            colorScheme="#219F94"
            _text={{ fontWeight: "bold" }}
            px={20}
            py={4}
          >
            Scan Now
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default QRScanner;
