import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    containerP : {
        backgroundColor: "#141a29",
        height: "100%",
        flex: 1,
        alignItems: "center"
    },
    containerImg: {
        width: '100%', 
        height: 300, 
        overflow: 'hidden', 
    },
    Imagem: {
        width: '100%', 
        height: '100%',
        resizeMode: 'contain'
    },
    titulo : {
        fontSize: 50,
        color: "white"
    },
    nota : {
        color: "white"
    },

    sinopse : {
        fontSize: 20,
        lineHeight: 30,
        color: 'white',
        textAlign: 'justify',
        margin: 20
    }

})

export default styles