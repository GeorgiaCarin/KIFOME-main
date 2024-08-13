import { Link, useRoute } from "@react-navigation/native"
import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DateFormat } from "../components/DateFormat"
import { FontAwesome } from '@expo/vector-icons';
import InsetShadow from 'react-native-inset-shadow'
import { BackButton } from "../components/BackButton";
import { UrlButton } from "../components/UrlButton";
export const ComentsShow = () => {
    const route = useRoute()
    const {item} = route.params

    return (
        <SafeAreaView>
            <View style = {styles.card}>
                <BackButton path='Reviews' />
                <View style={{alignItems: 'center', paddingTop: 40}} >
                    <Image style={styles.image} source={{uri: item.user.image_url}}/>
                    <View style={{flexDirection: 'row', justifyContent: 'center',alignContent: 'center'}}>
                        <Text style={styles.title}>{item.user.name}</Text>
                        <FontAwesome name="star" size={24} color='#FFCF26' />
                        <Text style={styles.title}>{item.rating}</Text>
                    </View>
                </View>
     
                    <Text style={styles.text}>{item.text}</Text>

                    <DateFormat style={styles.date} date={item.time_created} />
        
    
            </View>
            <UrlButton url={item.url}>Ir para comentário</UrlButton>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 8,
        


    },
    container:{
        
        margin: 8
    },
    image: {
        width:100,
        height: 100,
        borderRadius: 100,
    
        marginBottom: 2,
        paddingBottom: 4
    },
    title: {
        fontSize:20,
        fontWeight: "bold",
        color:'#2C7D09',


    },
    text: {
        fontSize:16,
        textAlign: 'justify', 
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        
        

    },
    date:{
        color: '#ffffff'
        
    }

})