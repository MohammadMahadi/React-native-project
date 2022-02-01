import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../firebase';


export default function Signup({navigation}) {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSignUp = () => {
auth
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    user.displayName="John Doe";
    user.photoURL="https://firebasestorage.googleapis.com/v0/b/livestreaming-301cf.appspot.com/o/UserDefultImage.png?alt=media&token=e9eb7fac-47ce-4ead-8f65-32d1b92b2d84"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("BottomTab")
      }
    })

    return unsubscribe
  }, [])

  return (
  <KeyboardAvoidingView behavior='position' style={style.kContainer}>
  <View style={style.body}>
        <View style={style.container}>
    <Image style={style.logo} source={require("../assets/logo3.png")}/>
    </View>
    <Text style={style.title}>Sign up Now</Text>
    <Text style={style.subTitle}>Please File the detaile and create a Acount</Text>

    <View style={style.form}>
    <TextInput value={name} onChangeText={text=>setName(text)} style={style.input} placeholder='Full name' />
    <TextInput value={email} onChangeText={text=>setEmail(text)} style={style.input} placeholder='Email' keyboardType="email-address" />
    <TextInput value={password} onChangeText={text=>setPassword(text)} style={style.input} placeholder='Password' secureTextEntry/>
    <Text style={style.inputDe}>password must be 6 charecter</Text>
   <Pressable onPress={handleSignUp} style={style.Btn}><Text style={style.BtnText}>Sign up</Text></Pressable>
   <View style={style.BottomView}><Text style={style.BottomText}>Already Have an Acount?</Text><Text onPress={() => navigation.navigate('Login')} style={style.LoginText}>Log in</Text></View>
    </View>
    </View>
  </KeyboardAvoidingView>
  );
}


const style=StyleSheet.create({
    kContainer:{
       flex:1,
       backgroundColor:"white",
    },
    body:{
        padding:10,
     },
    container:{   
        alignItems:"center"
    },
    logo:{
        height:150,
        width:150,
    },
    title:{
        fontSize:28,
        color:"black",
        textAlign:"center",
        fontWeight:"700"
    },
    subTitle:{
        textAlign:"center",
        fontSize:14,
        marginTop:7,
    },
    form:{
        marginTop:20
    },
   input:{
       borderWidth:1,
       height:45,
       padding:10,
       borderRadius:20,
       marginBottom:10,
       borderColor:"gray"
   },

   inputDe:{
       fontSize:12,
       color:"black",
       marginLeft:13
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
   BottomView:{
   flexDirection:"row",
   marginTop:10,
   marginLeft:20,
   },
   BottomText:{
       fontSize:14,
       color:"gray"
   },
   LoginText:{
    fontSize:14,
    color:"#1da1f2",
    marginLeft:10,
   }
})