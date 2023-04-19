
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAcI74RWNrpBKR4eGmUCqX0bfjQcpcZzvg",
  authDomain: "carolinska-tumundo.firebaseapp.com",
  projectId: "carolinska-tumundo",
  storageBucket: "carolinska-tumundo.appspot.com",
  messagingSenderId: "737657564974",
  appId: "1:737657564974:web:677f0013c7f3b84b8254bf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth= getAuth(app)


