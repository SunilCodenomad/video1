import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="video" component={Record_Video} />
      <Stack.Screen name="BAR" component={REC_BAR} />
      <Stack.Screen name="COL" component={REC_BAR_col} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;