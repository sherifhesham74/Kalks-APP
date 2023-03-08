import React, { useEffect, useState } from 'react'
import { Button, Card } from "react-native-paper";
import { useLinkTo, useRoute } from '@react-navigation/native';
import { SafeAreaView, Text, View, StyleSheet, Image,TouchableOpacity, ScrollView } from "react-native";
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons'; 
import { Linking } from 'react-native';


export default function Accessories() {
  const route = useRoute();
  let baseUrl = `http://${myIP}:5000/accessories`;
  let [maintains, setmaintains] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log(response.data);
        setmaintains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView  style={styles.scrollView}>
      <Text  style={styles.heading}>Accessories </Text>

  {
    maintains.map(e=>
      <Card key={e._id} style={styles.card}>
      <Card.Cover source={{ uri :`http://${myIP}:5000/${e?.image}`}} />
    <Card.Content>
      <Text variant="titleLarge" style={styles.h}>{e.name}</Text>
    </Card.Content>
    <Card.Actions >
    {/* <Text style={styles.btna} onPress={() => Linking.openURL("https://goo.gl/maps/u349UAKMrYNa74W86")}  ><FontAwesome  size={15} color="orange"   /> Location</Text>
     */}
    <Button      style={styles.button}
                onPress={() => Linking.openURL("https://goo.gl/maps/12qee539Xhqzg3th9")} >

                <Text>Location</Text>
              </Button>    
            

    </Card.Actions>
  </Card>
  )
  }


  
 

  
  </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin:5,
    padding:20,
  },
  h:{
    // fontSize:18,
    fontWeight:'bold',
    // textAlign:'center',

  },
  btn:{
    // textAlign:'center',
    // backgroundColor: "white",
    // color: "orange",
    // borderColor: "orange",
    // borderWidth: 1,
    // borderRadius:15,
    // padding: 5,
    // marginLeft:135,
    // margin:2,
    // width: 100,
    // textAlign: "center",
    // fontSize:14,
   },
  heading:{
    color:'#333' , 
    fontSize:30 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    margin:10,
  },
  card: {
    margin:5,
  },
  // btna:{
    
  //   textAlign:'center',
  //   backgroundColor: "white",
  //   padding: 5,
  //   paddingLeft:15,

  //   width: 150,
  //   borderRadius:10,
  //   borderWidth:1,
  //   borderColor: "orange",
  //   color: "orange",
  //   textAlign: "center",
  //   fontSize:14,

  //  },
   button:{
    position:"relative",
    right: 77,
    width: 150,
    borderWidth: 1.5,
    borderColor: "orange",
    
  },
});

























Accessories