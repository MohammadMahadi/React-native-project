import { FontAwesome5 } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function VideoLive() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);

  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
        <View style={styles.cameraParent}>
          <View style={styles.goLiveParent}><Pressable style={styles.goLive}><Text style={styles.text}>Go Live</Text></Pressable></View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <FontAwesome5 style={styles.text} name="camera" size={24} color="black" />
            </Pressable>
          </View>
          </View>
        </Camera>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    cameraParent:{
      flexDirection:"column",
      flex:1,
    },
    buttonContainer: {
      height:30,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      color: 'white',
    },

    goLive:{
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent:"center",
      borderRadius:50,
      height:100,
      width:100,
      borderColor:"pink",
      borderWidth:5,
      backgroundColor:"#1da1f2"
    },
    goLiveParent:{
      flex:1,
      flexDirection:"row",
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent:"center",
    }
  });