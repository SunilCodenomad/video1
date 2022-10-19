import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions, Modal, Button,TextInput } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import RNFS, { uploadFiles } from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';




class Camera extends React.Component {
  constructor(props) {
    super(props);

  }

  state = {

    recording: false,
    video_path: null,
    processing: false,
    Data: null,
    isTrue: true,
    startValue: "",
    endValue: "",
    show:false,
    inputTime:"",
    outputTime:"",
  }




  render() {
    const { recording, video_path, processing, isTrue, startValue, endValue,inputTime,outputTime } = this.state;

    if (isTrue) {
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
            style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end", width: "100%", }}>
            <Video source={{ uri: video_path }}   // Can be a URL or a local file.
              ref={(ref) => {
                this.player = ref
              }}
              fullscreen={true}
              resizeMode="cover"                                    // Store reference
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onError={this.videoError}               // Callback when video cannot be loaded
              style={styles.backgroundVideo} />
            {/* {/* <View style={styles.tabView}>
              <View style={styles.ImageView}>
                <Image
                  style={styles.Logo1}

                  source={require('../Assets/Layer.png')}
                />

                <TouchableOpacity style={styles.button}>
                 
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
            </View> */}
          </View> 
          : null
        }
        <Modal visible={this.state.show} transparent={true}>
          <View style={{flex:1,alignSelf:'center'}}>
            <View style={{margin:100,borderRadius:8,backgroundColor:'#ffffff',width:250,height:200}}>
              <Text style={{alignSelf:'center'}}>{this.state.startValue+" " +"to"+" "+this.state.endValue}</Text>
              <TextInput
              style={{borderColor: "gray",borderWidth: 0.5,borderRadius:12}}
              placeholder="startingTime"
              placeholderTextColor="#003f5c"
              onChangeText={(e) => this.setState({inputTime:e})}
            />
            <TextInput
              style={{borderColor: "gray",borderWidth: 0.5,borderRadius:12}}
              placeholder="endingTime"
              placeholderTextColor="#003f5c"
              onChangeText={(e) => this.setState({outputTime:e})}
            />
            <View style={{flexDirection:'row', justifyContent: 'space-evenly', margin:2,width:'100%'}}>
              <Button title="close" onPress={()=>{this.setState({show:false})}}/>
              <Button title="submit" onPress={() => this.saveVideo()}/>
            </View> 
            </View>
            
          </View>
        </Modal>
      </View>
    );
  }
  //    getFileBlob = function (url, cb) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("GET", url);
  //     xhr.responseType = "blob";
  //     xhr.addEventListener('load', function() {
  //         cb(xhr.response);
  //     });
  //     xhr.send();
  // };

  //  blobToFile = function (blob, name) {
  //     blob.lastModifiedDate = new Date();
  //     blob.name = name;
  //     return blob;
  // };

  //  getFileObject = function(filePathOrUrl, cb) {
  //    this.getFileBlob(filePathOrUrl, function (blob) {
  //       cb(this.blobToFile(blob, 'test.mp4'));
  //    });
  // };



  async saveVideo() {




    try {


      const final = this.state.startValue + " to" + this.state.endValue;
      
      console.log("finaltime>>>>>>>>>>>>>>>>>>>>>>>>>>>>", final)


      const timestamp = Date.now();
      const filePath = this.state.Data
      console.log("?????????????????///////", filePath)

      var newFilePath = RNFS.DocumentDirectoryPath + '/' + timestamp + '.mp4';

      this.callApi(newFilePath)



      RNFS.moveFile(filePath, newFilePath)

        .then(() => {
          console.log('video moved', filePath, '---to---', newFilePath)


          this.callApi(newFilePath)


          this.props.navigation.navigate('Home')
        })
        .catch(error => { alert(error); })

    } catch (error) { alert(error) }

  }

  async callApi(path) {
    // var files = [
    //   {
    //     name: "video",
    //     filename: "video.mp4",
    //     filepath:path ,
    //     filetype: "video/mp4",
    //   },
    // ];
    console.log(path, "++++++++++++++++++++++path")

    try {
      const data = new FormData();
      data.append('video', {
        name: "video.mp4",
        type: "video/mp4",
        uri: "file://" + path,
      });
      data.append('startTime',this.state.inputTime);
      data.append('endTime',this.state.outputTime);
      var response = await axios.post('http://54.174.116.79:8000/auth/upload_video/', data, {

        headers: {

          'Content-type': 'multipart/form-data',
        }

      })
      console.log(".........................", response)
      if (response.status === 200) { alert(` You have created: ${JSON.stringify(response.data)}`); }
      else {
        throw new Error("An error has occurred");
      }
    }
    catch (e) {
      console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrr", e)
    }

    // console.log(res,"=====================================RESSSSSSSSSSS")
    //console.log("filesssssssssssssssssss",files[0].filepath)

    // uploadFiles({
    //   toUrl: 'http://54.89.237.214:8000/auth/upload_video/',
    //   files: files,
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   begin: () => {},

    //   progress: ({ totalBytesSent, totalBytesExpectedToSend }) => {
    //     console.log(totalBytesSent)
    //   },

    // });
  }


  async startRecording() {
    const startTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    this.setState({ startValue: startTime })

    this.setState({ recording: true });
    const options = { quality: RNCamera.Constants.VideoQuality["480p"], maxDuration: 10 };
    //maxDuration: 10  =(for recording 10sec video)
    console.log(options, '>>>>>>>>>>>>>>>>>>>>>>>>optionnnnnnnnn')
    console.log(this.camera, '*********************camera')
    //awaitAsyncStorage.removeItem('check');
    const { uri, codec = 'mp4' } = await this.camera.recordAsync({ options });
    console.log(uri, '>>>>>>>>>>>>>>>>>>>>>>>>uri')
    console.log(codec, '>>>>>>>>>>>>>>>>>>>>>>>>codec')

    if (uri)
      console.log(uri, '>>>>>>>>>>>>>>>>>>>>>>>>uriiiiiiiiiiii')

    this.setState({ recording: false, video_path: uri, processing: true, Data: uri, isTrue: false });

  }

  stopRecording() {
    const endTime = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    this.setState({ endValue: endTime })
    this.camera.stopRecording();
    this.setState({ isTrue: false })
    this.setState({ show:true })

  }








}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black', width: "100%"
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
    height: Dimensions.get('window').height * 2,
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