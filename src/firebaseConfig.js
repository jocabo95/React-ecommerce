import { initializeApp } from "firebase/app";

// importar servicio especifico. ej:firestore
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlxGu7PYIUchFc2VQOqI0IZFfLfgNfcsI",
  authDomain: "react-ecommerce-18f30.firebaseapp.com",
  projectId: "react-ecommerce-18f30",
  storageBucket: "react-ecommerce-18f30.appspot.com",
  messagingSenderId: "1044297082417",
  appId: "1:1044297082417:web:f534eb662fff5e13bd9710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// se debe inicializar y exportar el servicio especifico (firestore)
export const db = getFirestore(app);





