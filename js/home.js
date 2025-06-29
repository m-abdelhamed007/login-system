var user =document.getElementById("userName");
 var userData = localStorage.getItem("currentUser");
 var data = JSON.parse(userData);
 user.innerHTML = data.name;