import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import QRScanner from "./common/components/QRScanner";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./common/components/Home";
import { Entypo,AntDesign,Feather } from '@expo/vector-icons'; 
import { createStackNavigator } from "@react-navigation/stack";
import ScanForm from "./common/components/ScanForm";
import 'react-native-gesture-handler';
import Settings from "./common/components/Settings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const QRStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="ScanNow" component={QRScanner} />
        <Stack.Screen name="ScanForm" component={ScanForm}/>
      </Stack.Navigator>
    )
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon:() => (
            <Entypo name="home" size={24} color="black" />
          )
        }}
        />
        <Tab.Screen name="Scan" component={QRStack}
        options={{
          tabBarIcon:() => (
            <AntDesign name="scan1" size={24} color="black" />
          ),
          headerShown:false
        }}
        />
        <Tab.Screen name="Settings" component={Settings}
        options={{
          tabBarIcon:() => (
            <Feather name="settings" size={24} color="black" />
          )
        }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}