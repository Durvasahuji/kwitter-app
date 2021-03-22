
var firebaseConfig = {
      apiKey: "AIzaSyCbGSP1qY0VNOktnlsezv5kOcA5I1X7Uqg",
      authDomain: "kwitter-app-dcffe.firebaseapp.com",
      databaseURL: "https://kwitter-app-dcffe-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-dcffe",
      storageBucket: "kwitter-app-dcffe.appspot.com",
      messagingSenderId: "461606697531",
      appId: "1:461606697531:web:2f1e75a2cdd81990b6fa1e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome"+user_name+"!"; 
 function addRoom()
 {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 

       });
       localStorage.setItem("room_name" , room_name);
       window.location = "kwitter_page.html";
 } 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
