import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HScrollBalance() {
  return (
    <View style={style.HScrollBalance}>
    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
       <View style={style.BalanceInfoContainer}>
      <View style={style.BalanceContainer}>
        <Image style={style.CRIcon} source={require("../assets/important/Diamond.png")}/>
       <Text style={style.BalanceCount}>18850</Text>
      </View>
       <Text style={style.BalanceInfo}>Current Diamonds</Text>
       </View>
       <View style={style.BalanceInfoContainer}>
      <View style={style.BalanceContainer}>
        <Image style={style.CRIcon} source={require("../assets/important/coin.png")}/>
       <Text style={style.BalanceCount}>5070</Text>
      </View>
       <Text style={style.BalanceInfo}>Current Coins</Text>
       </View>
       <View style={style.BalanceInfoContainer}>
      <View style={style.BalanceContainer}>
        <Image style={style.CRIcon} source={require("../assets/important/dollar.png")}/>
       <Text style={style.BalanceCount}>7500</Text>
      </View>
       <Text style={style.BalanceInfo}>Current Cash</Text>
       </View>
       <View style={style.BalanceInfoContainer}>
      <View style={style.BalanceContainer}>
        <Image style={style.CRIcon} source={require("../assets/important/gift.png")}/>
       <Text style={style.BalanceCount}>250</Text>
      </View>
       <Text style={style.BalanceInfo}>Current Gift</Text>
       </View>
     </ScrollView>
    </View>
  );
}

const style= StyleSheet.create({
    CRIcon:{
        height:30,
        width:30,
        marginRight:5,
        resizeMode:"contain"
      },
      BalanceInfoContainer:{
        justifyContent:"center",
        padding:10,
        width:155,
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
      },
      HScrollBalance:{
        height:120,
        marginBottom:20
      },
})