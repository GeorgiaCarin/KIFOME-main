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

import { SafeAreaView } from 'react-native-safe-area-context'

import { ComentsShow } from './src/screens/ComentsShow'
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator()
function ResultTap({route}) {
  const [load, setLoad] = useState(false)
  const { itemId } = route.params || {}

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
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        
        if (route.name === 'Infos') {
          iconName = 
             'information-circle-outline'
          
        } else if (route.name === 'Reviews') {
          iconName = 'chatbox-outline' 
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2C7D09',
      tabBarInactiveTintColor: 'gray',
    })}
    >
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
        <Stack.Screen name="ComentsShow" component={ComentsShow} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}