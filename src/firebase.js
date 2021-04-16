import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDhzu0KcfpmYBz2nNe52g-2xJXO_FjEeA0',
	authDomain: 'clone-646ed.firebaseapp.com',
	projectId: 'clone-646ed',
	storageBucket: 'clone-646ed.appspot.com',
	messagingSenderId: '396159549379',
	appId: '1:396159549379:web:02548bef41e96fe5b08776',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
