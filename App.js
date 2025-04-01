import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Cabecalho from './src/components/cabecalho';
import Pesquisa from './src/components/barraPesquisa';
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
    <Text style = {styles.textBanner}>Em cartaz</Text>

    <Image style = {styles.imageBanner} source = {require(`./assets/1.jpg`)}></Image>
    <Image style = {styles.imageBanner} source = {require(`./assets/2.jpg`)}></Image>
    <Image style = {styles.imageBanner} source = {require(`./assets/3.jpg`)}></Image>

    {/*Fim do banner*/}

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: "center"
    },
    imageBanner: {
      width: "90%",   
      height: 200,
      marginTop: 15,
      borderRadius: 10
    },
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 15,
      marginLeft: -180,
      fontWeight: "Bold"
    }
});