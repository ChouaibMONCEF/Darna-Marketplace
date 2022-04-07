import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLUuum46uU_MeXdNP77-s0i_M6DUuUwok",
  authDomain: "darna-marketplace.firebaseapp.com",
  projectId: "darna-marketplace",
  storageBucket: "darna-marketplace.appspot.com",
  messagingSenderId: "56269441989",
  appId: "1:56269441989:web:28f2a5e9f6ef3f5cf499ac",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
