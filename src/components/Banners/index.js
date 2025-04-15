import {Text, Image, TouchableOpacity, View} from 'react-native'
import styles from './style.js';

export default function Banners(){

    return( 
            <View style = {styles.viewBanner}>
            <Text style = {styles.textBanner}> Em cartaz </Text>

            <TouchableOpacity style = {{}}>

            <Image style = {styles.imgBanner} source={URL= "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD1tqeV1TdP4ZeMXK4_UGXPTbsen2yCAaoN2U-EwMkJ72LzUTyOucKkJ5VDbPxVTBKl3GPhxPrtwlIu4O33O0XINsBqkp_4sbZVeYA9cADB88Vmldb1S1IFKKgKxgb1iD4-ZY7uemdQEINiBZLRL41aH_iI7sqAO67lAZjBniWHzEPdG3Pz1vkNskLwCkq/s1200/share.jpg"} ></Image>

            </TouchableOpacity>

            </View>

    )
}