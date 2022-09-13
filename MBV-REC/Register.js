/* eslint-disable */

import { StatusBar } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,ImageBackground
} from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";


export default function Register() { 
const navigation = useNavigation();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmpassword, setconfirmPassword] = useState("");
 
const userSignup = async ()=>{
  console.log('hello>>>>>>>>>>>>>>>>>>>>')
  if(!email || !password ){
         alert("please add all the field")
         return 
  }
  try{
    const result =  await auth().createUserWithEmailAndPassword(email,password)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>",result)
    firestore().collection('users').doc(result.user.uid).set({
      
          email:email,
          password:password,
          confirmpassword:confirmpassword, }) 
         if(email || password){
          navigation.navigate('LoginShow')
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="confirmpassword."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmpassword) => setconfirmPassword(confirmpassword)}
        />
      </View>
 
      
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{userSignup()}}>
        <Text style={styles.loginText} onPress={()=>{userSignup()}}>Register</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
     flex: 1,justifyContent: "center",alignItems:"center",
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
    backgroundColor: "#fbc112",
  },
});