import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style'
import { useNavigation } from "@react-navigation/core";

export default function CardMovies ({titulo, nota, imagem, sinopse}) {
     
    const navigation = useNavigation();

    function roundTo(num, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
      }

    return(
        <TouchableOpacity style= {styles.containerMovie} onPress={()=> navigation.navigate("Details", {titulo,nota,imagem,sinopse})} >
            
           <Image style={styles.images} source= {{uri: (`https://image.tmdb.org/t/p/original/${imagem}`)}} />
           
           <Text style ={styles.titulo}> {titulo}</Text>

           <Text style ={styles.textNota}> {nota.toFixed(1)} </Text>


        </TouchableOpacity>
    )



}