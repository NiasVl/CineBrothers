import {View, TextInput, TouchableOpacity} from 'react-native'
import styles from './style.js';
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"


export default function Pesquisa(){

    const[pesquisa,setPesquisa] = useState('')

  const navigation = useNavigation()

    function teste() {
        console.log(pesquisa)
    }

    return(
    <View style = {styles.containerSearch}>

    
      <TextInput onChangeText={(texto) => setPesquisa(texto)} style = {styles.inputSearch} placeholder='Digite o filme que deseja buscar' />
      <TouchableOpacity onPress={() => navigation.navigate('Search', {pesquisa})} style={{marginLeft:-40}}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
    
    </View>

    )
}
