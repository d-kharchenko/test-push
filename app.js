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
    apiKey: "AIzaSyATfSHLPelSo8mkaoUJt-Sc2FQaz_1mKEQ",
    authDomain: "sushi-97014.firebaseapp.com",
    databaseURL: "https://sushi-97014.firebaseio.com",
    projectId: "sushi-97014",
    storageBucket: "sushi-97014.appspot.com",
    messagingSenderId: "103953800507"
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


