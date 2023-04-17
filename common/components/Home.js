import React from 'react'
import { Box, HStack, Text, VStack } from 'native-base'
import SlotBox from './SlotBox'
import Indicator from './Indicator'
import { ScrollView } from 'react-native'

const Home = () => {
  const slotdata = [
    {
        name:"Slot1",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot2",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot3",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot4",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot5",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot6",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot7",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot8",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot9",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot10",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot11",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot12",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot13",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot14",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot15",
        occupied:true,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    {
        name:"Slot16",
        occupied:false,
        leavingtime: "2023-04-17T08:45:27.015Z"
    },
    
  ]
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
        <Box width="100%" flex={1}>
        <Text textAlign="center" mt={6} fontWeight="bold" fontSize="lg">Parking Slot</Text>
        <HStack flexWrap="wrap" width="100%" space={2} alignItems="center" justifyContent="center" mt={6}>
            {
                slotdata.map((item,index) => (
                    <SlotBox item={item} key={index}/>
                ))
            }
        </HStack>
        <VStack margin="auto" space={4} mt={10} mb={10}>
            <Indicator title="Unoccupied" color="#CCF3EE"/>
            <Indicator title="Occupied" color="#F9FFA4"/>
            <Indicator title="About to Leave" color="#97C4B8"/>
        </VStack>
    </Box>
    </ScrollView>
  )
}

export default Home
