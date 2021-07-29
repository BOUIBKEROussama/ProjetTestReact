import React, {Component} from 'react';
import type {Node} from 'react';


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
            <View style={{displa:'flex', flexDirection:'row', backgroundColor:'#40cbe7',height:50}}>
                <TouchableOpacity onPress={() => navigation.navigate("Profil")} style={styles.bouton}>
                    <Text style={styles.boutonText}>Profil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("PageContainer")} style={styles.bouton}>
                    <Text style={styles.boutonText}>Page</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("About")} style={styles.bouton}>
                    <Text style={styles.boutonText}>About Us</Text>
                </TouchableOpacity>
            </View>
        );
}


const styles = StyleSheet.create({
    bouton:{
        flexGrow:2,
        borderWidth:1,
    },
  boutonText: {
    color:'white',
    textAlign:'center',
    marginTop:10,

  },
});
