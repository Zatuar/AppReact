/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import Login from './components/Login';
import SideMenu from './components/SideMenu';
import Welcome from './components/Welcome';
import InfoHero from './components/InfoHero';

//const Stack = createNativeStackNavigator();
const Stack1 = createSharedElementStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack1.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Welcome">
        <Stack1.Screen name="Welcome" component={Welcome} />
        <Stack1.Screen name="Login" component={Login} />
        <Stack1.Screen name="Menu" component={SideMenu} />
        <Stack1.Screen
          name="InfoHero"
          component={InfoHero}
          sharedElements={(route, otherRoute, showing) => {
            const {index} = route.params;
            return [
              {
                id: `${index}.icon`,
                animation: 'move',
              },
            ];
          }}
        />
      </Stack1.Navigator>
    </NavigationContainer>
  );
};
export default App;
