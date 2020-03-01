import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBWl9P8ouFW46nK7r4Uj1mTadSGiA6SFKM',
  authDomain: 'reactfbcrud.firebaseapp.com',
  databaseURL: 'https://reactfbcrud.firebaseio.com',
  projectId: 'reactfbcrud',
  storageBucket: 'reactfbcrud.appspot.com',
  messagingSenderId: '993551574591'
};
let app = Firebase.initializeApp(config);
export const db = app.database();