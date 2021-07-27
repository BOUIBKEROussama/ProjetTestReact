import React, {Component} from 'react';
import type {Node} from 'react';

import Page2 from '../Page/Page2'
import Profil from '../Page/Profil'
import About from '../Page/About'
import PageContainer from '../Page/PageContainer'

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';


export default function NavBar({ navigation }) {

        let screenHeight = Dimensions.get('window').height;

        return(
            <View style={{displa:'flex', flexDirection:'row', backgroundColor:'blue',height:50}}>
                <TouchableOpacity onPress={() => navigation.navigate("Profil")} style={{flexGrow:2}}>
                    <Text>Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PageContainer")} style={{flexGrow:2}}>
                    <Text>Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("About")} style={{flexGrow:2}}>
                    <Text >About Us</Text>
                </TouchableOpacity>
            </View>
        );
}