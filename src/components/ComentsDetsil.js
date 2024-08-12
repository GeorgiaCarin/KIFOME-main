import react from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ComentsDetail = ({result}) => {
    
    return <View style={styles.container}>
        <View style={[styles.card,styles.shadowProp]}>
            
            <Text style={styles.title}>{result.user.name}</Text>
            <Text  style={styles.text}> {result.text}</Text>
        </View>
        
    </View>
    

}

const styles = StyleSheet.create({
    card: {
    
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity:  1.0,
          shadowRadius: 3.65,
          elevation: 4, 
          textAlign: 'justify'

    },
    container:{
        
        margin: 8
    },
   
    title: {
        fontSize:20,
        fontWeight: "bold",
        color:'#2C7D09',


    },
    text: {
        fontSize:14,
        textAlign: 'justify'
        


    },


})

export default ComentsDetail