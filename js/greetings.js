const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hello = document.querySelector("#greeting h1");
const logout = document.querySelector("#greeting button");
const todo = document.querySelector("#todo");
const quotebox = document.querySelector("#quote");
const gps = document.querySelector("#gps");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    hello.innerText = `Hello ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    quotebox.classList.replace("before","after");
    gps.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout(event){
    event.preventDefault();
    gps.classList.add(HIDDEN_CLASSNAME);
    quotebox.classList.replace("after","before");
    todo.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}

logout.addEventListener("click",onLogout);