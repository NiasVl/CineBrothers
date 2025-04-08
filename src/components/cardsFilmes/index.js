import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style'

export default function CardMovies () {
     
    return(
        <TouchableOpacity style= {styles.containerMovie}>
            
           <Image style={styles.images} source={require(`../../../assets/2.jpg`)} />
           
           <Text style ={styles.titulo}> Mulher-Maravilha</Text>

           <Text style ={styles.textNota}> 4.5 </Text>


        </TouchableOpacity>
    )



}