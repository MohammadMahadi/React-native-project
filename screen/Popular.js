import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Popular() {
  return (
    <ScrollView>
      
    <View style={style.container}>
      <ImageBackground source={require("../assets/LiveCover/cover1.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="graduation-cap" size={19} color="white" />
        <Text style={style.Tag}>Educatinal</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>5200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Mohamma Mahadi</Text>
      </View>
      </ImageBackground>
      <ImageBackground source={require("../assets/LiveCover/cover3.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="music" size={19} color="white" />
        <Text style={style.Tag}>Music_Fun</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>5200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Mohamma Mahadi</Text>
      </View>
      </ImageBackground>
     </View>

    <View style={style.container}>
      <ImageBackground source={require("../assets/LiveCover/cover4.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome5 name="smile" size={19} color="white" />
        <Text style={style.Tag}>Rendom Live</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>23566</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>priyanka das</Text>
      </View>
      </ImageBackground>
      <ImageBackground source={require("../assets/LiveCover/cover7.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="camera" size={19} color="white" />
        <Text style={style.Tag}>Bloging Live</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>18500</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Alivai Bloging Live</Text>
      </View>
      </ImageBackground>
     </View>

    <View style={style.container}>
      <ImageBackground source={require("../assets/LiveCover/cover9.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="camera" size={19} color="white" />
        <Text style={style.Tag}>Bloging Live</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>17200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>John Due</Text>
      </View>
      </ImageBackground>
      <ImageBackground source={require("../assets/LiveCover/cover11.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="book" size={19} color="white" />
        <Text style={style.Tag}>Islamic</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>17000</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>ali bin salman</Text>
      </View>
      </ImageBackground>
     </View>

    <View style={style.container}>
      <ImageBackground source={require("../assets/LiveCover/cover2.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="graduation-cap" size={19} color="white" />
        <Text style={style.Tag}>Educatinal</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>16500</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Garoka milu</Text>
      </View>
      </ImageBackground>
      <ImageBackground source={require("../assets/LiveCover/cover10.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome5 name="smile" size={19} color="white" />
        <Text style={style.Tag}>Rendom Live</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>5200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Shayan Ahammed </Text>
      </View>
      </ImageBackground>
     </View>

    <View style={style.container}>
      <ImageBackground source={require("../assets/LiveCover/cover5.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="music" size={19} color="white" />
        <Text style={style.Tag}>Music_Fun</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>16200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Dj Sifulllah</Text>
      </View>
      </ImageBackground>
      <ImageBackground source={require("../assets/LiveCover/cover12.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="camera" size={19} color="white" />
        <Text style={style.Tag}>Educatinal</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>16200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Shaila akter</Text>
      </View>
      </ImageBackground>
     </View>

    <View style={style.container}>
      <ImageBackground source={require("../assets/LiveCover/cover6.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="camera" size={19} color="white" />
        <Text style={style.Tag}>Bloging Live</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>15500</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Zihan khans</Text>
      </View>
      </ImageBackground>
      <ImageBackground source={require("../assets/LiveCover/cover8.jpg")} style={style.cover}>
      <View style={style.coverDetailTop}><FontAwesome name="music" size={19} color="white" />
        <Text style={style.Tag}>Music_Fun</Text>
        <FontAwesome name="user" size={19} color="white" />
        <Text style={style.Viewer}>5200</Text>
        </View>
      <View style={style.userDetailBox}> 
      <FontAwesome name="microphone" size={19} color="white" />
       <Text style={style.userName}>Zafor Ekbal</Text>
      </View>
      </ImageBackground>
     </View>


    </ScrollView>
  );
}

const style=StyleSheet.create({
  container:{
    flexDirection:"row"
  },
   cover:{
     margin:3,
     flex:1,
     height:180
   },
   coverDetailTop:{
     flexDirection:"row",
     margin:5,
   },
   Tag:{
     color:"white",
     fontSize:12,
     marginLeft:5,
     marginRight:25,
     fontWeight:"bold"
  
   },
  Viewer:{
    color:"white",
    fontSize:12,
    fontWeight:"bold"
  },
  userName:{
       marginLeft:5,
       fontWeight:"bold",
       color:"white",
       fontSize:14,
  },
  userDetailBox:{
    flexDirection:"row",
    marginTop:120,
    marginLeft:5,
  }
})

