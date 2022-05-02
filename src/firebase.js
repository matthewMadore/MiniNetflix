import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDe_NYrwBo9-WwFzM0_dIYaMTjIa_8-d2g",
    authDomain: "netflix2-d95d5.firebaseapp.com",
    projectId: "netflix2-d95d5",
    storageBucket: "netflix2-d95d5.appspot.com",
    messagingSenderId: "432552532260",
    appId: "1:432552532260:web:2656f48ff065de6301bbb1"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { auth };
  export default db;