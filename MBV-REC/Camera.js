import React from 'react';
import {StyleSheet, View,Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { RNFS } from 'react-native-fs';

export default function Camera(){
const[{cameraRef},{takePicture}] =useCamera(null);

const captureHandle = async()=>{

  try{
const data = await takePicture()
  console.log(data.uri)
  const filePath = data.uri;
  const newFilePath = RNFS.ExternalDirectoryPath;
  RNFS.moveFile(filePath,newFilePath)
.then(()=>{console.log('image moved',filePath,'---to---',newFilePath)})
  .catch(error=>{console.log(error);})
  
  }catch(error){console.log(error)}
  
}
return( 
  <View style={styles.body}>
    <RNCamera
      ref = {cameraRef} 
      type = {RNCamera.Constants.Type.back}
      style = {StyleSheet.preview}
      >
        <Button
        title='capture'
        color='#1eb900'
        onPressFunction={()=>captureHandle()}
        />
 
 
 </RNCamera>
  </View>
)




}
const styles = StyleSheet.create({
  body : {
    flex :1
  },
  preview : {
flex:1,
alignItems:"center",
justifyContent:"flex-end "

  }



})
    