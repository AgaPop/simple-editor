
"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


// zapamietywanie danych
const name = document.querySelector('.form__input--name--js');
const surname = document.querySelector('.form__input--surname--js');
const description = document.querySelector('.form__textarea--js');

const buttonLoad = document.querySelector('.form__button--load-js');
const buttonSave = document.querySelector('.form__button--save-js');



buttonSave.addEventListener('click', (e) => {
    e.preventDefault(); /*blokuje domyslne wysylanie formularza*/
    localStorage.setItem('name', name.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('description', description.value);   
});


buttonLoad.addEventListener('click', (e) => {
    e.preventDefault();    
    description.value = localStorage.getItem('description');  
    surname.value = localStorage.getItem('surname'); 
    name.value = localStorage.getItem('name');                    
});
