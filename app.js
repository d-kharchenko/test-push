// var isTooSoon = true;
// window.addEventListener("beforeinstallprompt", function(e) { 
//   if (isTooSoon) {
//     e.preventDefault(); // Prevents prompt display 
//     // Prompt later instead: 
//     setTimeout(function() { 
//       isTooSoon = false; 
//       e.prompt(); // Shows prompt 
//     }, 1000); 
//   } 

//   // The event was re-dispatched in response to our request 
//   // ... 
// }); 
// var config = {
//     apiKey: "AAAALvxyJ78:APA91bFKjtFmQRluBOMjOSczBj2kmqmQv0_GgN699fy2ohJra0WPdHjICI35GXGwhkL1yxRbIjKc0dakICq6XtERZ9HMA0WovlSJGL8xBcQPkkaFru9LDEFPlUz3ZZ1R4fQlu2cnVldK",
//     authDomain: "sushi-97014.firebaseio.com/",
//     databaseURL: "https://sushi-97014.firebaseio.com/",
//     storageBucket: "sushi-97014.appspot.com",
//     messagingSenderId: "201803835327",
//   };
//   firebase.initializeApp(config);
  
//   const messaging = firebase.messaging();

//   messaging.requestPermission()
//   .then(function(){
//   	console.log('hello')
//     return messaging.getToken()
//   })
//   .then(function(token){
//     console.log(token)
//   })
//   .catch(function(err){
//   	console.log('error message')
//   })

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('pwabuilder-sw.js')
    .then(reg => {
      console.log('service work');
      reg.pushManager.subscribe({userVisibleOnly: true})
      .then(function(sub){
        console.log('update server', sub)
      }).catch(function(error){
        console.log('unable', error)
      })
    })

 }
