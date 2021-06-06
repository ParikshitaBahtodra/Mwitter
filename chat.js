var firebaseConfig = {
    apiKey: "AIzaSyCWA9ENyGy7mNJUgsX2YqApQ2HIm6EmHhQ",
    authDomain: "mwitter-43496.firebaseapp.com",
    databaseURL: "https://mwitter-43496-default-rtdb.firebaseio.com",
    projectId: "mwitter-43496",
    storageBucket: "mwitter-43496.appspot.com",
    messagingSenderId: "726999246978",
    appId: "1:726999246978:web:9600c8fa4f9d352fa46c9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot)  
{document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
