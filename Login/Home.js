import { StyleSheet, Text, View,Button  } from 'react-native'
import React from 'react'

const Home = ({route,navigation}) => {
    const {myName}=route.params;
  return (
    <View style={styles.container}>
      <Text styel={styles.txt}>Welcome {myName}</Text>
      <Button title='GO BACK' onPress={()=> navigation.goBack()}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    txt:{
        fontSize:70,
    }
})