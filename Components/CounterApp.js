import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'

const CounterApp = () => {
    const [Value, setValue] = useState(0);
    const handlePlus=()=>{
        setValue(Value+10);
    }
    const handleReset=()=>{
        if(Value>=0){
            setValue(0);
        }
       
        
    }
    const handleMinus=()=>{
        if(Value>=10){
            setValue(Value-10);
        }
        
    }
  return (
    <View style={styles.main}>
        <View>
        <Text style={styles.text}>{Value}</Text>
        </View>
        <View style={styles.opa}>
        <TouchableOpacity onPress={handlePlus}><Text style={styles.btn}>+10</Text></TouchableOpacity>
        </View>
        <View style={styles.opa}>
        <TouchableOpacity onPress={handleReset}><Text style={styles.btn}>Reset</Text></TouchableOpacity>
        </View>
      
        <View style={styles.opa}>
        <TouchableOpacity onPress={handleMinus}><Text style={styles.btn}>-10</Text></TouchableOpacity>
        </View>
      
      
    </View>
  )
}

export default CounterApp

const styles = StyleSheet.create({
    main:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        height:700,
    },
    opa:{
        width:'70%',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:80,
        color:'black',
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        padding:30,
        fontSize:50,
        backgroundColor:'black',
        color:'white',
    }
})