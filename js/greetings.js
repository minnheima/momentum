const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const link = document.querySelector('a');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e){
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);  // 폼자체는 없애주는 것! 
  const username = loginInput.value; // 변수에 입력된 value값은 넣어두고  
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}else {
  // show the greetings
  paintGreetings(savedUsername);
}



