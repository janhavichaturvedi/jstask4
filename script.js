var loginForm = document.getElementById("loginForm");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var usernameError = document.getElementById("usernameError");
var passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  usernameError.textContent = "";
  passwordError.textContent = "";

  // Validate username
  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username is required";
    usernameInput.classList.add("error-input");
    return;
  }

  // Validate password
  if (passwordInput.value === "") {
    passwordError.textContent = "Password is required";
    passwordInput.classList.add("error-input");
    return;
  }

  // Proceed with login
  alert("Login successful!");
});
