const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');
const editBtn = document.querySelector('.btn_action_profile-edit');
const editProfilePopup = document.querySelector('.popup_type_profile-edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profilePopupCloseBtn = document.querySelector('.btn_action_close-popup-profile');
const saveButton = document.querySelector('.btn_action_save-popup');
const profileSaveButton = document.querySelector('.btn_action_save-popup-profile');
const addPlacePopup = document.querySelector('.popup_type_add-place');
const placeInput = document.querySelector('.popup__input_type_place');
const linkInput = document.querySelector('.popup__input_type_link');
const addPlaceBtn = document.querySelector('.btn_action_add-place');
const placePopupCloseBtn = document.querySelector('.btn_action_close-popup-place');
const placeSaveButton = document.querySelector('.btn_action_save-popup-place');

function openPopup(popup) {
  popup.classList.add('popup__opened');
};

function closePopup(popup) {
  popup.classList.remove('popup__opened');
};

profilePopupCloseBtn.addEventListener('click', (evt) => {
  closePopup(editProfilePopup);
});

placePopupCloseBtn.addEventListener('click', (evt) => {
  closePopup(addPlacePopup);
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

profileSaveButton.addEventListener('click', (evt) => {
  handleProfileFormSubmit(evt);
});

editProfilePopup.addEventListener('submit',handleProfileFormSubmit);

//попап добавления карточки
addPlaceBtn.addEventListener('click', () => {
  openPopup(addPlacePopup);
});

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeInput.value, linkInput.value);
  closePopup(addPlacePopup);
  evt.target.reset();
}

placeSaveButton.addEventListener('click', (evt) => {
  handlePlaceFormSubmit(evt);
});

//Добавление карточек

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


const cardsContainer = document.querySelector('.places-grid__container');
const cardTemplate = document.querySelector('#card-template').content;

//Создание карточки

const createCard = (placeName, imageLink) => {
  const template = cardTemplate.querySelector('.card').cloneNode(true);
  template.querySelector('.card__img').src = imageLink;
  template.querySelector('.card__heading').textContent = placeName;
  template.querySelector('.card__img').alt = placeName;
  return template;
}

const templatesList = initialCards.map(({name: placeName, link: imageLink}) => 
createCard(placeName, imageLink));

const renderCard = (placeName, imageLink) => {
  cardsContainer.prepend(createCard(placeName, imageLink));
};

cardsContainer.prepend(...templatesList);

//Удаление карточки
const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
}
const deleteBtn = document.querySelector('.btn_action_delete-card');
deleteBtn.addEventListener('click', deleteCard);
