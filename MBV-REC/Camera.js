import React from 'react';
import {StyleSheet,View,Image,TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { RNFS } from 'react-native-fs';
import REC_BAR from '../MBV-REC/REC_BAR';

export default function Camera(){
const[{cameraRef},{takePicture}] =useCamera(null);

const RecordVideo = async() => {

if(cameraRef){
try{
  const options = {maxDuration:10,quality:RNCamera.Constants.VideoQuality["480p"]}
  console.log('options......................', options)
  console.log('cameraRef', cameraRef)

  const videoRecordPromise =  cameraRef.recordAsync(options)
  console.log('videoRecordPromise', videoRecordPromise)

  if(videoRecordPromise){
    const data = await videoRecordPromise;
    const source = data.uri
    console.log('----------------',source )
  }
}catch(error){
  console.log(error)
}

}


}
const stopVideo= async()=>{
if(cameraRef){
  cameraRef.stopRecording()
}
}
const captureHandle = ()=>{

  console.log("clicked here")

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
        
        <View style={styles.tabView}>
        <View style={styles.ImageView}>
        <Image
          style={styles.Logo1}

          source={require('../Assets/Layer.png')}
        />
      <TouchableOpacity onPress={()=>{RecordVideo()}}>
        
           <Image
          style={styles.Logo2}
          source={require('../Assets/Layer1.png')}
        />
        </TouchableOpacity>
        <Image
          style={styles.Logo3}

          source={require('../Assets/Layer2.png')}
        />
        </View>
        
      </View>
 
 </RNCamera>
 

  </View>

)




}
const styles = StyleSheet.create({
  body : {
    flex: 1,},
    Logo1: {
      width: 25,
      height: 30},

  Logo2: {
          width: 70,
          height: 70},
  Logo3: {
            width: 25,
            height: 26},  
          
  ImageView: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between',
      alignSelf: 'center',
      alignItems: 'center'},

  tabView: {
       width: '100%',
       height: 100,
       backgroundColor: '#212e62',
       alignItems: 'center',
       justifyContent: 'center',
       alignSelf:"baseline"
            }
 



})
    