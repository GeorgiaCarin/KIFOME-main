import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import {FontAwesome5} from '@expo/vector-icons'




const gap = 20

const SearchScreen = ({}) =>{
    const [term,setTerm] = useState('')
    const [searchApi,results,erro] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    const data = [
        { id: '1', title: 'Pizza' , icon: "pizza-slice"},
        { id: '2', title: 'Hamburger', icon: "hamburger" },
        { id: '3', title: 'Peixe', icon: "fish" },
        { id: '4', title: 'Frango',icon: "drumstick-bite" },
        { id: '5', title: 'Bebidas', icon: "gulp" },
      ];
      
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            setTerm(item.title)
            searchApi(term)
            }}>
            <View style={styles.icons}>
            <FontAwesome5 name={item.icon} color="white" size={30}/>
            </View>
        </TouchableOpacity>
      );

    return <>

        <Image
            source={require('../Assets/logo.png')}
            style={{ width: 321, height: 75, alignSelf: 'center', marginTop: 50, }}
        />
        
        <SearchBar
 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}
        />
        {erro ? <Text> {erro} </Text> : null}

    
        <ScrollView>
        <View style={styles.iconsDiv}>

            <FlatList
                horizontal
                data={data}
                contentContainerStyle={{gap}}
                
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

      
            
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective" 
            />
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier" 
            />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender" 
            />
            
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    icons: {
        borderColor: 'black',
        
        width: 60,
        height:60,
        borderRadius: 40,
        backgroundColor: 'green',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    iconsDiv: {

        alignItems: 'center',
        justifyContent: 'space-evenly'
        
    }
})
export default SearchScreen

SearchScreen.navigationOptions = () => {
    return {
        headerShown:false,
    } 

}