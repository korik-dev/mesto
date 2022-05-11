let popup = document.querySelector('.popup');

function popupToggle() {
  popup.classList.toggle('popup__opened')
};

let editButton = document.querySelector('.profile__edit');
editButton.addEventListener('click', popupToggle);

let closeButton = document.querySelector('.popup__close');
closeButton.addEventListener('click', popupToggle);

let saveButton = document.querySelector('.popup__save');

let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description')

let formName = document.querySelector('#formName')
let formDescription = document.querySelector('#formDescription')

formName.placeholder = profileName.textContent
formDescription.placeholder = profileDescription.textContent

function formSave() {  
  profileName.textContent = formName.value
  formName.placeholder = formName.value
  profileDescription.textContent = formDescription.value
  formDescription.placeholder = formDescription.value

  popupToggle()
};

saveButton.addEventListener('click', formSave);

