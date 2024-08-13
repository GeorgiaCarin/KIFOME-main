import { View , TouchableOpacity, StyleSheet } from "react-native"
import {FontAwesome} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
export const BackButton = ({path}) => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(path)}>
                <FontAwesome name="chevron-left" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        position: 'absolute',
        marginTop:10,

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
})