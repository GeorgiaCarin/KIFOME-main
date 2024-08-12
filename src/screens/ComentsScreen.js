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
                    <TouchableOpacity  onPress={()=> {
         
                    
                        navigation.navigate("ComentDetail", {
                                itemId: item.id,
                        })
                    }}
                        >
                        
                        <ComentsDetail result={item} />
                    </TouchableOpacity>
                    
                )
            
            }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:24,
        fontWeight: "bold",
        color:'#2C7D09',
        textAlign: 'center',
        marginBottom: 2


    },
})