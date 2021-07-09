const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const usernameKey = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameInput = loginInput.value;
  localStorage.setItem(usernameKey, usernameInput);
  paintGreeting(usernameInput);
}
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(usernameKey);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
