import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Acount() {
  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Image
          style={style.AccountPic}
          source={require("../assets/LiveCover/cover1.jpg")}
        />
        <Text style={style.AccountName}>Mohammad Mahadi</Text>
        <Text>username:@Mahadi21</Text>
      </View>
      <View style={style.sectionFollow}>

        <View style={style.FollowContainer}>
          <Text style={style.FollowCount}>1350</Text>
          <Text style={style.FollowText}>Friends</Text>
        </View>

        <View style={style.FollowContainer}>
          <Text style={style.FollowCount}>23500</Text>
          <Text style={style.FollowText}>Followers</Text>
        </View>
        
        <View style={style.FollowContainer}>
          <Text style={style.FollowCount}>350</Text>
          <Text style={style.FollowText}>Following</Text>
        </View>

      
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.BalanceInfoContainer}>
       <View style={style.BalanceContainer}>
         <Image style={style.Diamond} source={require("../assets/important/Diamond.png")}/>
        <Text style={style.BalanceCount}>18850</Text>
       </View>
        <Text style={style.BalanceInfo}>Account Diamonds</Text>
        </View>
        <View style={style.BalanceInfoContainer}>
       <View style={style.BalanceContainer}>
         <Image style={style.Diamond} source={require("../assets/important/coin.png")}/>
        <Text style={style.BalanceCount}>5070</Text>
       </View>
        <Text style={style.BalanceInfo}>Account Coins</Text>
        </View>
        <View style={style.BalanceInfoContainer}>
       <View style={style.BalanceContainer}>
         <Image style={style.Diamond} source={require("../assets/important/dollar.png")}/>
        <Text style={style.BalanceCount}>7500</Text>
       </View>
        <Text style={style.BalanceInfo}>Account Cash</Text>
        </View>
        <View style={style.BalanceInfoContainer}>
       <View style={style.BalanceContainer}>
         <Image style={style.Diamond} source={require("../assets/important/Diamond.png")}/>
        <Text style={style.BalanceCount}>18850</Text>
       </View>
        <Text style={style.BalanceInfo}>Account Diamonds</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1
  },
  topContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  AccountPic: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  AccountName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  sectionFollow:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20
  },
  FollowContainer:{
  alignItems:"center"
  },
  FollowCount:{
   fontSize:21
  },
  FollowText:{
    fontSize:16,
    color:"#696969"
  },
 
  Diamond:{
    height:30,
    width:30,
    marginRight:5,
    resizeMode:"contain"
  },
  BalanceInfoContainer:{
    justifyContent:"center",
    padding:10,
    width:150,
    height:100,
    margin:10,
    borderRadius:20,
    backgroundColor:"#FDD6B9"
   },
   BalanceContainer:{
    flexDirection:"row",
    alignItems:"center"
   },
  BalanceCount:{
  fontWeight:"bold",
  fontSize:22
  },
  BalanceInfo:{
  fontSize:12,
  color:"#b84e00",
  fontWeight:"bold"
  }
});
