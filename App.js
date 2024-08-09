import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ComentsScreen from './src/screens/ComentsScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getExpoGoProjectConfig } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// const navigator = createStackNavigator ({
//   Search: SearchScreen,
//   ResultsShow: ResultsShowScreen
// }, {
//   initialRouteName:'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   }
// })

// export default createAppContainer(navigator)

const Tab = createBottomTabNavigator()
function ResultTap({route}) {
  const [load, setLoad] = useState(false)
  const { itemId } = route.params || {}
  console.log('Parâmetros recebidos no ResultTap:', route.params);
  useEffect(() => {
    if (itemId) {
      setLoad(true);
    }
  }, [itemId]);
  if (!load) {
    return <SafeAreaView>
      <Text>Loading...</Text>

    </SafeAreaView>
    
  }

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Infos"
        component={ResultsShowScreen}
        initialParams={{ itemId: itemId }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Reviews"
        component={ComentsScreen}
        initialParams={{ itemId: itemId }}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
  
}


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ResultsShow" component={ResultTap} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}