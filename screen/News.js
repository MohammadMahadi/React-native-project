import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground, Pressable, StyleSheet,
  Text,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function News({navigation}) {
  return (
    <View>
      <ScrollView>
      <View>
        <ImageBackground
          style={style.TopAds}
          source={require("../assets/LiveCover/cover9.jpg")}
        >
          <Text style={style.AdsText}>Welcome to News Feed</Text>
        </ImageBackground>
      </View>

     <View>
    <Pressable onPress={()=>navigation.navigate('Post')}>
    <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover1.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Mahadi Now siver King</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
    </Pressable>

     <Pressable onPress={()=>navigation.navigate('Post')}>
     <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover2.jpg")}
            />
          </View>
          <View>
            <Text style={style.eBadge}>Education</Text>
            <Text style={style.postTitle}>why people is very lie !</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
     </Pressable>

     <Pressable onPress={()=>navigation.navigate('Post')}>
     <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover3.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Popular Host on Bigo</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
     </Pressable>

     <Pressable onPress={()=>navigation.navigate('Post')}>
     <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover5.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Rando Hacker Attack</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
     </Pressable>

    <Pressable onPress={()=>navigation.navigate('Post')}>
    <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover6.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Bautifull Mount</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate('Post')}>
    <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover7.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Bautiful Bangladesh</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>

    </Pressable>

    <Pressable onPress={()=>navigation.navigate('Post')}>
    <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover9.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Arab Amirat</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate('Post')}>
    <View style={style.Post}>
          <View>
            <Image
              style={style.PostPhoto}
              source={require("../assets/LiveCover/cover10.jpg")}
            />
          </View>
          <View>
            <Text style={style.sBadge}>Social</Text>
            <Text style={style.postTitle}>Technical child</Text>
            <Text style={style.postSubTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
      </View>
    </Pressable>

     </View>
     </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  TopAds: {
    height: 75,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  AdsText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  Post: {
    flexDirection: "row",
    padding:10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "white",
    margin:10
  },

  PostPhoto: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
  },

  postTitle: {
    fontSize: 18,
    fontWeight:"700",
    width:200
  },
postSubTitle:{
 fontSize:14,
 flexWrap: 'wrap',
 width:230
},
  sBadge:{
    backgroundColor:"red",
    width:50,
    textAlign:"center",
    color:"white",
    borderRadius:5
  },
  eBadge:{
    backgroundColor:"blue",
    width:70,
    textAlign:"center",
    color:"white",
    borderRadius:5
  }
});
