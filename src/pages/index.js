import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from '../components/Api';
import ConfirmationPopup from '../components/ConfirmationPopup';

const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-76",
  headers: { 
    authorization: '45404ad9-3cf7-4026-8e24-1bef622855e8',
    'Content-Type': 'application/json'
  }
});

const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');

const editBtn = document.querySelector('.btn_action_profile-edit');
const editProfilePopup = document.querySelector('.popup_type_profile-edit');

const addPlacePopup = document.querySelector('.popup_type_add-place');
const addPlaceBtn = document.querySelector('.btn_action_add-place');

const editAvatarPopup = document.querySelector('.popup_type_avatar-edit');
const editAvatarBtn = document.querySelector('.profile__avatar-btn');

const userInfo = new UserInfo({profileName: '.profile__name', profileDescription: '.profile__description', profileAvatar: '.profile__avatar'});
const popupAddPlace = new PopupWithForm('.popup_type_add-place', addNewPlace);
const userEditPopup = new PopupWithForm('.popup_type_profile-edit', editUserInfo);
const avatarEditPopup = new PopupWithForm('.popup_type_avatar-edit', editAvatar);
const deleteCardPopup = new ConfirmationPopup ('.popup_type_delete-card');

let userId;

//Создание карточки
const cardList = new Section({
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardList.addItem(cardElement);
  }
},
  ".cards"
);

const createCard = (cardData) => {
  const card = new Card({
    cardData, userId, 
    
    handleLikeCard: () => {
    if (card.isLiked()) {
      api.deleteLike(cardData._id).then((cardData) => {
        card.deleteLike()
        card.countLikes(cardData.likes)      
      }).catch((err) => { console.log(err) })
      } else {
       api.addLike(cardData._id).then((cardData) => {
        card.addLike();
        card.countLikes(cardData.likes);
      }).catch((err) => { console.log(err) });
    }
  }},
    
    deleteCard,
    '#card-template',
    openImgPopup
  )
    return card.getView();
  }

  Promise.all([api.getAllCards(), api.getUserData()])
  .then(([cardData, userData]) => {
    userId = userData._id;
    cardList.renderItems(cardData);
    cardData.forEach((item) => {
      createCard(item);
    });
  userInfo.setUserInfo({name: userData.name, about: userData.about});
  userInfo.setAvatarInfo({avatar: userData.avatar});
  })
  .catch((err) => {
    console.log(err);
  });

//Удаление карточки
function deleteCard({cardId, card }) {
  deleteCardPopup.open({cardId, card });
  deleteCardPopup.setConfirmation( () => {
     api.deleteCard(cardId)
    .then(() => {
      card.remove();
      deleteCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => deleteCardPopup.changeDeleteBtnText());
  })
};

//Редактирование профиля
function editUserInfo(data) {
  api.profileEdit(data)
    .then (res => {
      userInfo.setUserInfo({ name: res.name, about: res.about});
      userEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => userEditPopup.changeSaveBtnText())
 };
 
 editBtn.addEventListener('click', () => {
   popupProfileDataValidator.resetValidation();
   userEditPopup.open();
   nameInput.value = userInfo.getUserInfo().name;
   infoInput.value = userInfo.getUserInfo().about;
 });


//Открытие попапа с описанием и фото
const imagePopup = new PopupWithImage('.popup_type_open-img');
imagePopup.setEventListeners();

function openImgPopup(name, link) {
 imagePopup.open(name, link);
}

//попап добавления карточки
function addNewPlace(data) {
  api.addNewCard(data)
    .then((res) => {
      const newCardElement = createCard(res);
      cardList.addItem(newCardElement);
      popupAddPlace.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupAddPlace.changeSaveBtnText());
 };

addPlaceBtn.addEventListener('click', () => {
  popupPlaceDataValidator.resetValidation();
  popupAddPlace.open();
});

//редактирование фотографии профиля
function editAvatar (data) {
  api.profileAvatarEdit(data)
    .then(res => {
      userInfo.setAvatarInfo({ avatar: res.avatar });
      avatarEditPopup.close();
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => avatarEditPopup.changeSaveBtnText());
   };

editAvatarBtn.addEventListener('click', () => {
  popupAvatarEditDataValidator.resetValidation();
  avatarEditPopup.open();
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

const popupAvatarEditDataValidator = new FormValidator(configFormValidator, editAvatarPopup);
popupAvatarEditDataValidator.enableValidation();

userEditPopup.setEventListeners();
popupAddPlace.setEventListeners();
avatarEditPopup.setEventListeners();
deleteCardPopup.setEventListeners();
