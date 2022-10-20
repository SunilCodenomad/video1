/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Text, Button, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView, SafeAreaView, BackHandler } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNFS from 'react-native-fs';
import Video from 'react-native-video';
// const data = [
//   { key: 'o' },
//   { key: '0' },
//   { key: '*' },
//   { key: '@' },


// ]
const Home = ({route}) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [externalDirectory, setExternalDirectory] = useState('');
  const [files, setFiles] = useState(["https://www.w3schools.com/html/mov_bbb.mp4"]);
  const [videoPath, setvideoPath] = useState();

  useEffect(() => {

    BackHandler.addEventListener("hardwareBackPress", HandleBackPress)
    // setExternalDirectory(RNFS.DocumentDirectoryPath);

    // getFileContent(RNFS.DocumentDirectoryPath);
    //getFileContent(route.params.path);
    if(route.params)
      setFiles([route.params.path])
  }, [isFocused])


  function HandleBackPress() {
   
    return true;
  }
 
  const getFileContent = async (path) => {
    const reader = await RNFS.readDir(path);
    
    //setFiles(reader);
  };

  const Item = ({ name }) => {
    return (
      <View style={styles.GridViewBlockStyle1}>
       
        <Video
          style={styles.GridViewBlockStyle}
          muted={true}
          source={{ uri: RNFS.DocumentDirectoryPath + '/' + name }}
          repeat={true}

        />
        <Text style={{ color: 'white', fontSize: 10, margin: 7 }}>DEFENCE 10 TIMES IN A SINGLE</Text>
        <Text style={{ color: 'white', fontSize: 8, }}>BEACH VOLLEY</Text>

      </View>


    );
  };

  

  const clearStorage = async () => {

    try {
      await AsyncStorage.clear();

      navigation.navigate('Login')
    } catch (e) {
      alert('Failed to clear the async storage.');
    }
  };


  return (
   
    <ScrollView nestedScrollEnabled={true} style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          <Button
            onPress={() => { clearStorage() }}
            title="Logout"
            color="#fbc112"

          />
        </View>
        <View style={styles.TextView}>
          <Text style={styles.text}>Mybest.video</Text>
        </View>
        <View style={styles.tabView}>
          <View style={styles.buttonView}>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('BAR')}> */}
            <Text style={{ color: 'black', fontWeight: "bold" }}>REC MBV</Text>
            {/* </TouchableOpacity> */}
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('video')}> */}
              <Text style={{ color: 'black', fontWeight: "bold" }}>PLAY MBV</Text>
            {/* </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.IconView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Camera')}>
            <Image
              style={styles.tinyLogo1}
              source={require('../Assets/play.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewFeedScreen')}> 
          <Image
            style={styles.tinyLogo}
            source={require('../Assets/Layer.png')}
          />
          </TouchableOpacity> 
        </View>

        <View style={styles.horizontalRow} />
        
        <View style={styles.ListView}>

          


    <FlatList

            data={files}
            renderItem={({item},index) => (
              
              <TouchableOpacity 
                
              onPress={
                () => navigation.navigate('video',{path:item})
              }
              >
             

             <View>
       
        <Item name={item.name} />
      </View>
              
             
              </TouchableOpacity>
            )
            }
            
            keyExtractor={(item) => item.name}
            numColumns={2}
          />
          
         
          

        </View>

      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c3567"
  },
  container1: {
    flex: 1,
    backgroundColor: "#1c3567"
  },
  tinyLogo1: {
    width: 60,
    height: 60,
  },
  tinyLogo: {
    width: 60,
    height: 72,
  },
  buttonView: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center'
  },
  TextView: {
    alignSelf: 'center',
    width: "90%",
    alignItems: 'center',
    marginTop: 15
  },
  text: {
    fontFamily: "Cochin",
    color: 'white',
    fontSize: 15
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  tabView: {
    width: '100%',
    height: 50,
    backgroundColor: '#fbc112',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  IconView: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  horizontalRow: {
    width: '100%',
    height: 3,
    backgroundColor: '#fbc112'
  },
  ListView: {
    width: "100%",
    alignSelf: 'center',
    marginTop: 20
  },
  GridViewBlockStyle: {
    borderRadius: 10,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 90,
    width: 120,
    margin: 5,
    backgroundColor: '#999999'

  },
  GridViewBlockStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    margin: 5,
    // backgroundColor: 'red'
  },
  GridViewInsideTextItemStyle: {

    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  screenContainer: {
    flex: 1,
    alignSelf:"flex-end",
    // padding: 5,
    marginTop:25
  }
});

export default Home;