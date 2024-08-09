import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons'


const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search" 
            style={styles.inputStyle}
            value ={term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    background:{
        marginTop:15,
        backgroundColor: '#E5E4E2',
        height:40,
        borderRadius: 10,
        marginHorizontal:15,
        flexDirection: 'row',
        marginBottom: 10,
      
    },
    inputStyle: {
 
        fontSize: 18,
        flex: 1

    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: '#2C7D09'
    }
})
export default SearchBar