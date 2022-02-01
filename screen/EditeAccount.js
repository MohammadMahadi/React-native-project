import { updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../firebase';

export default function EditeAccount({navigation}) {

// initize the state hook
const [name, setName] = useState('');
const [loading,setloading]= useState(false)

function updateName(){
  setloading(true)
  updateProfile(auth.currentUser, {
    displayName:name
  }).then(() => {
    setloading(false)
    Alert.alert(
      "Succesfully Name Changed",
      "your name is Succesfully Changed",
      [
        {
          text: "ok",
          onPress:()=>{navigation.goBack()},
          style: "cancel",
        },
      ]
    );
  }).catch((error) => {
   console.log(error)
  });
}


  return (
    <View style={style.body}>
      <ActivityIndicator size="large" color="#1da1f2" animating={loading} />
    <View style={style.ProfileImage}>
    </View>
    <View style={style.form}>
    <Text style={style.InputText}>Change you name</Text>
    <TextInput style={style.input} placeholder='Full name'  value={name}
        onChangeText={text=>setName(text)} />
   <Pressable onPress={updateName} style={style.Btn}><Text style={style.BtnText}>Save Changes</Text></Pressable>
   <Pressable onPress={()=>navigation.goBack()} style={style.Btn}><Text style={style.BtnText}>cancel Changes</Text></Pressable>
    </View>
    </View>
  );
}

const style=StyleSheet.create({
    body:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white",
        padding:10,
     },

     ProfileImage:{
        alignSelf:"center",
        marginBottom:50
     },

   input:{
       borderWidth:1,
       height:45,
       padding:10,
       borderRadius:20,
       marginBottom:10,
       borderColor:"gray"
   },

   Btn:{
       marginTop:20,
       backgroundColor:"#1da1f2",
       height:50,
       borderRadius:30,
       justifyContent:'center',
       alignItems:"center",
   },
   BtnText:{
       fontSize:20,
       color:"white",
       fontWeight:"700"
   },
   InputText:{
    fontSize:21,
    fontWeight:"bold",
    color:"black",
    marginBottom:20,
    marginLeft:20
   }
})





