import React from 'react'
import { View ,Text,StyleSheet} from 'react-native'

function C2() {
  return (
    <View style={styles.ss2}>
        <Text style={styles.para}>We Love React Native and I am a Subscriber of thapa technical</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    ss2:{
        margin:20,
        padding:30,
        textAlign:'center',
    },
    para:{
        fontSize:30,

    }
})

export default C2