import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from '../components/Api';
import ConfirmationPopup from '../components/ConfirmationPopup';
import {
  nameInput,
  infoInput,
  editBtn,
  editProfilePopup,
  addPlacePopup,
  addPlaceBtn,
  editAvatarPopup,
  editAvatarBtn,
  configFormValidator
} from '../utils/constants.js';

const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-76",
  headers: { 
    authorization: '45404ad9-3cf7-4026-8e24-1bef622855e8',
    'Content-Type': 'application/json'
  }
});

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
    .catch(console.error)
    .finally(() => deleteCardPopup.changeDeleteBtnText());
  })
};

//Редактирование профиля
function editUserInfo(data) {
  api.profileEdit(data)
    .then (res => {
      userInfo.setUserInfo(res);
      userEditPopup.close();
    })
    .catch(console.error)
    .finally(() => userEditPopup.changeSaveBtnText())
 };
 
 editBtn.addEventListener('click', () => {
   popupProfileDataValidator.resetValidation();
   userEditPopup.open();
   const {about, name} = userInfo.getUserInfo()
   nameInput.value = name;
   infoInput.value = about;
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
    .catch(console.error)
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
      userInfo.setAvatarInfo(res);
      avatarEditPopup.close();
    })
    .catch(console.error)
    .finally(() => avatarEditPopup.changeSaveBtnText());
   };

editAvatarBtn.addEventListener('click', () => {
  popupAvatarEditDataValidator.resetValidation();
  avatarEditPopup.open();
});

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
