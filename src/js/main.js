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
