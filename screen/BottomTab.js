import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, StyleSheet } from "react-native";
import Account from "./Acount";
import Fans from "./Fans";
import Home from "./Home";
import Live from "./Live";
import News from "./News";

const Tab = createBottomTabNavigator();

export default function BottomTab({navigation}) {
  return (
     <Tab.Navigator tabBarOptions={{
      labelStyle: {
        fontSize: 14,
      },
    }}  screenOptions={props=>({
      tabBarIcon:({isFocused,color,size})=>{
        let iconName;
        if(props.route.name==="Home"){
          iconName="home"
        }else if(props.route.name==="Fans"){
          iconName="users"
        }else if(props.route.name==="Live"){
         iconName="video"
        }else if(props.route.name==="News"){
          iconName="globe-asia"
        }else if(props.route.name==="Account"){
          iconName="user-alt"
        }
        return <FontAwesome5  name={iconName} size={28} color="#1da1f2" />
      },tabBarActiveTintColor: '#1da1f2',
      tabBarInactiveTintColor: '#1da1f2',
      tabBarActiveBackgroundColor:"#c9d9ee",
      tabBarStyle: { height: 65},
      
    })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Fans" component={Fans} options={{title:"Friends"}} />
      <Tab.Screen name="Live" component={Live} options={{ unmountOnBlur: true }} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Account" component={Account} options={{title:"Account",headerRight:()=><Pressable onPress={()=>navigation.navigate("EditeAccount")}><FontAwesome5 style={style.EditIcon}  name="user-edit" size={28} color="#1da1f2" /></Pressable>}}/>
    </Tab.Navigator>
  );
}


const style = StyleSheet.create({
  EditIcon:{
    marginRight:30
  }
})


