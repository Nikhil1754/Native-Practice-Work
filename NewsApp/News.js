import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { React, useState, useEffect } from 'react'
import Loader from './Loader';

const News = () => {
    const [newsData, setnewsData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getNewsData = async () => {
        try {
            const url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=748f440e79c3404b80c7f696c775fea3&page=0&pageSize=40"
            const data = await fetch(url);
            const myData = await data.json();
            setnewsData(myData.articles);
            setisLoading(false);
            //console.log(myData);
            
        } catch (error) {
            console.log(error);
            
        }
            

    }
    useEffect(() => {
        getNewsData();
    }, [])
    return (
        <View style={styles.mainContainer}>
            {isLoading?(<Loader/>):(<View>
                <Text style={styles.heading}>Top Headlines of Todays</Text>
            <FlatList data={newsData} renderItem={({item})=>{
                return (
                    <View style={styles.parent}>
                        <View style={styles.child1} >
                        <Image style={styles.img} source={{uri:item.urlToImage}}/>
                        </View>
                        <View style={styles.child2}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc}>{item.description}</Text>
                        <TouchableOpacity style={styles.btn}><Text>Read More</Text></TouchableOpacity>
                        </View>
                    </View>
                )
            }}/>
            </View>)}
            
        </View>
    )
}

export default News

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:60,
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
    },
    parent:{
        width:'95%',
        height:250,
        paddingHorizontal:10,
        backgroundColor:'#3A3B3C',
        margin:10,
        borderRadius:10,
    },
    child1:{
        height:'50%',
    },
    child2:{
        height:'50%',
    },
    img:{
        width:'100%',
        height:'100%',
        overflow:'hidden'
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
    },
    desc:{
        fontSize:13,
        color:'white',

    },
    btn:{
        alignSelf:'flex-start',
        backgroundColor:'#ADD8E6'
    }

})