var user =document.getElementById("userName");
 var userData = localStorage.getItem("currentUser");
 var logoutBtn =document.getElementById("logoutBtn")
 var data = JSON.parse(userData);
 user.innerHTML = data.name;
 logoutBtn.addEventListener('click',function(){
     window.location.href = "../index.html";

 });
 
