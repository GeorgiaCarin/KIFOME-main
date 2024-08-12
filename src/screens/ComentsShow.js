import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const ComentsShow = () => {
    const route = useRoute()
    const {item} = route.params
    console.log(item)
    return (
        <SafeAreaView>
            
            <Text>{item.text}</Text>
        </SafeAreaView>
    )
}