import { StyleSheet, View ,TouchableOpacity, Image, Alert} from 'react-native'
import React from 'react'

const TouchableOpacityC = () => {
  const handleOnpress=()=>{
    Alert.alert("Open THe new Link");
  }
  return (
    <View>
      <TouchableOpacity onPress={handleOnpress}>
     <Text>This is Touchable opacity</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TouchableOpacityC;

const styles = StyleSheet.create({
  tbtn:{
    color:"white",
    backgroundColor:"#841584",
  },
  img:{
    width:200,
    height:200,
  }

})