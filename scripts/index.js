let popup = document.querySelector('.popup')

let editButton = document.querySelector('.profile__edit')
let closeButton = document.querySelector('.popup__close')

let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description')

let formName = document.querySelector('.popup__input_type_name')
let formDescription = document.querySelector('.popup__input_type_description')

let form = document.querySelector('.popup__edit')

function openPopup() {
  popup.classList.add('popup_opened')
  fillInput()
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function fillInput () {
  formName.value = profileName.textContent
  formDescription.value = profileDescription.textContent
}

function formSave(event) {
  event.preventDefault()

  profileName.textContent = formName.value
  profileDescription.textContent = formDescription.value

  closePopup()
}

editButton.addEventListener('click', openPopup)

closeButton.addEventListener('click', closePopup)

form.addEventListener('submit', formSave)