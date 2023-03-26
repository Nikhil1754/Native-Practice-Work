import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { React, useState } from 'react'

const ColorGenrator = () => {
    const [newColor, setColor] = useState([]);
    const handleChangeColour = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        //console.log(`${red}"  "${green}" "${blue}`);
        return `rgb(${red},${green},${blue})`;
    }
    console.log(newColor);
    return (
        <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => {

                setColor([...newColor, handleChangeColour()]);
            }}
                style={styles.opc}><Text style={styles.txt}>Generate Random Colour</Text>
            </TouchableOpacity>
            <FlatList keyExtractor={(item)=>{
                return item;
            }} data={newColor} renderItem={({item}) => {
                console.log(item);
                return (
                    <View style={{width:300,height:200,margin:20,justifyContent:'center',alignItems:'center',borderWidth:2,backgroundColor:item}}>
                        <Text style={styles.txt}>{handleChangeColour()}</Text>
                    </View>
                )
            }} />

        </View>
    )
}

export default ColorGenrator

const styles = StyleSheet.create({
    topContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    opc: {
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 30,
        color: 'white',
    },
})