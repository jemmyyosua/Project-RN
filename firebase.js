import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCdj3SywLuKvj6z7-MiklW8FEl18-VrlbA",
    authDomain: "react-native-f5d82.firebaseapp.com",
    projectId: "react-native-f5d82",
    storageBucket: "react-native-f5d82.appspot.com",
    messagingSenderId: "45008982207",
    appId: "1:45008982207:web:bd10cab63c74f2704d360a",
    measurementId: "G-52C6SLPYJB"
  }
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)



