import React, {useState} from "react"
import { Input, Icon, Stack, Box, Button, Text } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import { auth } from "../firebase"

import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import { TouchableOpacity } from "react-native-gesture-handler"

export default function SignIn({navigation}){

  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const SignIn = async () =>{
    if(email === ''){
      return alert('Fill email Field')
    }

    if(password === ''){
      return alert('Fill password Field')
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        userCredential.user
        navigation.navigate('Main')
        setIsLogin(true)
      })
      .catch((error) => {
        error.code
        return error.message
      })

  }

  const [show, setShow] = useState(false)
    return (
        <Box
        safeArea
        bg="blueGray.600"
        flex={1}
        p={10}
        w="100%"
        mx="auto"
        justifyContent="center"
      >
        <Stack space={4} w="100%" alignItems="center">
      <Input w={{
      base: "75%",
      md: "25%"
    }} value={email} autoComplete="email" onChangeText={text => setEmail(text)} InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={5} ml="2" color="muted.400" />} placeholder="Email" />
      <Input w={{
      base: "75%",
      md: "25%"
    }} value={password} onChangeText={text => setPassword(text)} type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
   <Button w={{ base: "75%", md: "25%" }} onPress={SignIn} primary>
      <Text>Sign In</Text>
    </Button>
   <Text color="white">Click Here to {" "} 
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
         Sign Up
    </TouchableOpacity>
    </Text>
    </Stack>
        </Box>
    )
}