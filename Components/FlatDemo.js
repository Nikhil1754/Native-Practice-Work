import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'

const FlatDemo = () => {
    const names=[{
        key:"1",
        name:'Nikhil'
    },
    {
        key:"2",
        name:'Akhil',
    },
    {
        key:"3",
        name:'Aditya'
    },
    {
        key:"4",
        name:'Divyam'
    },
    {
        key:"5",
        name:"Nikhil",
    },
    {
        key:"6",
        name:"Nikhil",
    },
    {
        key:"7",
        name:"Nikhil",
    }

];
  return (
    <View>
        <FlatList horizontal showsHorizontalScrollIndicator={false} style={styles.listStye} keyExtractor={(element)=>{
        return element.key;
    }} data={names} renderItem={(element)=>{
        console.log(element.item.name);
        return <Text style={styles.textStyle}>{element.item.name}</Text>
    }}/>
    </View>
    
  )
}
const styles=StyleSheet.create({
    textStyle:{
        fontSize:40,
        margin:5,
        backgroundColor:'red',
        color:'white',
        padding:30,
    },
    listStye:{
        margin:10,
        padding:10,
        textAlign:'cenetr',
    }

})

export default FlatDemo