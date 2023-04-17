import { Box, Text } from "native-base";
import React from "react";
import { Tooltip } from "native-base";

const SlotBox = ({ item }) => {
  return (
    <Tooltip
      label={item.occupied ? "Occupied" : "Not Occupied"}
      openDelay={500}
    >
      <Box
        height={120}
        width={70}
        bg={item.occupied ? "#F9FFA4" : "#CCF3EE"}
        m={2.5}
        borderRadius="md"
        shadow="1"
      >
        <Text margin="auto" fontWeight="semibold">
          {item.name}
        </Text>
      </Box>
    </Tooltip>
  );
};

export default SlotBox;
