import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CardDetail from './CardDetail'

const ImageFile = () => {
  const arr=[{
    key:"1",
    text:"This is first text",
  },
  {
    key:"2",
    text:"this is second text"
  },
  {
    key:"3",
    text:"this is third one",
  },
  {
    key:"4",
    text:"this is fourth one",

  },
  {
    key:"5",
    text:"this is fifth one",

  },
  {
    key:"6",
    text:"this is sizth one",

  }

]
  return (
    <View style={styles.container}>
      {arr.map((element)=>{
        return <CardDetail key={element.key} text={element.text}/>
      })}
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
      margin:'auto',
      textAlign:'center',
        justifyContent:'center',
        backgroundColor:'white',
      },
    
})
export default ImageFile;
