/* eslint-disable */
import React, { useState } from "react";
import { Text, StyleSheet, View,Image,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

const REC_bar = ()=>{
const navigation = useNavigation();

return(

<View style={styles.tabView}>
        <View style={styles.ImageView}>
        <Image
          style={styles.Logo1}

          source={require('../Assets/Layer.png')}
        />
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        
           <Image
          style={styles.Logo2}
          source={require('../Assets/Layer1.png')}
        />
        </TouchableOpacity>
        <Image
          style={styles.Logo1}

          source={require('../Assets/Layer2.png')}
        />
        </View>
      </View>
)


};
const styles = StyleSheet.create({
    Logo1: {
        width: 22,
        height: 22},

        Logo2: {
            width: 70,
            height: 70},
            
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
         marginTop: 120,
         alignItems: 'center',
         justifyContent: 'center'
              }
})
export default REC_bar;