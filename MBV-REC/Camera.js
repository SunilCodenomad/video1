import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';

// const dirPicutures = `${dirHome}/Pictures`;

class Camera extends React.Component {

  state = {

    recording: false,
    video_path: null,
    processing: false,
  }

  render() {
    const { recording, video_path, processing } = this.state;
    console.log("....................", video_path)
    let button = (
      <View style={styles.tabView}>
        <View style={styles.ImageView}>
          <Image
            style={styles.Logo2}
            source={require('../Assets/Layer1.png')} />
          <TouchableOpacity
            onPress={this.startRecording.bind(this)}
            style={styles.button}>
            <Image
              style={styles.Logo1}
              source={require('../Assets/Layer.png')} />
          </TouchableOpacity>
          <Image
            style={styles.Logo3}
            source={require('../Assets/Layer2.png')} />
        </View>
      </View>
    );

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
                source={require('../Assets/Layer1.png')}

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
            style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end" }}>
            <Video source={{ uri: video_path }}   // Can be a URL or a local file.
              ref={(ref) => {
                this.player = ref
              }}                                      // Store reference
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

                  source={require('../Assets/Layer2.png')}
                />
                </TouchableOpacity>
                
                <Image
                    style={styles.Logo2}
                    source={require('../Assets/Layer1.png')}

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
    console.log('111111111111111111111',data.uri)
    try{
  const data = await resumeVideo() 
    console.log('111111111111111111111',data.uri)
    const filePath = data.uri;
    const newFilePath = RNFS.ExternalDirectoryPath;
    RNFS.moveFile(filePath,newFilePath)
  .then(()=>{console.log('image moved',filePath,'---to---',newFilePath)})
    .catch(error=>{console.log(error);})
    
    }catch(error){console.log(error)}
    
  }

  async startRecording() {
    console.log("444444444444444444444444444")
    this.setState({ recording: true });
    const options = { quality: RNCamera.Constants.VideoQuality["480p"] };
    // default to mp4 for android as codec is not set

    console.log(this.camera,"fgfgfgf")
    const { uri, codec = 'mp4' } = await this.camera.recordAsync(options);
    console.log(uri)
    console.log(codec)
    if (uri)
      console.log(uri)
      const filePath = uri;
    const newFilePath = RNFS.ExternalDirectoryPath;
    console.log(newFilePath,'>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    RNFS.moveFile(filePath,newFilePath)
    console.log(RNFS.moveFile(filePath,newFilePath),"hellooooo")
    this.setState({ video_path: RNFS.moveFile(filePath,newFilePath), processing: false, })
    this.setState({ recording: false, video_path: uri, processing: true });
  }

  stopRecording() {
    console.log('5555555555555555555555555555')
    this.camera.stopRecording();

  }

  resumeVideo() {
    console.log('6666666666666666666666666666666')
    const filePath = data.uri;
    const newFilePath = RNFS.ExternalDirectoryPath;
    RNFS.moveFile(filePath,newFilePath)
    this.setState({ video_path: RNFS.moveFile(filePath,newFilePath), processing: false, })

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    flex: 0,
    // backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  backgroundVideo: {
    position: 'absolute',
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
    width: 25,
    height: 26
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