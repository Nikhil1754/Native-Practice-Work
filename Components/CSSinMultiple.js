import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CSSinMultiple = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.childern1,styles.commonStyle]}>CSSinMultiple</Text>
      <Text style={[styles.childern2,styles.commonStyle]}>CSSinMultiple</Text>
      <Text style={[styles.childern3,styles.commonStyle]}>CSSinMultiple</Text>
    </View>
  )
}

export default CSSinMultiple

const styles = StyleSheet.create({
    parent:{
        width:"95%",
        height:400,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:"black",
    },
    childern1:{
        backgroundColor:'blue',
        
    },
    childern2:{
        backgroundColor:'yellow',
        
    },
    childern3:{
        backgroundColor:'red',
        
    },
    commonStyle:{
        height:80,
        marginBottom:20,
        marginHorizontal:30,
        borderWidth:5,
        padding:10,
        color:'white',
        fontSize:20,
        justifyContent:'center',
        textAlign:'center',
    }


})