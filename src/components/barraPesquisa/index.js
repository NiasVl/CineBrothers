import {View, TextInput} from 'react-native'
import styles from './style.js';

export default function Pesquisa(){

    return(
    <View style = {styles.containerSearch}>

    
      <TextInput style = {styles.inputSearch} placeholder='Digite o filme que deseja buscar' />
    
    
    </View>

    )
}
