var email = document.getElementById("email");
var pass = document.getElementById("pass");
var loginBtn = document.getElementById("loginBtn");
var signupBtn = document.querySelector("#signupBtn");
var username = document.getElementById("name");
var email2 = document.getElementById("email2");
var pass2 = document.getElementById("pass2");

var allUsersData = [];
var currentUser='';

if (localStorage.getItem("allUserData") != null) {
    allUsersData = JSON.parse(localStorage.getItem("allUserData"));

}

function saveUserData(userData) {
  allUsersData.push(userData);
  localStorage.setItem("allUserData", JSON.stringify(allUsersData));
}

function getUserData() {
  return allUsersData;
}

function setCurrentUser(index) {
  currentUser = allUsersData[index];
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

loginBtn.addEventListener("click", function () {

     for (var i = 0; i < allUsersData.length; i++) {
    if (allUsersData[i].email == email.value && allUsersData[i].pass == pass.value && allUsersData[i].email != "" && allUsersData[i].pass != ""
    ) {
      document.getElementById("warning").classList.add("d-none");
      document.getElementById("success").classList.remove("d-none");
      setCurrentUser(i);
      window.location.href = "./home.html";
      return ; // Exit the function after successful login
    } else {
      document.getElementById("warning").classList.remove("d-none");
      document.getElementById("success").classList.add("d-none");
    }
  }
  if (allUsersData.length == 0) {
    document.getElementById("warning").classList.remove("d-none");
  }
  
});
/////////////////////////////////////////////////////

function  sign() {
     var userData = {
    name: username.value,
    email: email2.value,
    pass: pass2.value,
  };
 var warning2 = document.getElementById("warning2");

  var successfulDiv = document.getElementById("successfulDiv");
   if (validateInput()) {
     warning2.classList.add("d-none");
     successfulDiv.classList.remove("d-none");
     saveUserData(userData);

     window.location.href = "./index.html";

   } else {
     successfulDiv.classList.add("d-none");
    warning2.classList.remove("d-none");
  }
}

function validateUsername() {
  var reg = /^[A-Z]|[a-z]{3,}$/;
  return reg.test(name.value);
}

function validateEmail() {
  var reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return reg.test(email2.value);
  
}

function validatePass() {
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  return reg.test(pass2.value);
}

function validateInput() {
  var validinput = validateEmail() && validateUsername() && validatePass();
  return validinput;
}
