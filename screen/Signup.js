import React from 'react';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Signup({navigation}) {
  return (
    <View style={style.body}>
        <View style={style.container}>
    <Image style={style.logo} source={require("../assets/logo3.png")}/>
    </View>
    <Text style={style.title}>Sign up Now</Text>
    <Text style={style.subTitle}>Please File the detaile and create a Acount</Text>

    <View style={style.form}>
    <TextInput style={style.input} placeholder='Full name' />
    <TextInput style={style.input} placeholder='Email' keyboardType="email-address" />
    <TextInput style={style.input} placeholder='Password' keyboardType="visible-password"/>
    <Text style={style.inputDe}>password must be 6 charecter</Text>
   <Pressable onPress={()=>navigation.navigate('BottomTab')} style={style.Btn}><Text style={style.BtnText}>Sign up</Text></Pressable>
   <View style={style.BottomView}><Text style={style.BottomText}>Already Have an Acount?</Text><Text onPress={() => navigation.navigate('Login')} style={style.LoginText}>Log in</Text></View>
    </View>


    </View>
  );
}


const style=StyleSheet.create({
    body:{
        backgroundColor:"white",
        padding:10,
     },
    container:{   
        flex:1,
        alignItems:"center"
    },
    logo:{
        height:150,
        width:150,
        marginTop:50
        
    },
    title:{
        fontSize:28,
        color:"black",
        textAlign:"center",
        marginTop:190,
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
   marginLeft:20
   },
   BottomText:{
       fontSize:14,
       color:"gray"
       
   },
   LoginText:{
    fontSize:14,
    color:"#1da1f2",
    marginLeft:10,
    marginBottom:70
   }
})