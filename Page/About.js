import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import NavBar from '../Component/NavBar'

class About extends Component {

    render(){

        let screenHeight = Dimensions.get('window').height-70;

        return(

            <View>
                <Text style={{height: screenHeight, fontSize:30}}>About</Text>
                <NavBar navigation={this.props.navigation}/>
            </View>


        );
    }
}

export default About;
