import React, {useState, useEffect} from "react"
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, NativeBaseProvider } from "native-base"
import { Feather, Entypo } from "@expo/vector-icons"

import { db } from "../firebase"
import { addDoc, getDocs, collection, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getDatabase, ref, set } from "firebase/database"

const Example = () => {
  const [list, setList] = useState([])
  const [title, setTitle] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  const addItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "todoList"), {
        title : title
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function AddList(title) {
    const db = getDatabase()
    set(ref(db, 'lists/' + listId), {
      title : title
    });
  }  

  useEffect(() =>{
    const getLists = async() =>{
      const data = await getDocs(collection(db, "todoList"))
      setList(data.docs.map((doc) => ({...doc.data(), id : doc.id})))
    }

    getLists()
  },[])
  


  const handleDelete = async(id) => {
    await deleteDoc(doc(db, "todoList", id))
  };


    const handleStatusChange = async() => {
      await updateDoc(doc(db, "todoList")),{
        isComplete : checkbox
      }
    }

  return <Center w="100%">
      <Box maxW="300" w="100%">
        <VStack space={4}>
          <HStack space={2}>
            <Input flex={1} onChangeText={v => setTitle(v)} value={title} placeholder="Add Task" />
            <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={addItem}/>
          </HStack>
          <VStack space={2}>
            {list.map((item) => (
            <HStack w="100%" justifyContent="space-between" alignItems="center">
                <Checkbox onChange={v => setCheckbox(v)} value={item.isComplete}>
                  <Text mx="2" strikeThrough={item.isComplete} _light={{
                color: item.isComplete ? "gray.400" : "coolGray.800"
              }} _dark={{
                color: item.isComplete ? "gray.400" : "coolGray.50"
              }}>
                    {item.title}
                  </Text>
                </Checkbox>
                <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="trueGray.400" />} onPress={() => handleDelete(item.id)} />
              </HStack>))}
          </VStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };