window.onload = function () {
  document.getElementById('menu').style.visibility = 'hidden';
}

const MENU = document.querySelector('#menu');
const NAV = document.querySelector('#nav');
const LOGIN_FORM = document.querySelector('#login_form_container');
const LOGIN_FORM2 = document.querySelector('#login_form')
const SIGNUP_FORM = document.querySelector('#signup_form_container');

document.querySelector('#open_menu').addEventListener("click", function () {
  MENU.style.animation = 'showMenu .5s forwards';
});

document.querySelector('#close_menu').addEventListener("click", function () {
  MENU.style.animation = 'hideMenu 1s forwards';
});

document.querySelector('#login').addEventListener("click", function () {
  LOGIN_FORM.style.display = 'block';
  LOGIN_FORM.style.animation = 'showLogin .5s forwards';
  LOGIN_FORM.style.backgroundColor = 'whitesmoke';
  LOGIN_FORM.style.zIndex = '2';
  LOGIN_FORM2.style.visibility = 'hidden';
  setTimeout(function () {
    LOGIN_FORM2.style.visibility = 'visible';
  }, 300);
}); // Login Event Listener

document.querySelector('#close_login').addEventListener("click", function () {
  LOGIN_FORM.style.display = 'none';
}); // Close Login Event Listener

document.querySelector('#signup').addEventListener("click", function () {
  SIGNUP_FORM.style.display = 'block';
  SIGNUP_FORM.style.animation = 'showSignup .5s forwards';
  SIGNUP_FORM.style.backgroundColor = 'whitesmoke';
  SIGNUP_FORM.style.zIndex = '2';
});  // Signup Event Listener

document.querySelector('#close_signup').addEventListener("click", function () {
  SIGNUP_FORM.style.display = 'none';
});  // Close Signup Event Listener

