import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

function C1() {
  return (
    <View>
        <Text style={styles.para}>Welcome to Nikhil Kashyap Devlopment</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    para:{
        color:'blue',
        fontWeight:'bold',
        fontSize:40,
    }

})

export default C1;