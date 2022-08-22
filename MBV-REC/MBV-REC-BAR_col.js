import React, { useState } from "react";
import { Text, StyleSheet, View,Image} from "react-native";
const REC_BAR_COL = ()=>{
return(

<View style={styles.tabView}>
        <View style={styles.ImageView}>
        <Image
          style={styles.Logo1}

          source={require('../Assets/Layer.png')}
        />
           <Image
          style={styles.Logo2}
          source={require('../Assets/Layer1.png')}
        />
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
        height: 22,
        marginBottom:70
    },

    Logo2: {
            width: 70,
            height: 70,
            marginBottom:70
        
        },
    Logo3: {
                width: 22,
                height: 22,
            // marginTop:30,
            },    
            
    ImageView: {
        flexDirection:"column",
        width: '60%',
        justifyContent:"space-around",
        // alignSelf: 'center',
        alignItems: 'center'},

tabView: {
    
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center',
    height: '100%',
    width: 100,
    backgroundColor: '#212e62',
    alignItems: 'center',

  }
})
export default REC_BAR_COL;
