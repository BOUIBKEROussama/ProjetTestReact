import * as React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';
import NavBar from '../Component/NavBar'
import SQLite from 'react-native-sqlite-storage'


const db = SQLite.openDatabase({location:"default",name:"database"},()=>{
    console.log("ok");
    },(err)=>{console.log("error")});


export default function Profil({ navigation }) {
    const [user, onChangeUser] = React.useState("");
    const [userListe, onChangeUserList] = React.useState(['test','root','utilisateur123']);

    React.useEffect(()=>{

        db.transaction((tx)=>{
            tx.executeSql("CREATE TABLE IF NOT EXISTS Users (Name VARCHAR(255) PRIMARY KEY AUTOINCREMENT)",[],(tx,result)=>{
                console.log("table Users créer ")
                console.log("tx",tx)
                console.log("result",result)
            })
        })
    },[])






    const insert = (username) =>{

        if(username.length == 0){
            Alert.alert("Nom d'utilisateur ne peut pas etre vide");
        }else{

            try{
               db.transaction((tx)=>{
                    tx.executeSql("INSERT INTO Users (Name) VALUES (?)"),[username],(tx, results) => {

                        Alert.alert('Results', results.rowsAffected);
                    }
                })

            }catch(error){

                Alert.alert("error SQLite");
                console.log(error);
            }
        }
    }

    const querryAll = ()=>{
            db.transaction((tx)=>{

                tx.executeSql("SELECT Name FROM Users",[],(tx,result)=>{
                    console.log('result',result);
                    for(let index = 0; index < result.rows.length; index++){
                        console.log(result.rows.item(index))
                    }

                })
            })
    }

    const sendList = () =>{
            onChangeUserList(userListe => [...userListe, user]);
            insert(user)
        }



        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height-70;



        return(
            <View>
                <View style={{height:screenHeight}}>
                    <View style={{display:'flex',flexDirection:'row', marginTop:20}}>
                        <Text>Add User : </Text>
                        <TextInput style={styles.input}
                            onChangeText={onChangeUser}
                            value={user}
                        />
                        <TouchableOpacity onPress={sendList}><Text>Send</Text></TouchableOpacity>

                    </View>
                    <View style={{marginLeft:20,marginRight:20}}>
                        <Text style={{fontSize:30}}>Profil</Text>
                        <ScrollView style={{marginTop:10,marginLeft:20}}>
                            {userListe.map((s,key)=><Text key={key} style={{fontSize: 15,marginBottom:5}}>{s}</Text>)}
                        </ScrollView>
                    </View>
                </View>
            <NavBar navigation={navigation}/>
            </View>


        );
}

const styles = StyleSheet.create({
  input: {
    flexGrow:2,
    borderWidth: 1,

  },
});

