import * as ImagePicker from "expo-image-picker";
import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import { auth } from '../firebase';

export default function ProfileImag() {
//initial hooks

const user = auth.currentUser;
 
const [image,setimage]=useState("https://firebasestorage.googleapis.com/v0/b/livestreaming-301cf.appspot.com/o/UserDefultImage.png?alt=media&token=e9eb7fac-47ce-4ead-8f65-32d1b92b2d84");
  

//expo image picker code
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      updateProfile(auth.currentUser, {
       photoURL: result.uri
      }).then(() => {
        setimage(user.photoURL),
        Alert.alert(
          "Porfile pic Succesfully Changed",
          "your profile picture is succesfully changed",
          [
            {
              text: "ok",
              style: "cancel",
            },
          ]
        );
      }).catch((error) => {
        Alert.alert(
          "Please try again",
          "your profile picture is not succesfully changed for serverside or network problem ",
          [
            {
              text: "ok",
              style: "cancel",
            },
          ]
        );
      });
    }
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result2 = await ImagePicker.launchCameraAsync();

    if (!result2.cancelled) {
      updateProfile(auth.currentUser, {
        photoURL: result2.uri
       }).then(() => {
        setimage(user.photoURL),
         Alert.alert(
           "Porfile pic Succesfully Changed",
           "your profile picture is succesfully changed",
           [
             {
               text: "ok",
               style: "cancel",
             },
           ]
         );
       }).catch((error) => {
        Alert.alert(
          "Please try again",
          "your profile picture is not succesfully changed for serverside or network problem ",
          [
            {
              text: "ok",
              style: "cancel",
            },
          ]
        );
       });
    }
  };

  const ChooseMethodAlert = () => {
    Alert.alert(
      "Choose a Method",
      "You can choose an image from your storage or you can use camera",
      [
        { text: "Camera", onPress: () => openCamera(), style: "default" },
        { text: "Gallery", onPress: () => pickImage() },
      ]
    );
  };

  const showAlert = () =>
    Alert.alert(
      "Do you Want To Change Your Photo?",
      "If you want to change your Profile photo then press Yes",
      [
        {
          text: "Yes",
          onPress: () => ChooseMethodAlert(),
          style: "default",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );

function DefultImage(){
  if(image===null){
    return <Image
    style={style.AccountPic}
    source={{uri:user.photoURL}}
  />;
  }else{
    return <Image
    style={style.AccountPic}
    source={{uri:image}}
  />;
  }
}

  return (
    <View>
      <Pressable onPress={showAlert}>
      {DefultImage()}
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  AccountPic: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
});
