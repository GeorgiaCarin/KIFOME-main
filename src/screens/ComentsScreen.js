import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, {useState,useEffect} from "react"
import yelp from "../api/yelp"
import ComentsDetail from "../components/ComentsDetsil"


export default ComentsScreen = () => {
    const [coments, setComments] = useState([])
    const route = useRoute()
    const navigation = useNavigation()
    console.log('Teste dos comentarios', route.params)
    const {itemId} = route.params

    const getComments = async () => {
        const commentsResponse = await yelp.get(`/${itemId}/reviews`);
        setComments(commentsResponse.data);
        console.log(commentsResponse.data.reviews)
        
    };
    useEffect(()=> {

        getComments(itemId)

    },[itemId])
    
    return (
        <SafeAreaView>
            <Text style={styles.title}>Comentários</Text>
            <FlatList
            
                showsHorizontalScrollIndicator={false}
                data={coments.reviews}
                keyExtractor = {(coments)=> coments.id}
                renderItem = {({item})=> {
            return (
                <TouchableOpacity onPress={()=> navigation.navigate("ComentsShow", {item})}>
                    
                    <View style={styles.container}>
                        <View style={[styles.card,styles.shadowProp]}>
                            
                            <Text style={styles.title}>{item.user.name}</Text>
                            <Text style={styles.text}> {item.text}</Text>
                        </View>
                        
                    </View>
                </TouchableOpacity>

            )}} 
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
    
        backgroundColor:'#ffffff',
        borderRadius: 4,
        alignItems: 'baseline',
        paddingVertical: 8,
        paddingHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity:  .2,

          shadowRadius: 1.0,
          elevation: 2,
          

    },
    container:{
        
        margin: 8
    },
    image: {
        width:270,
        height: 170,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 4,
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
        textAlign: 'justify'
  


    },

})