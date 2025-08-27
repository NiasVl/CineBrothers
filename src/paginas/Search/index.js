import { View, Text } from 'react-native'
import {useRoute} from '@react-navigation/native'
import { useEffect, useState } from 'react'


export default function Pesquisar() {

    const [movies, setMovies] = useState([])

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

              setMovies(json)

              console.log(movies)
            })
    }

        buscarFilmes()
}, [])

    const route = useRoute()

    return (
        <View>
            <Text> {route.params.pesquisa} </Text>
        </View>
    )
}