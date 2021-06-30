var firebaseConfig = {
    apiKey: "AIzaSyD-c0U0TAcBysZTHgVrf2jtoqJXcgFcvfI",
    authDomain: "tmi-project-dcc78.firebaseapp.com",
    databaseURL: "https://tmi-project-dcc78-default-rtdb.firebaseio.com",
    projectId: "tmi-project-dcc78",
    storageBucket: "tmi-project-dcc78.appspot.com",
    messagingSenderId: "1065820344760",
    appId: "1:1065820344760:web:7ad8799b8d9a981fd57f4d",
    measurementId: "G-BR5MSWB1RB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var user_name= localStorage.getItem("un1");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";
function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

