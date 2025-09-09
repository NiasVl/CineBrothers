import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
import { useEffect, useState } from 'react'
import CardMovies from '../../components/cardsFilmes';

export default function Pesquisar() {

    const [Filmes, setFilmes] = useState([])

    useEffect(() => {

        async function buscarFilmes() {
            const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.pesquisa}&include_adult=false&language=en-US&page=1`;
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
              setFilmes(data)
              console.log(Filmes)
            })
            

          }
          
          buscarFilmes()
          
    
      }, [])
      
    const route = useRoute()

          const navigation = useNavigation()

    return (
          <View style = {{backgroundColor:"#141a29",height: "100%",alignContent: "center", justifyContent: "center" }}>
            <View style = {{width: "95%", marginLeft: 10}}>

            <View style = {{alignItems: 'center', width: '100%',}}>
              <Text style = {{color: "white", marginBottom: 30, fontSize: 50, fontWeight: "regular", fontFamily: 'monospaced'}}>Resultados</Text>
            </View>

                <View style = {{backgroundColor: '#BA8E23', borderRadius: 20, }}>
            <FlatList style = {{marginLeft: 10, height: 300}}
        
              data ={Filmes}
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

                            <TouchableOpacity onPress={() => navigation.goBack()} style = {{backgroundColor: "#950606",marginTop: 20, fontSize: 10, justifyContent: "center", alignItems: "center" }}>
                                    <Text styles = {{}}>Voltar para a Home Page</Text>
                            </TouchableOpacity>

              </View>
            </View>
       
    )
}