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
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const addPlaceBtn = document.querySelector('.btn_action_add-place');
const addPlacePopupCloseBtn = document.querySelector('.btn_action_close-popup-place');
export const imgPopup = document.querySelector('.popup_type_open-img');
export const imgPopupPhoto = imgPopup.querySelector('.popup__place-img');
export const imgPopupHeading = imgPopup.querySelector('.popup__place-heading');
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

function closePopupByEsc(evt) {
  if(evt.key == 'Escape') {
    closePopup(document.querySelector('.popup__opened'));
  }
};

profilePopupCloseBtn.addEventListener('click', (evt) => {
  closePopup(editProfilePopup);
});

addPlacePopupCloseBtn.addEventListener('click', (evt) => {
  closePopup(addPlacePopup);
});

placePopupCloseBtn.addEventListener('click', (evt) => {
  closePopup(imgPopup);
});


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
  openPopup(addPlacePopup);
});

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {name: placeInput.value, link: linkInput.value};
  renderCard(cardData);
  closePopup(addPlacePopup);
}

addPlacePopup.addEventListener('submit', handlePlaceFormSubmit);

const renderCard = (cardData) => {
  const card = new Card(cardData);
  cardsContainer.prepend(card.getView());
};

initialCards.forEach((cardData) => renderCard(cardData));

//Закрыть попап кликом на оверлей  
function closePopupByOverlay(evt) {
  if (evt.target.classList.contains('popup__opened')) {
    closePopup(evt.target);
  }
}

popupList.forEach(popup => {
  popup.addEventListener('click', closePopupByOverlay);
});

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