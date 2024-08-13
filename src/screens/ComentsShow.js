import { useRoute } from "@react-navigation/native"
import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { DateFormat } from "../components/DateFormat"

export const ComentsShow = () => {
    const route = useRoute()
    const {item} = route.params
    console.log(item)
    return (
        <SafeAreaView>
            <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={{uri: item.user.image_url}}/>
                <Text style={styles.title}>{item.user.name}</Text>

            </View>
            <Text style={styles.text}>{item.text}</Text>
            <DateFormat date={item.time_created} />
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
        width:100,
        height: 100,
        borderRadius: 100,
    
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