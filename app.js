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

  // The event was re-dispatched in response to our request 
  // ... 
// }); 


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
  messaging.requestPermission()
  .then(function(){
  	console.log('hello')
    return messaging.getToken()
  })
  .then(function(token){
    console.log(token)
  })
  .catch(function(err){
  	console.log('error message', err)
  })


