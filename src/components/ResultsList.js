import react from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";
import { useNavigation, useRoute } from "@react-navigation/native";
const ResultsList = ({title,results}) => {
    const navigation = useNavigation()
    const route = useRoute()
    if(!results.length)
    {
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
       <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor = {(result)=> result.id}
        renderItem = {({item})=> {
            
            return (
                <TouchableOpacity onPress={()=> {
         
                    
                    navigation.navigate("ResultsShow", {
                            itemId: item.id,
                    })
                    
                    }
                }>
                    
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                
            )
        
        }}
       />
    </View>
    

}

const styles = StyleSheet.create({
    title: {
        fontSize:18,
        fontWeight:'bold',
        marginLeft: 15,
        marginBottom: 5,

    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList