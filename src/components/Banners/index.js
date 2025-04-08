import {Text, Image, TouchableOpacity, View} from 'react-native'
import styles from './style.js';

export default function Banners(){

    return( 
            <View style = {{alignItems: 'center'}}>
            <Text style = {styles.textBanner}> Em cartaz </Text>

            <TouchableOpacity>

            <Image style = {styles.imgBanner} source={require(`../../../assets/1.jpg`)} ></Image>

            </TouchableOpacity>

            </View>

    )
}