/* eslint-disable */
import React, { useState } from "react";
import { Text, StyleSheet, View,Image,TouchableOpacity} from "react-native";
// import { useNavigation } from '@react-navigation/native';

const REC_BAR = (props)=>{
// const navigation = useNavigation();
console.log(props)

return(

<View style={styles.tabView}>
        <View style={styles.ImageView}>
        <Image
          style={styles.Logo1}

          source={require('../Assets/Layer.png')}
        />
      <TouchableOpacity onPress={() => props.data}>
        
           <Image
          style={styles.Logo2}
          source={require('../Assets/play.png')}
        />
        </TouchableOpacity>
        <Image
          style={styles.Logo3}

          source={require('../Assets/Layer2.png')}
        />
        </View>
        
      </View>

)


};
const styles = StyleSheet.create({
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
export default REC_BAR;