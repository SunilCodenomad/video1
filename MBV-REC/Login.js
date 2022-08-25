/* eslint-disable */
import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, Image, Text,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      
      <ImageBackground  source={require('../Assets/Background.png')} resizeMode="cover" style={styles.image1}>
      <View style={styles.container1}>
        <View style={{ alignSelf: 'center', marginTop: 50, marginBottom: 40 }}>
          <Image
            source={require('../Assets/Layer.png')}
            style={{ width: 65, height: 80 }}
          /> 
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('LoginShow')} style={[styles.buttonGPlusStyle, { backgroundColor: '#1d4475', position: 'relative' }]} activeOpacity={0.5} >
          <Image
            source={require('../Assets/login.png')}
            style={{ width: 20, height: 20, position: "absolute", left: 20 }}
          />
          <Text style={[styles.buttonTextStyle, { display: 'flex', marginLeft: 'auto', marginRight: 'auto' }]}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Register')} style={[styles.buttonGPlusStyle, { backgroundColor: '#fbc112' }]}>
          <Image
            source={require('../Assets/entrance.png')}
            style={{ width: 20, height: 20, position: "absolute", left: 20 }}
          />
          <Text style={[styles.buttonTextStyle, { display: 'flex', marginLeft: 'auto', marginRight: 'auto' }]}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity style={[styles.buttonGPlusStyle, { backgroundColor: '#6578b9' }]}>
            <Image
              source={require('../Assets/facebook.png')}
              style={{ width: 30, height: 30, position: "absolute", left: 20 }}
            />
            <Text style={[styles.buttonTextStyle, { display: 'flex', marginLeft: 'auto', marginRight: 'auto' }]}>Login Using FaceBook Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonGPlusStyle, { backgroundColor: '#b23d19' }]}>
            <Image
              source={require('../Assets/google.png')}
              style={{ width: 30, height: 30, position: "absolute", left: 20 }}
            />
            <Text style={[styles.buttonTextStyle, { display: 'flex', marginLeft: 'auto', marginRight: 'auto' }]}>Login Using Google Account</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          <Text style={{
            color: "#fbc112"
          }}>MY<Text style={{ color: "white", }}>BEST</Text>VIDEO</Text>
        </View>
        </View>
        </ImageBackground>
    
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonGPlusStyle: {
    flexDirection: 'row',
    // justifyContent:"center",
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    // borderWidth: 0.5,
    height: 40,
    borderRadius: 5,
    height: 50,
    borderRadius: 25,
    margin: 10,
    paddingLeft: 15
  },
  image1:{
    flex: 1,width:"100%",
    justifyContent: "center",alignItems:"center"
  },
  container1:{
    width:"100%", flex: 1,
  },
  
  buttonImageIconStyle: {
    padding: 10,
    margin: 1,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  textStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    // marginLeft: 40,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex:1,width:"100%",
  },
});
export default Login;