import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, StyleSheet, Button, Image } from 'react-native';
import NetflixCard from './NetflixCard';

export default function MoviesCard() {
    const result = [{
        name: 'Sex Education',
        year: 2019,
        img:'https://assets.gadgets360cdn.com/pricee/assets/product/202205/Sex-Education-Season-4-Poster_1651691067.jpg',
        desc:'Sex Education is a British comedy-drama streaming television series created by Laurie Nunn for Netflix.',
        Genre: 'Comedy, Drama',
        Creator: 'Laurie Nunn'
    },
    {
        name: 'The Baby-Sitters Club ',
        img:'https://m.media-amazon.com/images/M/MV5BMTlkMDg0MjQtYzg5ZC00MmFhLThhZTMtZDI3NzQxOTQzZDQ2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        desc:'The Baby-Sitters Club is an American comedy-drama television series created by Rachel Shukert, based on the children s novel series of the same name by Ann M',
        year: 2020,
        Genre: 'Kids',
        Creator: 'Rachel Shukert'
    },
    {
        name: 'Sweet Tooth ',
        img:'https://pinkroom-main.s3.amazonaws.com/91ea7ad4-c632-4249-982f-3a27ab27e333.jpg',
        desc:'Sweet Tooth is an American fantasy drama streaming television series developed by Jim Mickle. It is based on the comic book of the same name by Jeff Lemire ...',
        year: 2021,
        Genre: 'Action, Adventure, Drama',
        Creator: 'Jim Mickle'
    },
    {
        name: 'Breaking Bad ',
        img:'https://resizing.flixster.com/qeGRjEC1edJQu8dLViQ1BXLeZos=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjYyNzkzLndlYnA=',
        desc:'Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico, the series ...',
        year: 2008,
        Genre: 'Crime, Drama',
        Creator: 'Vince Gilligan'
    },
    {
        name: 'The Queen’s Gambit',
        img:'https://cbin.b-cdn.net/img/TH/The%20Queens%20Gambit_HR2QD_1000x913.jpeg?size=800',
        desc:'The Queen s Gambit is a 2020 American coming-of-age period drama streaming television miniseries based on the 1983 novel of the same name by Walter Tevis.',
        year: 2020,
        Genre: 'Drama',
        Creator: 'Scott Frank, Allan Scott'
    },
    {
        name: 'Squid Game',
        img:'https://economictimes.indiatimes.com/thumb/msid-87237722,width-1200,height-900,resizemode-4,imgsize-81056/squid-game-main.jpg?from=mdr',
        desc:'Squid Game is a South Korean survival drama television series created by Hwang Dong-hyuk for Netflix. Its cast includes Lee Jung-jae, Park Hae-soo, ...',
        year: 2021,
        Genre: 'Action, Adventure, Drama',
        Creator: 'Hwang Dong-hyuk'
    },
    {
        name: 'Peaky Blinders ',
        img:'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
        desc:'Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, it follows the exploits of the Peaky ...',
        year: 2013,
        Genre: 'Drama, Crime, Historical Fiction',
        Creator: 'Steven Knight',
    },
    {
        name: 'Arrested Development',
        img:'https://flxt.tmsimg.com/assets/p7896054_b1t_v9_aa.jpg',
        desc:'Arrested Development is an American television sitcom created by Mitchell Hurwitz. It aired on Fox for three seasons from November 2, 2003 to February 10, ..',
        year: 2003,
        Genre: 'Comedy',
        Creator: 'Mitchell Hurwitz'
    },
    ];

    return (
        <View>
            <FlatList horizontal showsHorizontalScrollIndicator={false} style={styles.listStye} keyExtractor={(element)=>{
        return element.name;
    }} data={result} renderItem={(element)=>{
        console.log(element.item.name);
        return (
           <NetflixCard img={element.item.img} title={element.item.name} desc={element.item.desc}/>
        )
    }}/>
        </View >
    )
}
const styles = StyleSheet.create({
    main:{
        margin:5,
        padding:30,
        margin:10,
        backgroundColor:'red',

    },
    textStyle:{
        fontSize:40,
        color:'white',
        
    },
    listStye:{
        margin:5,
       
        padding:10,
        textAlign:'cenetr',
    }

})