/* eslint-disable */

import { StatusBar } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,ImageBackground
} from "react-native";
 
export default function LoginShow() {
const navigation = useNavigation();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const userlogin = async ()=>{
  console.log('ffffffffffff>>>>>>>>>>>>>>>>>>>>')
  if(!email || !password ){
         alert("please add all the field")
         return 
  }
  try{
    const result =  await auth().signInWithEmailAndPassword(email,password)
    console.log("login ok",result)
    if(email || password){
      navigation.navigate('Home')
     }
    
  }catch(error){
      alert(error)
  }
 

}
 
  return (
    <View style={styles.container}>
        <ImageBackground  source={require('../Assets/Background.png')} resizeMode="cover" style={styles.image1}>
        <View style={styles.container1}>
      <Image style={styles.image} source={require("../Assets/Layer.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={() => {userlogin()}}
      style={styles.loginBtn}>
        <Text onPress={() =>{userlogin()}}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
     flex: 1,justifyContent: "center",alignItems:"center"
  },
  container1:{
    width:"100%", flex: 1,alignItems:"center",justifyContent: "center"
  },
  image: {
    marginBottom: 40,
  },
  image1:{
    flex: 1,width:"100%",
    justifyContent: "center",alignItems:"center"
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"white"
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#6578b9",
  },
});