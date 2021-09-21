
//ADD YOUR FIREBASE LINKS
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
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
     purpose:"adding user"     

      });
  }