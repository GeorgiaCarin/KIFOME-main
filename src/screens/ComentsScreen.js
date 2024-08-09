import { useRoute } from "@react-navigation/native"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, {useState,useEffect} from "react"
import yelp from "../api/yelp"


export default ComentsScreen = () => {
    const [coments, setComments] = useState([])
    const route = useRoute()
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
         <FlatList
        
        showsHorizontalScrollIndicator={false}
        data={coments.reviews}
        keyExtractor = {(coments)=> coments.id}
        renderItem = {({item})=> {
            
            return (
                <TouchableOpacity onPress={()=> console.log('comentarios')}>
                    
                    <View>
                        <Text>
                            {item.user.name}
                        </Text>
                        <Text>
                            {item.text}
                        </Text>

                    </View>
                </TouchableOpacity>
                
            )
        
        }}
       />
        </SafeAreaView>
    )
}