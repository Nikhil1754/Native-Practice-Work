import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NetflixCard = () => {
    console.log("netflix card");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>NetflixCard</Text>
       <View style={styles.poster}>
        <Image style={styles.img} source={{uri:"https://wallpaperaccess.com/full/781822.jpg"}}/>
        <Text style={styles.title}>Breaking Bad</Text>
        <Text style={styles.description}>Breaking Bad is an American crime drama television series created and produced by Vince Gilligan.</Text>
        <View>
        <Button title="Watch Now" onPress={()=>{
            Linking.openURL("https://www.netflix.com/in/");
        }}/>
      </View>
       </View>
      
    </View>
  )
}

export default NetflixCard;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        fontSize:40,
        fontWeight:'bold',
    },
    poster:{
        width:300,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderWidth:1,
        borderColor:'black',
    },
    img:{
        width:280,
        height:140,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
    }


    
})