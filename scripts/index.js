// ОТКРЫТИЕ КАРТОЧКИ
const openCardPopup = document.querySelector('#open-card')
const openCardImage = document.querySelector('.open-card__image')
const openCardCaption = document.querySelector('.open-card__caption')

// ДОБАВЛЕНИЕ КАРТОЧКИ
const addForm = document.querySelector('#add-form')
const addCardBtn = document.querySelector('.profile__add')
const addCardPopup = document.querySelector('#add-card')

const cardName = document.querySelector('#addName')
const cardLink = document.querySelector('#addLink')

const cardTemplate = document.querySelector('#card-template').content
const cardsContainer = document.querySelector('.elements')

// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
const editProfileForm = document.querySelector('#editProfileForm')
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

const profileNameForm = document.querySelector('#profile-name')
const profileDescriptionForm = document.querySelector('#profile-description')

const editProfileBtn = document.querySelector('.profile__edit')
const editProfilePopup = document.querySelector('#edit-profile')

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

function createCard(link, name) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

  cardElement.querySelector('.card__image').src = link
  cardElement.querySelector('.card__image').alt = name
  cardElement.querySelector('.card__caption').textContent = name

  cardElement.querySelector('.card__like').addEventListener('click', function (event) {
    event.target.classList.toggle('card__like_active')
  })

  cardElement.querySelector('.card__remove').addEventListener('click', function () {
    cardElement.remove()
  })

  cardElement.querySelector('.card__image').addEventListener('click', () => {
    openCardImage.src = link
    openCardImage.alt = name
    openCardCaption.textContent = name

    openPopup(openCardPopup)
  })

  return cardElement
}

function fillInput() {
  profileNameForm.value = profileName.textContent
  profileDescriptionForm.value = profileDescription.textContent
}

function saveEditForm() {
  profileName.textContent = profileNameForm.value
  profileDescription.textContent = profileDescriptionForm.value
}

function addCard(event) {
  event.preventDefault()

  cardsContainer.prepend(createCard(cardLink.value, cardName.value))

  event.target.reset()

  closePopup(addCardPopup)
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

// ИНИЦИАЛИЗАЦИЯ
initialCards.forEach(i => cardsContainer.append(createCard(i.link, i.name)))

document.querySelectorAll('.popup__close')
  .forEach(button =>
    button.addEventListener('click', () => closePopup(button.closest('.popup')))
  )

editProfileBtn.addEventListener('click', () => {
  fillInput()
  openPopup(editProfilePopup)
})

editProfileForm.addEventListener('submit', (event) => {
  event.preventDefault()
  saveEditForm()
  closePopup(editProfilePopup)
})

addCardBtn.addEventListener('click', () => openPopup(addCardPopup))
addForm.addEventListener('submit', addCard)