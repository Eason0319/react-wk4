import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, deleteDoc, setDoc, getDocs, doc } from "firebase/firestore";
import images from "../json/products.json"

const firebaseConfig = {
    apiKey: "AIzaSyCOrhWLjaWMfDP6CCri_C0ITZYZvL8XfRQ",
    authDomain: "productitem-f0f9a.firebaseapp.com",
    projectId: "productitem-f0f9a",
    storageBucket: "productitem-f0f9a.appspot.com",
    messagingSenderId: "594618290580",
    appId: "1:594618290580:web:299d57d1d2a8b7309dbf81",
    measurementId: "G-KW9PBR5WZB"
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products"); 

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(productsCollection);
  querySnapshot.forEach(async (product) => {
    await deleteDoc(doc(db, "products",product.id));
  });
  // ADD NEW DOCS
  images.forEach(async (product) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...product, id: docRef.id });
  });
};

export const getProducts = async () => {
    const querySnapshot = await getDocs(productsCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (product) => {
       await result.push(product.data());
    });
    console.log({ result });
    return result
 };