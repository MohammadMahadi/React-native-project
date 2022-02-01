import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import HScrollBalance from "../component/HScrollBalance";
import ProfileImag from "../component/ProfileImag";
// import { UserName } from "../screen/EditeAccount";
import { auth } from '../firebase';

export default function Acount({navigation}) {

  
const [refreshing, setRefreshing] = React.useState(false);
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  wait(2000).then(() => setRefreshing(false));
}, []);


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
 
 
function displayNamef(){
  const user = auth.currentUser;  
  if (user !== null){
    const displayName = user.displayName;
    return  <Text style={style.AccountName}>{displayName}</Text>
  }else{
    return  <Text style={style.AccountName}>Problem User name</Text>
  }
}

  return (
    <ScrollView  refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}>
      <View style={style.container}>
      <View style={style.topContainer}>
        <ProfileImag/>
        {displayNamef()}
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
     <HScrollBalance/>
      <View style={style.ListContainer}>
      <MaterialCommunityIcons name="post-outline" size={30} color="purple" />
      <Text style={style.ListTitle}>My Posts</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      <View style={style.ListContainer}>
      <MaterialCommunityIcons name="message-text" size={28} color="purple" />
      <Text style={style.ListTitle}>Message</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      <View style={style.ListContainer}>
      <MaterialCommunityIcons name="account-group" size={28} color="purple" />
      <Text style={style.ListTitle}>Go Family</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      <View style={style.ListContainer}>
      <MaterialIcons name="store" size={30} color="purple" />
      <Text style={style.ListTitle}>CR store</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      <View style={style.ListContainer}>
      <FontAwesome5 name="wallet" size={21} color="purple" />
      <Text style={style.ListTitle}>CR Wallet</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      <View style={style.ListContainer}>
      <MaterialIcons name="leaderboard" size={24} color="purple" />
      <Text style={style.ListTitle}>Top 100</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      <View style={style.ListContainer}>
      <Ionicons name="ios-settings" size={24} color="purple" />
      <Text style={style.ListTitle}>Settings</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      
      <Pressable onPress={handleSignOut}>
      <View style={style.ListContainer}>
      <MaterialIcons name="logout" size={24} color="purple" />
      <Text style={style.ListTitle}>Sign Out</Text>
      <View  style={style.ListArrowBox}><AntDesign style={style.ListArrow} name="right" size={21} color="gray" /></View>
      </View>
      </Pressable>
      

    </View>
    </ScrollView>
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
  ListContainer:{
    flexDirection:"row",
    alignItems:'center',
    padding:10,
    borderColor:"#cdcdd2",
    borderBottomWidth:1,
    margin:10
  },
  ListTitle:{
    fontSize:21,
    fontWeight:"600",
    marginLeft:10,
  },
  ListArrowBox:{
    width:200
  },
  ListArrow:{
    alignSelf:"flex-end"
  }
});
