// ОТОБРАЖЕНИЕ КАРТОЧЕК

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsContainer = document.querySelector('.elements')

initialCards.forEach(i => {
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

  cardElement.querySelector('.card__image').src = i.link 
  cardElement.querySelector('.card__caption').textContent = i.name
  cardElement.querySelector('.card__caption').alt = i.name

  cardElement.querySelector('.card__like').addEventListener('click', function(event) {
    event.target.classList.toggle('card__like_active')
  })

  cardElement.querySelector('.card__remove').addEventListener('click', function() {
    cardElement.remove()
  })

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openCardPopup.classList.add('popup_opened')

    openCardImage.src = i.link
    openCardCaption.textContent = i.name
  })
  
  cardsContainer.append(cardElement)
})



// РЕДАКТИРОВАНИЕ ПРОФИЛЯ

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

const profileNameForm = document.querySelector('#profile-name')
const profileDescriptionForm = document.querySelector('#profile-description')

const editProfileBtn = document.querySelector('.profile__edit')
const editProfilePopup = document.querySelector('#edit-profile')
const editProfileClose = document.querySelector('#edit-profile-close')
const editProfileSubmit = document.querySelector('#edit-profie-save')

function fillInput () {
  profileNameForm.value = profileName.textContent
  profileDescriptionForm.value = profileDescription.textContent
}

function openEditPopup() {
  editProfilePopup.classList.add('popup_opened')
  fillInput()
}

function saveEditForm(event) {
  event.preventDefault()
  profileName.textContent = profileNameForm.value
  profileDescription.textContent = profileDescriptionForm.value
  closeEditPopup()
}

function closeEditPopup() {
  editProfilePopup.classList.remove('popup_opened')
}

editProfileBtn.addEventListener('click', openEditPopup)
editProfileClose.addEventListener('click', closeEditPopup)
editProfileSubmit.addEventListener('click', saveEditForm)



// ДОБАВЛЕНИЕ КАРТОЧКИ

const addCardBtn = document.querySelector('.profile__add')
const addCardPopup = document.querySelector('#add-card')
const addCardClose = document.querySelector('#add-card-close')
const addCardSubmit =  document.querySelector('#add-card-save')

const cardName = document.querySelector('#addName')
const cardLink = document.querySelector('#addLink')

const addForm = document.querySelector('#add-form')

function addCard (event) {
  event.preventDefault();

  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

  cardElement.querySelector('.card__image').src = cardLink.value
  cardElement.querySelector('.card__image').alt = cardName.value
  cardElement.querySelector('.card__caption').textContent = cardName.value

  cardElement.querySelector('.card__like').addEventListener('click', function(event) {
    event.target.classList.toggle('card__like_active')
  })

  cardElement.querySelector('.card__remove').addEventListener('click', function() {
    cardElement.remove()
  })

  cardElement.querySelector('.card__image').addEventListener('click', function() {
    openCardPopup.classList.add('popup_opened')
    openCardImage.src = cardElement.querySelector('.card__image').src    
    openCardCaption.textContent = cardElement.querySelector('.card__caption').textContent
  })

  cardsContainer.prepend(cardElement)

  cardLink.value = ''
  cardName.value = ''

  closeAddPopup()
}

function openAddPopup() {
  addCardPopup.classList.add('popup_opened')
}

function closeAddPopup() {
  addCardPopup.classList.remove('popup_opened')
}

addCardBtn.addEventListener('click', openAddPopup)
addCardClose.addEventListener('click', closeAddPopup)
addForm.addEventListener('submit', addCard)



// ОТКРЫТИЕ КАРТОЧКИ

const openCardPopup = document.querySelector('#open-card')
const openCardClose = document.querySelector('#open-card-close')
const openCardImage = document.querySelector('.open-card__image')
const openCardCaption = document.querySelector('.open-card__caption')

function closeCardPopup() {
  openCardPopup.classList.remove('popup_opened')
}

openCardClose.addEventListener('click', closeCardPopup)