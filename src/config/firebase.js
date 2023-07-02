// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC53Lq2wuWi3zeqMOdtip7-DSVUm3IfCj8",
  authDomain: "fedra-e5830.firebaseapp.com",
  projectId: "fedra-e5830",
  storageBucket: "fedra-e5830.appspot.com",
  messagingSenderId: "331721489055",
  appId: "1:331721489055:web:e7d92a204f951f52d740aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)



export const upload = async (file) => {

  const storageref = ref(storage,v4());
    await uploadBytes(storageref, file)
    const url = await getDownloadURL(storageref)
    return url
}