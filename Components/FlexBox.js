import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.child1,styles.common]}>BOX1</Text>
      <Text style={[styles.child2,styles.common]}>BOX2</Text>
      <Text style={[styles.child3,styles.common]}>BOX3</Text>
      <Text style={[styles.child4,styles.common]}>BOX4</Text>
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
    parent:{
        padding:10,
        borderWidth:1,
        width:300,
        height:300,
        flexDirection:'row',
        //justifyContent:'space-around',
        //alignItems:'center',
        margin:20,
        position:'relative',
    },
    child1:{
        padding:5,
        color:'dark-blue',
        margin:3,
        backgroundColor:'blue',

       
    },
    child2:{
        padding:5,
        color:'dark-blue',
        margin:3,
        backgroundColor:'red',
        bottom:0,
       
    },
    child3:{
        padding:5,
        color:'black',
        margin:3,
        backgroundColor:'yellow',
        bottom:0,
        right:0,

    },
    child4:{
        padding:5,
        color:'dark-blue',
        margin:3,
        backgroundColor:'green',
        top:0,
        right:0,

    },
    common:{
      width:50,
      height:50,
      position:'absolute',
    }


})