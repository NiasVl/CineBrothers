import { View, Text, Image, ScrollView } from "react-native-web";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
import styles from "./style";

export default function Details() {

    const route = useRoute()

    return(
        <View style = {styles.containerP}>
                <View style = {styles.containerImg}>
                    <Image style = {styles.Imagem}  source = {{uri: (route.params.imagem)}} ></Image>
                </View>
                    <Text style = {styles.titulo} >{route.params.titulo}</Text>
                    <Text style = {styles.nota} >{route.params.nota}</Text>
            <ScrollView>
                    <Text style = {styles.sinopse} > {route.params.sinopse} </Text>
            </ScrollView>        
        </View>
    )
}

