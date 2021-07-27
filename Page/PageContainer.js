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
import Page2 from './Page2'


class PageContainer extends Component {

    render(){



        return(

            <SafeAreaView>
             <ScrollView>
               <View>

                 <Page2></Page2>
                 <NavBar navigation={this.props.navigation}/>
               </View>
             </ScrollView>
           </SafeAreaView>


        );
    }
}

export default PageContainer;
