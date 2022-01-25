import { Video } from 'expo-av';
import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import HostVideo from "../assets/Video/Host.mp4";

export default function App() {
  const video = React.useRef(true);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={HostVideo}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height
    },
   
  });
  