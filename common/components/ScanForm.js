import React from "react";
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Text,
  VStack,
} from "native-base";

const ScanForm = ({ route, navigation }) => {
  const { name } = route.params;
  return (
    <Box>
     <VStack mt={16}>
     <Input variant="outline" placeholder="Enter your Name" m={6} p={4} />
      <Input variant="outline" placeholder="Enter your phone no" m={6} p={4} />
      <Input variant="outline" placeholder="Enter no of hours" m={6} p={4} />
      <Input
        variant="outline"
        placeholder="Slot Name"
        m={6}
        value={name}
        p={4}
      />
      <HStack m="auto" space={4} p={2} mt={4}>
        <Checkbox checked={true} color="green" aria-label="Hello" />
        <Text>Enable Notification</Text>
      </HStack>

      <Button
        onPress={() => {}}
        backgroundColor="#219F94"
        colorScheme="#219F94"
        _text={{ fontWeight: "bold" }}
        px={20}
        py={4}
        m={6}
      >
        Scan Now
      </Button>
     </VStack>
    </Box>
  );
};

export default ScanForm;
