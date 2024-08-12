import { useRoute } from "@react-navigation/native"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React, {useState,useEffect} from "react"
import yelp from "../api/yelp"
/*
[
  {
    "id": "RxwIKeJ8huAY36hr7OyXQQ",
    "rating": 4,
    "text": "I always say there's no reason to eat pasta at a restaurant unless the dough is freshly made. It doesn't get much fresher than artisanal pasta dough (massa)...",
    "time_created": "2014-12-19 07:24:24",
    "url": "https://www.yelp.com/biz/pastif%C3%ADcio-primo-pinheiros-s%C3%A3o-paulo?adjust_creative=asY7Z-Wi6w07WaczaYoh3Q&hrid=RxwIKeJ8huAY36hr7OyXQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=asY7Z-Wi6w07WaczaYoh3Q",
    "user": {
      "id": "UrxAF_qXTmLeERVCC7-PQg",
      "image_url": "https://s3-media2.fl.yelpcdn.com/photo/5XYw2jkpMWySSlPFgSiHEQ/o.jpg",
      "name": "Mimi N.",
      "profile_url": "https://www.yelp.com/user_details?userid=UrxAF_qXTmLeERVCC7-PQg"
    }
  },
  
]
*/

export default ComentsDetailScreen = () => {
    const route = useRoute()
    console.log('Teste dos comentarios', route.params)
    const {itemId} = route.params
    
    return (
        <SafeAreaView>
            <Text>testando</Text>
        </SafeAreaView>
    )
}