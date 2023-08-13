import Card from "./Card.js";
import { initialCards } from "./constants.js";
import FormValidator from "./FormValidator.js";

const popupList = document.querySelectorAll('.popup');
const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');
const editBtn = document.querySelector('.btn_action_profile-edit');
const editProfilePopup = document.querySelector('.popup_type_profile-edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profilePopupCloseBtn = document.querySelector('.btn_action_close-popup-profile');
const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlaceForm = document.querySelector('.popup__form-place');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const addPlaceBtn = document.querySelector('.btn_action_add-place');
const addPlacePopupCloseBtn = document.querySelector('.btn_action_close-popup-place');
const imgPopup = document.querySelector('.popup_type_open-img');
const imgPopupPhoto = imgPopup.querySelector('.popup__place-img');
const imgPopupHeading = imgPopup.querySelector('.popup__place-heading');
const placePopupCloseBtn = document.querySelector('.btn_action_close-popup-img');
const cardsContainer = document.querySelector('.places-grid__container');

export function openPopup(popup) {
  popup.classList.add('popup__opened');
  document.addEventListener('keydown', closePopupByEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup__opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

//закрытие попапов
function closePopupByEsc(evt) {
  if(evt.key == 'Escape') {
    closePopup(document.querySelector('.popup__opened'));
  }
};

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('btn_action_close-popup')) {
        closePopup(popup)
      }
  })
})

//попап редактирования профиля
editBtn.addEventListener('click', () => {
  openPopup(editProfilePopup);
  nameInput.value = profileName.textContent;
  infoInput.value = profileDescription.textContent;
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = infoInput.value;
  closePopup(editProfilePopup);
};

editProfilePopup.addEventListener('submit', handleProfileFormSubmit);

//попап добавления карточки
addPlaceBtn.addEventListener('click', () => {
  popupPlaceDataValidator.resetValidation();
  openPopup(addPlacePopup);
});


function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {name: placeInput.value, link: linkInput.value};
  renderCard(cardData);
  addPlaceForm.reset()
  closePopup(addPlacePopup);
}

addPlacePopup.addEventListener('submit', handlePlaceFormSubmit);

//Создание карточки
function createCard(item) {
  const cardElement = new Card(item, '#card-template', handleCardClick);
  return cardElement.getView();
}

const renderCard = (cardData) => {
  const card = createCard(cardData);
  cardsContainer.prepend(card);
};

initialCards.forEach(renderCard);

//Открытие попапа с описанием и фото
function handleCardClick(name, link) {
  imgPopupPhoto.src = link;
  imgPopupHeading.textContent = name;
  imgPopupPhoto.alt = link;
  openPopup(imgPopup); 
}

//Валидация форм 
const configFormValidator = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitBtnSelector: '.btn_action_save-popup',
  inactiveBtnClass: 'btn_action_save-popup-disabled',
  inputErrorClass: 'popup__input-error-active',
  errorClass: 'popup__input-error'
}

const popupProfileDataValidator = new FormValidator(configFormValidator, editProfilePopup);
popupProfileDataValidator.enableValidation();

const popupPlaceDataValidator = new FormValidator(configFormValidator, addPlacePopup);
popupPlaceDataValidator.enableValidation();