import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CardDetail = (props) => {
  return (
    <View style={styles.liststyle}>
        <Text >{props.text}</Text>
       <Image style={styles.ImageRes} source={require("../assets/pexels-ozan-i̇brahim-vergili-15128413.jpg")}/>
    </View>
  )
}

export default CardDetail

const styles = StyleSheet.create({
    liststyle:{
        width:220,
        borderWidth:1,
        borderColor:"black",
        justifyContent:'center',
        alignItems:'center',
        margin:10,
    },
    ImageRes:{
        width:220,
        height:100,
    }
})