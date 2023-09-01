import './index.css';
import { 
  initialCards,
} from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js"

const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');

const editBtn = document.querySelector('.btn_action_profile-edit');
const editProfilePopup = document.querySelector('.popup_type_profile-edit');

const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlaceBtn = document.querySelector('.btn_action_add-place');

//Создание карточки
function createCard(item) {
  const cardElement = new Card(item, '#card-template', handleCardClick);
  return cardElement.getView();
}

const cardList = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const card = createCard(cardData);
    cardList.addItem(card);
  }
},
".cards"
);
cardList.renderItems();

//Открытие попапа с описанием и фото
const imagePopup = new PopupWithImage('.popup_type_open-img');
imagePopup.setEventListeners();

function handleCardClick(name, link) {
 imagePopup.open(name, link);
}

//попап редактирования профиля
const userInfo = new UserInfo({profileName: '.profile__name', profileDescription: '.profile__description'})
const userEditPopup = new PopupWithForm('.popup_type_profile-edit', (data) => {
  const newUserData = {userName: data.name, userInfo: data.info}
  userInfo.setUserInfo(newUserData);
});

editBtn.addEventListener('click', () => {
  popupProfileDataValidator.resetValidation();
  userEditPopup.open();
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.name;
  infoInput.value = currentUserInfo.info;
});

//попап добавления карточки
const popupAddPlace = new PopupWithForm('.popup_type_add-place' , (data) => {
  const newCardData = {name: data.place, link: data.link}
  const newCard = createCard(newCardData);
  cardList.addItem(newCard);
});

addPlaceBtn.addEventListener('click', () => {
  popupPlaceDataValidator.resetValidation();
  popupAddPlace.open();
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

userEditPopup.setEventListeners();
popupAddPlace.setEventListeners();