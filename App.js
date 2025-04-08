import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/components/cabecalho';
import Pesquisa from './src/components/barraPesquisa';
import Banners from './src/components/Banners';
import CardMovies from './src/components/cardsFilmes';

export default function App() {
  const imagem = Math.floor(Math.random() * 4 + 1);



  return (
    <View style={styles.container}>


    {/* Inicio cabeçalho*/}
    <Cabecalho/>
    {/* Fim cabeçalho*/}
    
    {/* Inicio Barra de Pesquisa */}
    <Pesquisa/>
    {/* Fim Barra de Pesquisa */}

    {/*inicio do banner*/}
    <Banners/>
    {/*Fim do banner*/}

    <CardMovies/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: "center"
    }
});