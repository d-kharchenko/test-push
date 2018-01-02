// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'AAAALvxyJ78:APA91bFKjtFmQRluBOMjOSczBj2kmqmQv0_GgN699fy2ohJra0WPdHjICI35GXGwhkL1yxRbIjKc0dakICq6XtERZ9HMA0WovlSJGL8xBcQPkkaFru9LDEFPlUz3ZZ1R4fQlu2cnVldK'
});

const messaging = firebase.messaging();
