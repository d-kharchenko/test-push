importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
 var config = {
    apiKey: "AIzaSyCFIg4zZ5-a5a56XWL1UC5KEc0qBJQjuog",
    authDomain: "sushi-97014.firebaseapp.com",
    databaseURL: "https://sushi-97014.firebaseio.com",
    projectId: "sushi-97014",
    storageBucket: "sushi-97014.appspot.com",
    messagingSenderId: "201803835327"
  };
  firebase.initializeApp(config);
const messaging = firebase.messaging();
