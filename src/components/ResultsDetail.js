import react from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsDetail = ({result}) => {
    
    return <View style={styles.container}>
        <View style={[styles.card,styles.shadowProp]}>
            {result.image_url =="" 
            ? <Text>oi</Text> 
            : <Image style={styles.image} source={{uri: result.image_url}}/>}
            
            <Text style={styles.title}>{result.name}</Text>
            <Text > {result.rating} Stars</Text>
        </View>
        
    </View>
    

}

const styles = StyleSheet.create({
    card: {
    
        backgroundColor:'#E5E4E2',
        borderRadius: 10,
        alignItems: 'center',
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity:  1.0,
          shadowRadius: 3.65,
          elevation: 6

    },
    container:{
        
        margin: 15
    },
    image: {
        width:270,
        height: 170,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 5,
        paddingBottom: 10
    },
    title: {
        fontSize:16,
        fontWeight: "bold",
        color:'#2C7D09',


    },


})

export default ResultsDetail