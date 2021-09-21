
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyD-5JqV3gEVC25Eb_eg_umL5WybI-WTLLI",
  authDomain: "kwitter-dc2b4.firebaseapp.com",
  databaseURL: "https://kwitter-dc2b4-default-rtdb.firebaseio.com",
  projectId: "kwitter-dc2b4",
  storageBucket: "kwitter-dc2b4.appspot.com",
  messagingSenderId: "280879636630",
  appId: "1:280879636630:web:7c91038909c3b74109a2b7",
  measurementId: "G-XWNQ0M143Q"
};

// Initialize Firebase
firebase.localStorage.getItem("user_name");
user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom()
   {
     room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({ 
     purpose : "adding room name" });
    localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
     }




function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) 
  {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) 
    {
      childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("room name -" + Room_names);
row = "<div class = 'room_name' id = " + Room_names +"oncklick = 'redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>"; 
  document.getElementById("output").innerHTML+= row;




      });});}
getData(); 
function redirectToRoomName(name) 
{ 
  console.log(name); 
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
   } 
   function logout() 
   { 
     localStorage.removeItem("user_name"); 
     localStorage.removeItem("room_name");
      window.location = "kwitter.html"; 
    }