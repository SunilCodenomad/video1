import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';



class Camera extends React.Component {
  constructor(props) {
    super(props);
  
}

  state = {

    recording: false,
    video_path: null,
    processing: false,
    Data:null,
    isTrue: true,
  }
//   ComponentDidUpdate() {
    
//     this.setState({ recording: false,
//       video_path: null,
//       processing: false,
//       Data:null,
//       isTrue: true, });
// }
 
  render() {
    const { recording, video_path, processing, isTrue,} = this.state;
    
    if(isTrue) {
      var button = (
        <View style={styles.tabView}>
          <View style={styles.ImageView}>
          <Image
                style={styles.Logo1}
                source={require('../Assets/Layer.png')} />
            
            <TouchableOpacity
              onPress={this.startRecording.bind(this)}
              style={styles.button}>
              <Image
              style={styles.Logo2}
              source={require('../Assets/play.png')} />
            </TouchableOpacity>
            <Image
              style={styles.Logo3}
              source={require('../Assets/Layer2.png')} />
          </View>
        </View>
      );
    }

    if (recording) {
      button = (
        <View style={styles.tabView}>
          <View style={styles.ImageView}>
            <Image
              style={styles.Logo1}

              source={require('../Assets/Layer.png')}
            />
            <TouchableOpacity
              onPress={this.stopRecording.bind(this)}
              style={styles.button}
              
            >
              <Image
                style={styles.Logo2}
                source={require('../Assets/stop.png')}

              />
            </TouchableOpacity>
            <Image
              style={styles.Logo3}

              source={require('../Assets/Layer2.png')}
            />
          </View>
        </View>
      );
    }



    return (
      <View style={styles.container}>
        {!processing ?
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            android
          />
          :
          null
        }
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "flex-end" }}
        >
          {button}
        </View>

        {video_path ?

          <View
            style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end",width:"100%",}}>
            <Video source={{ uri:video_path }}   // Can be a URL or a local file.
              ref={(ref) => {
                this.player = ref
              }}  
              fullscreen={true}
              resizeMode="cover"                                    // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onError={this.videoError}               // Callback when video cannot be loaded
              style={styles.backgroundVideo} />
            <View style={styles.tabView}>
              <View style={styles.ImageView}>
                <Image
                  style={styles.Logo1}

                  source={require('../Assets/Layer.png')}
                />

                <TouchableOpacity style={styles.button}
                  onPress={() => this.saveVideo()}>
                  <Image
                  style={styles.Logo3}

                  source={require('../Assets/save.png')}
                />
                </TouchableOpacity>
                
                <Image
                    style={styles.Logo2}
                    source={require('../Assets/play.png')}

                  />
              </View>
            </View>
          </View>
          : null
        }

      </View>
    );
  }
  async saveVideo(){  
    //this.setState({processing:false,recording:true,});
    
    try{
    const timestamp = Date.now();
    
    const filePath = this.state.Data
    console.log(filePath)
    const newFilePath = RNFS.ExternalDirectoryPath + '/'+timestamp+'.mp4';
   
    RNFS.moveFile(filePath,newFilePath)
  .then(()=>{
    console.log('image moved',filePath,'---to---',newFilePath)
    this.props.navigation.navigate('Home')
  })
    .catch(error=>{console.log(error);})
    
    }catch(error){console.log(error)}
    
  }

  async startRecording() {
    this.setState({ recording: true });
    const options = { quality: RNCamera.Constants.VideoQuality["480p"]};
    console.log(options,'>>>>>>>>>>>>>>>>>>>>>>>>optionnnnnnnnn')
    console.log(this.camera,'**************>>>>>>>>>camera')

    const { uri, codec = 'mp4' } = await this.camera.recordAsync(options);
    console.log(uri,'>>>>>>>>>>>>>>>>>>>>>>>>uri')
    console.log(codec,'>>>>>>>>>>>>>>>>>>>>>>>>codec')
    
    if(uri)
      console.log(uri,'>>>>>>>>>>>>>>>>>>>>>>>>uriiiiiiiiiiii')
      
      this.setState({ recording: false, video_path:uri, processing:true ,Data:uri});
}

stopRecording() {
  this.camera.stopRecording();
  this.setState({ isTrue: false })
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',width:"100%"
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  backgroundVideo: {
    //flex:1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*2,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Logo1: {
    width: 25,
    height: 30
  },

  Logo2: {
    width: 30,
    height: 30
  },
  Logo3: {
    width: 30,
    height: 30
  },
  ImageView: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center'
  },
  tabView: {
    width: '100%',
    height: 100,
    backgroundColor: '#212e62',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "baseline"
  }
});

export default Camera;