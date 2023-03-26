import { Button, StyleSheet, Text, View ,Alert} from 'react-native'
import React from 'react'

const OurButtons = () => {
    const handleOnpress=()=>{
        //console.log("pressed successfully");
        Alert.alert("Submitted Succesffully");
    }
  return (
    <View style={styles.vieStyle}>
        <Button style={styles.btn} title="Plz Click Here" onPress={handleOnpress} />
    </View>
  )
}

export default OurButtons

const styles = StyleSheet.create({
    vieStyle:{
        margin:"auto",
        padding:30,
    },
    btn:{
        borderRadius:20,
        color:"white",
        backgroundColor:"#841584",
        
    }
})