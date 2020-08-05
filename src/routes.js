import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import FindFlats from './pages/FindFlats';
import InformationFlats from './pages/InformationFlats';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FindFlats"
          component={FindFlats}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="InformationFlats"
          component={InformationFlats}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
