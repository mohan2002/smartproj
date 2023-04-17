import { Box, HStack, Text, VStack } from 'native-base'
import React from 'react'

const Indicator = ({title,color}) => {
  return (
    <HStack space={4}>
        <Box w={19} h={19} bg={color} borderRadius="sm" shadow="1">
        </Box>
        <Text fontSize="sm" fontWeight="bold">{"-> "}{title}</Text>
    </HStack>
  )
}

export default Indicator
