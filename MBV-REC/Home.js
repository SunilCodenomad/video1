/* eslint-disable */

import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity,ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';

const data = [
  { key: 'o' },
  { key: '0' },
  { key: '*' },
  { key: '@' },
  

]
const Home = () => {
const navigation = useNavigation();
const [arraydata, setarraydata] = useState(data);
  return (
    <ScrollView style={styles.container1}>
    <View style={styles.container}>
      <View style={styles.TextView}>
        <Text style={styles.text}>Mybest.video</Text>
      </View>
      <View style={styles.tabView}>
        <View style={styles.buttonView}>
        <TouchableOpacity
        onPress={() => navigation.navigate('BAR')}>
          <Text style={{color:'black',fontWeight: "bold"}}>REC MBV</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('video')}>
          <Text style={{color:'black',fontWeight: "bold"}}>PLAY MBV</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.IconView}>
        <Image
          style={styles.tinyLogo1}
          source={require('../Assets/Layer1.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={require('../Assets/Layer.png')}
        />
      </View>
      
      <View style={styles.horizontalRow} />
      {/* <View style={styles.TextView}>
        <Text style={styles.text}>THE BEST VIDEO</Text>
      </View> */}
      <View style={styles.ListView}>
        <FlatList

          data={arraydata}

          renderItem={({ item }) => 
          <View style={styles.GridViewBlockStyle1}>
          <View style={styles.GridViewBlockStyle}>

            <Text style={styles.GridViewInsideTextItemStyle}> {item.key} </Text>

          </View>
          <Text style={{color:'white'}}>DEFENCE 10 TIMES IN A SINGLE RELLAY</Text>
          <Text style={{color:'white',fontSize: 10}}>BEACH VOLLEY</Text>
          
          </View>
          
          }

          numColumns={2}

        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c3567"
  },
  container1: {
    flex: 1,
    backgroundColor: "#1c3567"
  },
  tinyLogo1: {
    width: 60,
    height: 60,
  },
  tinyLogo: {
    width: 60,
    height: 72,
  },
  buttonView: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center'
  },
  TextView: {
    alignSelf: 'center',
    width: "90%",
    alignItems: 'center',
    marginTop: 50
  },
  text: {
    fontFamily: "Cochin",
    color: 'white'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  tabView: {
    width: '100%',
    height: 50,
    backgroundColor: '#fbc112',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  IconView: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  horizontalRow: {
    width: '100%',
    height: 3,
    backgroundColor: '#fbc112'
  },
  ListView: {
    width: "80%",
    alignSelf: 'center',
    marginTop:20
  },
  GridViewBlockStyle: {
borderRadius:10,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 90,
    width:120,
    margin: 5,
    backgroundColor: '#999999'

  },
  GridViewBlockStyle1:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: 130,
    margin: 5,
    // backgroundColor: 'red'
  },
  GridViewInsideTextItemStyle: {

    color: '#fff',
    padding: 10,
    fontSize: 18,
    justifyContent: 'center',

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10}
});

export default Home;