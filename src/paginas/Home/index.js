import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons';
import  {useState, useEffect, use} from 'react'


import Cabecalho from '../../components/cabecalho';
import Pesquisa from '../../components/barraPesquisa';
import Banners from '../../components/Banners';
import CardMovies from '../../components/cardsFilmes';




export default function App() {

  const [movies,setMovies] = useState([])

  useEffect(() => {

    async function buscarFilmes() {
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmNkYTUxYzRjYzljZDdiZTJjMzMzMDE3ZGM3OWE0NCIsIm5iZiI6MTc1NTAyMTYwNS44OTY5OTk4LCJzdWIiOiI2ODliODEyNTY2NTBjYzA1YWFjNzAwNjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i0wiHhy0MurWY0nId6NgI5gRpCipGKoBtGi5hpPVlT8'
        }
      };
      
      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          let data = json.results
          console.log(data)
          
          setMovies(data)
        })
        
        
      }
      
      buscarFilmes()
      

  }, [])

  

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

        <Text style = {{color: "white", marginTop: 15, fontSize: 20, fontWeight: "bold", right: 140}}>Top Rated</Text>
    <View style = {{width: "95%", marginTop: 15}}>
        <View style = {{backgroundColor: '#1e0bff', borderRadius: 20 }}>
    <FlatList style = {{marginLeft: 10}}

      data ={movies}
      horizontal = {true}
      // showsHorizontalScrollIndicator={false}
      reyExtractor={(item) => item.id}
      renderItem= {({item}) => (

        <CardMovies 

      
        titulo = {item.title} 
        nota = {item.vote_average} 
        imagem = {`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
        sinopse = {item.overview}/>

  )} />

        </View>
      </View>
    

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