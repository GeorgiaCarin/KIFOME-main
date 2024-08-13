import { Text, View } from "react-native"

export const DateFormat = ({date}) => {


    // Converta a string em um objeto Date
    const dateObject = new Date(date);
  
    // Formate a data e hora conforme necessário
    const formattedDate = dateObject.toLocaleDateString('pt-BR');
    const formattedTime = dateObject.toLocaleTimeString('pt-BR');
    
    return (
        <View>
            <Text>Criado em {formattedDate} às {formattedTime}</Text>
        </View>
    )
}