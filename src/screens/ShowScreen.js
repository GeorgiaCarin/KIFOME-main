import react, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import yelp from "../api/yelp";
import {ResultsShowScreen } from './ResultsShowScreen'
const ShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const [coments, setComents] = useState([])
    const ItemId = navigation.getParam('ItemId')
   
    const getResult = async (ItemId) => {
        
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    const getComents = async () => {
        const comentsresponse = await yelp.get(`/${ItemId}/reviews`)
        console.log(comentsresponse.data.reviews[0].text)
    }

    useEffect(()=> {
        getResult(ItemId)
        getComents(ItemId)

    },[])
    console.log(result)
    if(!result){
        return null
    }

const Tab = createBottomTabNavigator();
    return <SafeAreaView>
        
    
    </SafeAreaView>
}


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


