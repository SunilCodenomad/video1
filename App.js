/* eslint-disable */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Login from './MBV-REC/Login';
import LoginShow from './MBV-REC/LoginShow';
import Register from './MBV-REC/Register';
import Home from './MBV-REC/Home';
import Record_Video from './MBV-REC/Record_Video';
import REC_BAR from './MBV-REC/REC_BAR';
import Camera from './MBV-REC/Camera';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="LoginShow" component={LoginShow} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="video" component={Record_Video} />
          <Stack.Screen name="BAR" component={REC_BAR} />
          <Stack.Screen name="Camera" component={Camera} />

        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}