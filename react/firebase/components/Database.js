import * as firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBhSKBsX5_lN4uxQRJc9KNnMYfT-qtqJ7s",
    authDomain: "myproject-9b206.firebaseapp.com",
    databaseURL: "https://myproject-9b206.firebaseio.com",
    projectId: "myproject-9b206",
    storageBucket: "myproject-9b206.appspot.com",
    messagingSenderId: "5715688437",
    appId: "1:5715688437:web:98218ccbc07f13cc733ebc",
    measurementId: "G-ZR3BB6DMQW"
  };
class Database{
  constructor()
  {
    firebase.initializeApp(firebaseConfig);
  }

  createAccount(Account,add_success,add_Fail){
    firebase.firestore().collection("Account").add(Account).then(ref=>(add_success(ref.id)),add_Fail);
  }
}

const database = new Database();
export default database;
