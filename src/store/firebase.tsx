import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyD3Oh6tRozOmQg9pTc2-9UB4bwB1SQqUrY",
    // authDomain: "retrod-7e2cd.firebaseapp.com",
    databaseURL: "https://moneycard-b2d1c.firebaseio.com/",
  }
  firebase.initializeApp(config);
  export const databaseRef = firebase.database();