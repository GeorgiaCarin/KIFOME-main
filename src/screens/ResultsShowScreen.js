import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import yelp from '../api/yelp';

const ResultsShowScreen = () => {
  const [result, setResult] = useState(null);
  const [comments, setComments] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  console.log('parametros recebidos', route.params)
  const {itemId} = route.params

  const getResult = async (itemId) => {
    const response = await yelp.get(`/${itemId}`);
    setResult(response.data);
  };

  const getComments = async () => {
    const commentsResponse = await yelp.get(`/${itemId}/reviews`);
    setComments(commentsResponse.data.reviews);
  };

  useEffect(() => {
    getResult(itemId);
    getComments(itemId);
  }, [itemId]);

  if (!result) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
          <FontAwesome name="chevron-left" style={styles.icon} />
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: result.image_url }} />
      </View>

      <Text style={styles.title}>{result.name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 20 }}>
        <View style={styles.greenBackground}>
          <FontAwesome name="star" size={20} color='#FFCF26' />
          <Text style={{ fontSize: 18, paddingLeft: 2 }}>{result.rating}</Text>
        </View>
        {result.hours[0].is_open_now ? (
          <Text style={styles.greenBackground}>Aberto</Text>
        ) : (
          <Text style={styles.redBackground}>Fechado</Text>
        )}
      </View>

      <View style={{ flexDirection: "row", paddingBottom: 5 }}>
        <FontAwesome name="phone" size={26} color='#2C7D09' />
        <Text style={styles.text}>{result.display_phone}</Text>
      </View>

      <View style={{ flexDirection: "row", paddingBottom: 20 }}>
        <FontAwesome name="map-marker" size={26} color='#2C7D09' />
        <Text style={styles.text}>{result.location.address1}</Text>
      </View>

      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.images} source={{ uri: item }} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    images:{
        height:250,
        width: 350
    },
    image:{
      
        height: 250,
        width: 400,
      
 
    },
    title:{
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
        color:'#2C7D09'
    },
    button:{
        marginTop:10,
        marginBottom: -60,
        marginLeft: 5 ,
        width:50,
        height:50,
        backgroundColor: '#E1F8D9',
        zIndex: 2,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    text:{
        fontSize: 18,
        paddingLeft:10
    },
    icon:{
        fontSize: 30,
        color:'#2C7D09'
    },
    greenBackground:{
        fontSize:20,
        marginHorizontal: 5,
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1F8D9',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:10,
        color:'#2C7D09',
        fontWeight: '500'
       
    },
    redBackground:{
   
        marginHorizontal: 5,
        flexDirection:'row', 
        justifyContent: 'center',
        backgroundColor: '#F8DAD9',
        paddingHorizontal: 10,
        paddingVertical:5,
        borderRadius:10,
        color:'#7D0909',
        fontWeight: '500',
    },
    
})

export default ResultsShowScreen

ResultsShowScreen.navigationOptions = () => {
    return {
        headerShown:false,
        
    } 

}


