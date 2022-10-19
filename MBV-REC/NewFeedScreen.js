import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
const screen = Dimensions.get('window');
export default class NewFeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",               // to store text input
            textMessage: false,     // text input message flag
            loading: false,         // manage loader
            image: "",              // store image
            video: "",              // store video
        }
    }
    /**
     * Select image and store in state
     */
    selectImage = async () => {
        ImagePicker.launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                console.log(response);
                this.setState({ image: response });
            },
        )
    }
    /**
     * Select video & store in state
     */
    selectVideo = async () => {
        ImagePicker.launchImageLibrary({ mediaType: 'video', includeBase64: true }, (response) => {
            console.log(response);
            this.setState({ video: response });
        })
    }
    /**
     * send feed details to server
     */
    createNewFeed = async () => {
        this.setState({ loading: true })
        const { text, image, video } = this.state;
        console.log("video=================",video)
        let errorFlag = false;
        if (text) {
            errorFlag = true;
            this.setState({ textMessage: false });
        } else {
            errorFlag = false;
            this.setState({ textMessage: true })
        }
        if (errorFlag) {
            let formData = new FormData();
            if (video) {
                formData.append("video", video);
            }
            if (image) {
                formData.append("image", image);
            }
            
            formData.append("text", text); 
            formData.append("user_id", "dfhgdf");
            var base_url = "http://54.174.116.79:8000/auth/upload_video/";
            fetch(base_url , {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData
            })
                .then(response => {
                    return response.json();
                })
                .then(async (res) => {
                    this.setState({ loading: false });
                    console.log("response===============================",res)
                    if(res.error == 0){
                        this.props.navigation.navigate("Feed");
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ loading: false });
                });
        } else {
            this.setState({ loading: false });
        }
    }
    render() {
        return (
            <View style={styles.SplashLayout}>
                <ScrollView>
                    <View style={styles.inputLayout}>
                        <TextInput
                            label="Text"
                            value={this.state.text}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={(text) => this.setState({ text })}
                        />
                        {
                            this.state.textMessage && <Text style={styles.textDanger}>{"Text is required"}</Text>
                        }
                    </View>
                    <View style={styles.MediaLayout}>
                        <View style={[styles.Media, { marginRight: 10, backgroundColor: this.state.image ? "#6200ee" : "#ffffff" }]}>
                            <TouchableOpacity onPress={() => this.selectImage()} ><Text>Image</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.Media, { marginLeft: 10, backgroundColor: this.state.video ? "#6200ee" : "#ffffff" }]}>
                            <TouchableOpacity onPress={() => this.selectVideo()} ><Text>VIDEO</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.inputLayout}>
                        <Button icon="plus" mode="contained" onPress={() => this.createNewFeed()}>
                            Feed
                        </Button>
                    </View>
                </ScrollView>
                {/* loader */}
                {
                    this.state.loading && <Text>Loading</Text>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    SplashLayout: {
        flex: 1,
    },
    inputLayout: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    textDanger: {
        color: "#dc3545"
    },
    MediaLayout: {
        paddingHorizontal: 20,
        width: screen.width - 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    Media: {
        width: (screen.width - 60) / 2,
        height: (screen.width - 60) / 2,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
});