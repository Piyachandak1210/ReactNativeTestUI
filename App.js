/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import IntroSlider from './Src/Components/IntroSlider';
import Home from './Src/Components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="SliderScreen"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="IntroSlider" component={IntroSlider} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;