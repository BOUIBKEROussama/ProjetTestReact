/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavBar from './Component/NavBar'
import Page2 from './Page/Page2'
import Profil from './Page/Profil'
import About from './Page/About'
import PageContainer from './Page/PageContainer'

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {

  return (

            <NavigationContainer>

                    <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                        name="Profil"
                        component={Profil}
                      />
                      <Stack.Screen
                          name="About"
                          component={About}
                        />
                        <Stack.Screen
                          name="PageContainer"
                          component={PageContainer}
                        />
                    </Stack.Navigator>
                  </NavigationContainer>

  );
};
};
