import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from "react-native";
const data = [
    { key: 'SEE' ,title:'wel 1videos'},
    { key: 'VEE' ,title:'wel 2videos'},
    { key: 'LEE' ,title:'wel 3videos'},
    { key: 'FEE' ,title:'wel 4videos'},
    
  
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
      <View style={styles.ListedView}>
        <FlatList

          data={arraydata}

          renderItem={({ item }) => 
        <>  
          <View style={styles.GridedViewBlockStyle}>
            <Text style={styles.GridedViewInsideTextItemStyle}> {item.key}</Text>
          </View>
        <View>
            <Text style={styles.GridedViewInsideTextItemStyle}> {item.title}</Text>

        </View>
</>
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
        width: "80%",
        alignSelf: 'center',
        marginTop:20},
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
                width: '100%',
                height: 50,
                backgroundColor: '#fbc112',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center'
              },
              GridedViewBlockStyle: {
               
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'center',
                    height: 90,
                    width:120,
                    margin: 5,
                    backgroundColor: '#999999'
                
                  },
                  
                  GridedViewInsideTextItemStyle: {
                
                    color: '#fff',
                    padding: 10,
                    fontSize: 18,
                    justifyContent: 'center',
                
                  },
})
export default Record_Video;

