function login() {
  const username = document.getElementById("username").value;

  if (!username) {
    alert("Enter username");
    return;
  }

  // show dashboard
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  document.getElementById("welcomeText").innerText =
    "Welcome, " + username;
}

function logout() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
}

function showHome() {
  alert("Home clicked");
}
