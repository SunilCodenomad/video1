import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from "react-native";
const data = [
    { key: 'SEE' ,title:'wel 1videos'},
    { key: 'VEE' ,title:'wel 2videos'},
    { key: 'LEE' ,title:'wel 3videos'},
   
  
  ]
const Record_Video =()=>{
  const [arraydata, setarraydata] = useState(data);

    return(
<View style={styles.container}>
      <View style={styles.TextsView}>
        <Text style={styles.Text}>Mybest.video</Text>
      </View>
      <View style={styles.TableView}>
        <View style={styles.RowView}>
          <Text style={{color:'black',fontWeight: "bold"}}>RECORD VIDEO</Text>
          
        </View>
      </View>
      <View>
        <FlatList

          data={arraydata}

          renderItem={({ item }) => 
          <View  style={styles.ListedView}>
          <View style={styles.GridedViewBlockStyle}>
            <Text style={styles.GridedViewInsideTextItemStyle}> {item.key}</Text>
          </View>
        <View style={styles.GridedViewBlockStyle10}>
            <Text style={styles.GridedViewInsideTextItemStyle}> {item.title}</Text>

        </View>
        </View>
          }

          numColumns={1}

        />
      </View>
    </View>

  





    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1c3567",

    },
    ListedView: {
      display:"flex",
      flexDirection:'row',
        width: "95%",
        alignSelf: 'center',
        marginTop:20
      },

    RowView: {
        
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center'
      },
      TextsView: {
        alignSelf: 'center',
        width: "90%",
        alignItems: 'center',
        marginTop: 50,},
      Text: {
            fontFamily: "Cochin",
            color: 'white',},
      TableView: {
                width: '95%',
                height: 50,
                backgroundColor: '#fbc112',
                marginTop: 20,
                
                marginLeft:10,
                alignItems: 'center',
                justifyContent: 'center'
              },
        GridedViewBlockStyle: {
               
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 90,
                    width:'30%',
                    margin: 5,
                    backgroundColor: '#999999'
                
                  },
         GridedViewBlockStyle10: {
                    
                    width:'55%',
                   
                  },
         GridedViewInsideTextItemStyle: {
                
                    color: '#fff',
                    padding: 10,
                    fontSize: 18,
                    justifyContent: 'center',
                
                  },
})
export default Record_Video;
