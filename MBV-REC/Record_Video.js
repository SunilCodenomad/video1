/* eslint-disable */
// import React, { useState } from "react";
// import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity,ScrollView } from "react-native";
// import { useNavigation } from '@react-navigation/native';

// const data = [
//     { key: 'SEE' ,title:'wel 1videos'},
//     { key: 'VEE' ,title:'wel 2videos'},
//     { key: 'LEE' ,title:'wel 3videos'},


//   ]
// const Record_Video =()=>{
//   const navigation = useNavigation();

//   const [arraydata, setarraydata] = useState(data);

//     return(
//       <ScrollView style={styles.container1}>
// <View style={styles.container}>
//       <View style={styles.TextsView}>
//         <Text style={styles.Text}>Mybest.video</Text>
//       </View>
//       <View style={styles.TableView}>
//         <View style={styles.RowView}>
//           <Text style={{color:'black',fontWeight: "bold"}}>RECORD VIDEO</Text>

//         </View>
//       </View>


//       <View>
//         <FlatList

//           data={arraydata}

//           renderItem={({ item }) => 
//           <View  style={styles.ListedView}>
//           <View style={styles.GridedViewBlockStyle}>
//             <Text style={styles.GridedViewInsideTextItemStyle}> {item.key}</Text>
//           </View>
//         <View style={styles.GridedViewBlockStyle10}>
//             <Text style={styles.GridedViewInsideTextItemStyle}> {item.title}</Text>

//         </View>
//         </View>
//           }

//           numColumns={1}

//         />
//       </View>
//     </View>

//     </ScrollView>





//     )
// }
// const styles = StyleSheet.create({
//          container: {
//             flex: 1,
//            backgroundColor: "#1c3567",
//                 },
//                 container1: {
//                   flex: 1,
//                   backgroundColor: "#1c3567"
//                 },
//          ListedView: {
//            display:"flex",
//            flexDirection:'row',
//             width: "95%",
//             alignSelf: 'center',
//             marginTop:20
//                    },

//          RowView: {
//              width: '60%',
//              alignSelf: 'center',
//              alignItems: 'center'
//                    },
//          TextsView: {
//              alignSelf: 'center',
//              width: "90%",
//              alignItems: 'center',
//              marginTop: 50,},
//          Text: {
//             fontFamily: "Cochin",
//             color: 'white',},
//          TableView: {
//                 width: '95%',
//                 height: 50,
//                 backgroundColor: '#fbc112',
//                 marginTop: 20,

//                 marginLeft:10,
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               },
//          GridedViewBlockStyle: {

//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     height: 90,
//                     width:'30%',
//                     margin: 5,
//                     backgroundColor: '#999999'

//                   },
//          GridedViewBlockStyle10: {

//                     width:'55%',

//                   },
//          GridedViewInsideTextItemStyle: {

//                     color: '#fff',
//                     padding: 10,
//                     fontSize: 18,
//                     justifyContent: 'center',

//                   },
//           button: {
//                     alignItems: "center",
//                     backgroundColor: "#DDDDDD",
//                     padding: 10}
// })
// export default Record_Video;
import React, { useState, useRef } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import RNFS from 'react-native-fs';
const Record_Video = () => {
  // let filename = videoUrl.substring(deviceuri.lastIndexOf("/") + 1, videoUrl.length);
  // let path_name = RNFS.DocumentDirectoryPath + filename;

  const videoPlayer = useRef(null);
  const [external, setExternal] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState('content');

  useEffect(() => {


    setExternal(RNFS.DocumentDirectoryPath);

    // getFile(RNFS.DocumentDirectoryPath);
    // var val = AsyncStorage.getItem('check')
    // if (val != null) {
    //   setExternalDirectory(RNFS.DocumentDirectoryPath);
    //   getFileContent(RNFS.DocumentDirectoryPath);
    // }
  }, [])

  // const getFile = async (path) => {
  //   const reader = await RNFS.readDir(path);
  //   console.log(reader)

  // };





  const onSeek = (seek) => {

    videoPlayer.current.seek(seek);
  };

  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert('Oh! ', error);

  const exitFullScreen = () => {
    alert('Exit full screen');
  };

  const enterFullScreen = () => { };

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );

  const onSeeking = (currentTime) => setCurrentTime(currentTime);

  return (
    <View style={{ flex: 1 }}>
      <Video
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={paused}
        ref={videoPlayer}
        resizeMode={screenType}
        onFullScreen={isFullScreen}
        source={{
          uri:
            external;
        }}
        style={styles.mediaPlayer}
        volume={10}
      />
      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        toolbar={renderToolbar()}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
})
export default Record_Video;