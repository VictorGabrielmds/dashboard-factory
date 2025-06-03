// src/services/firebase.ts
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCqbJS-VLfwxbJQjxT63kw3PgsGKhGmhrc",
  authDomain: "entregas-781a8.firebaseapp.com",
  projectId: "entregas-781a8",
  storageBucket: "entregas-781a8.firebasestorage.app",
  messagingSenderId: "795582426704",
  appId: "1:795582426704:web:4d4e206be8351ba05d2b55"
};

export const app = initializeApp(firebaseConfig);
