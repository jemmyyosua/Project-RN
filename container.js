import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "native-base"
import { Ionicons } from "@expo/vector-icons"

// Route Tab
import Calculator from "./screens/calculator"
import SignUp from "./screens/signUp"
import TodoList from "./screens/todoList"
import SignIn from "./screens/signIn"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function BTab(){
  const theme = useTheme()

  return (
    <Tab.Navigator 
    initialRouteName="TodoList" 
    screenOptions={({route}) => ({
      headerMode : "screen", 
      headerTintColor : "white" , 
      headerStyle :{ backgroundColor : theme.colors.extos[4]}, 
      tabBarIcon: ({ focused, color, size }) => {
        let iconBar

        if (route.name === "TodoList") {
          iconBar = focused ? "list-circle" : "list-circle-outline"
        } else if (route.name == "Calculator") {
          iconBar = focused ? "ios-calculator" : "calculator-outline"
        }

        return <Ionicons name={iconBar} size={size} color={color} />
      },
      tabBarActiveTintColor: theme.colors.primary["800"],
      tabBarInactiveTintColor: "gray"
    
    })}>

      <Tab.Screen name="TodoList" component={TodoList} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={Calculator}  options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

export default function Container(){
    const theme = useTheme()

    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerMode : "screen", headerTintColor : "white" , headerStyle :{ backgroundColor : theme.colors.extos[4]}}}>
        {/* <Stack.Screen name="Home" component={SignUp} options={{headerShown : false}}/> 
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown : false}}/>  */}
        <Stack.Screen name="Main" component={BTab} options={{headerShown : false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
    )
}

