import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

// import { seedDatabase } from './seed';
// seedDatabase(firebase)
// !! don't take this comment away or it will duplicate seed the database

const config = {
    apiKey: "AIzaSyBmnuAF2c-okDjRvqzIfO3B6xBXeQNmwps",
    authDomain: "netflixclone-45266.firebaseapp.com",
    projectId: "netflixclone-45266",
    storageBucket: "netflixclone-45266.appspot.com",
    messagingSenderId: "629713869844",
    appId: "1:629713869844:web:02324d41e87e69042c5b01",
    measurementId: "G-TYJ1JFQCE4"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
