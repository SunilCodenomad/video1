import React from 'react';
import {StyleSheet,View,} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { RNFS } from 'react-native-fs';
import REC_BAR from '../MBV-REC/REC_BAR';

export default function Camera(){
const[{cameraRef},{takePicture}] =useCamera(null);



const captureHandle = ()=>{

  try{
const data = takePicture()
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
    <RNCamera style = {{flex:1, width: '100%',justifyContent: 'flex-end'
      
}}
      ref = {cameraRef} 
      type = {RNCamera.Constants.Type.back}
      
      >
        
<REC_BAR data = {captureHandle}/>
 
 </RNCamera>
 

  </View>

)




}
const styles = StyleSheet.create({
  body : {
    flex: 1,}
 



})
    