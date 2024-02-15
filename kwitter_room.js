var firebaseConfig = {
      apiKey: "AIzaSyDl0_tPtmZDNBBp4Tlm2e_mXgPjg4KFVdE",
      authDomain: "recipely-3.firebaseapp.com",
      databaseURL: "https://recipely-3-default-rtdb.firebaseio.com",
      projectId: "recipely-3",
      storageBucket: "recipely-3.appspot.com",
      messagingSenderId: "970548568505",
      appId: "1:970548568505:web:2e632f9f9f059881d7d668"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +user_name+"!"

function addRecipe() 
{
      recipe_name = document.getElementById("recipe_name").value;
      ingredient_name = document.getElementById("ingredient_name").value;
      method_name = document.getElementById("method_name").value;
      firebase.database().ref("/").child(recipe_name).update({
            purpose:"adding recipe"
      });
      firebase.database().ref("/").child(ingredient_name).update({
            purpose:"adding ingredients"
      });
      firebase.database().ref("/").child(method_name).update({
            purpose:"adding method"
      });
      localStorage.setItem("recipe_name", recipe_name);
      localStorage.setItem("ingredient_name", ingredient_name);
      localStorage.setItem("method_name", method_name);

      window.location = "kwitter_page.html";


}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Recipe_names = childKey;
      //Start code
      row = "<div class='recipe_name' id="+Recipe_names+" onclick = 'redirectToRecipeName(this.id)'>"+Recipe_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRecipeName(name) 
{
  localStorage.setItem("recipe_name", name);
  window.location = "kwitter_page.html";
}

function logOut() 
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("recipe_name");
   window.location = "index.html";  
}