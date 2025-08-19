import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
import styles from "./style";

export default function Details() {
    
    const route = useRoute()

    const navigation = useNavigation()

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

            <TouchableOpacity onPress={() => navigation.goBack()} style = {{backgroundColor: "white",marginBottom: 20, fontSize: 10 }}>
                    <Text styles = {{}}>Voltar para a Home Page</Text>
            </TouchableOpacity>

        </View>
    )
}

