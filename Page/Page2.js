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


class Page2 extends Component {


    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height-70;
        return(
            <ScrollView horizontal={true}>
                <View style={{backgroundColor:'#7FFFD4',width:screenWidth,flex:1, height:screenHeight}}>
                    <Text style={{color:"white",textAlign:'center',padding:100,fontSize:20}}>Page A</Text>
                </View>
                <View style={{backgroundColor:'#8A2BE2',width:screenWidth,flex:1,height:screenHeight}}>
                    <Text style={{color:"white",textAlign:'center',padding:100,fontSize:20}}>Page B</Text>
                </View>

                <View style={{backgroundColor:'#6495ED',width:screenWidth,flex:1,height:screenHeight}}>
                    <Text style={{color:"white",textAlign:'center',padding:100,fontSize:20}}>Page C</Text>
                </View>
            </ScrollView>

        );
    }
}

export default Page2;
