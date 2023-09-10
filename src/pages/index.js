import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from '../components/Api';
import DeleteCardPopup from '../components/DeleteCardPopup';

const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: { 
    authorization: 'c7b37ba6-b121-49e8-b8ff-b6b8c542103c',
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

let userId;
const userInfo = new UserInfo({profileName: '.profile__name', profileDescription: '.profile__description', profileAvatar: '.profile__avatar'});

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
        card.setLike();
        card.countLikes(cardData.likes);
      }).catch((err) => { console.log(err) });
    }
  },
  handleDeleteCard: () => {
    deleteCardPopup.open();
     api.deleteCard(cardData._id)
      .then(() => {
        removeCard();
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => deleteCardPopup.savingDefaultText());
  }
 },
  '#card-template',
  handleCardClick,
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
    userInfo.setUserInfo({name: userData.name, about: userData.about, avatar: userData.avatar});
  })
  .catch((err) => {
    console.log(err);
  });


//попап редактирования профиля
const userEditPopup = new PopupWithForm('.popup_type_profile-edit', (data) => {
  api.profileEdit(data)
    .then (res => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar });
      userEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => userEditPopup.savingDefaultText());
 });
 
 editBtn.addEventListener('click', () => {
   popupProfileDataValidator.resetValidation();
   userEditPopup.open();
   nameInput.value = userInfo.getUserInfo().name;
   infoInput.value = userInfo.getUserInfo().about;
 });


//Открытие попапа с описанием и фото
const imagePopup = new PopupWithImage('.popup_type_open-img');
imagePopup.setEventListeners();

function handleCardClick(name, link) {
 imagePopup.open(name, link);
}

//Попап для подтверждения удаления карточки
const deleteCardPopup = new DeleteCardPopup('.popup_type_delete-card');
  
//попап добавления карточки
const popupAddPlace = new PopupWithForm('.popup_type_add-place' , (data) => {
  
  api.createNewCard(data)
    .then((res) => {
      const newCardElement = createCard(res);
      cardList.addItem(newCardElement);
      popupAddPlace.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupAddPlace.savingDefaultText());
 });

addPlaceBtn.addEventListener('click', () => {
  popupPlaceDataValidator.resetValidation();
  popupAddPlace.open();
});


//попап редактирования фотографии профиля
const avatarEditPopup = new PopupWithForm('.popup_type_avatar-edit', (data) => {
      api.profileAvatarEdit(data)
      .then(res => {
        userInfo.setUserInfo({ avatar: res.avatar });
        avatarEditPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => avatarEditPopup.savingDefaultText());
   });

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
