import {Text, Image, View} from 'react-native'
import styles from './style.js';

export default function Banners(){

    return( 
    <View style = {styles.viewBanner}>
        <Text style = {styles.textBanner}>Em cartaz </Text>

        <Image style = {styles.imageBanner} source = {require(`../../../assets/1.jpg`)}/>
        {/* <Image style = {styles.imageBanner} source = {require(`../../../assets/2.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/3.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/4.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/5.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/6.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/7.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/8.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/9.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/10.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/11.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/12.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/13.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/14.jpg`)}></Image>
        <Image style = {styles.imageBanner} source = {require(`../../../assets/15.jpg`)}></Image> */}

    </View>
    )
}