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

class Profil extends Component {
    constructor(props){
        super(props);
        this.state={
            user:['test','root','utilisateur123']
        }
    }

    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height-70;



        return(

            <View>
                <View style={{height:screenHeight}}>
                    <Text style={{fontSize:30}}>Profil</Text>
                    <View style={{marginTop:10}}>
                        {this.state.user.map((s)=><Text>{s}</Text>)}
                    </View>

                </View>
            <NavBar navigation={this.props.navigation}/>
            </View>


        );
    }
}

export default Profil;
