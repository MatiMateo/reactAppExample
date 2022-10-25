import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHeJZ9J-xLtteC-ZfS6jOkUudinqhtnCw",
  authDomain: "cleo-tienda-af481.firebaseapp.com",
  projectId: "cleo-tienda-af481",
  storageBucket: "cleo-tienda-af481.appspot.com",
  messagingSenderId: "228491513474",
  appId: "1:228491513474:web:5df3cf9de796f1fa44ee9b",
  measurementId: "G-XYCSQ02D96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
