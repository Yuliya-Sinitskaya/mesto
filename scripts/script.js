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
const addPlacePopupCloseBtn = document.querySelector('.btn_action_close-popup-place');
const placeSaveButton = document.querySelector('.btn_action_save-popup-place');
const imgPopup = document.querySelector('.popup_type_open-img');
const imgPopupPhoto = imgPopup.querySelector('.popup__place-img');
const imgPopupHeading = imgPopup.querySelector('.popup__place-heading');
const placePopupCloseBtn = document.querySelector('.btn_action_close-popup-img');
const cardsContainer = document.querySelector('.places-grid__container');
const cardTemplate = document.querySelector('#card-template');

function openPopup(popup) {
  popup.classList.add('popup__opened');
};

function closePopup(popup) {
  popup.classList.remove('popup__opened');
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

profileSaveButton.addEventListener('click', (evt) => {
  handleProfileFormSubmit(evt);
});

editProfilePopup.addEventListener('submit', handleProfileFormSubmit);

//попап добавления карточки
addPlaceBtn.addEventListener('click', () => {
  openPopup(addPlacePopup);
});

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeInput.value, linkInput.value);
  closePopup(addPlacePopup);
}

placeSaveButton.addEventListener('click', (evt) => {
  handlePlaceFormSubmit(evt);
});

placeSaveButton.addEventListener('submit', handlePlaceFormSubmit);

//Создание карточки
const createCard = (cardData) => {
  const template = cardTemplate.content.querySelector('.card').cloneNode(true);
  const imgPlace = template.querySelector('.card__img');
  imgPlace.src = cardData.link;
  template.querySelector('.card__heading').textContent = cardData.name;
  imgPlace.alt = cardData.name;

  imgPlace.addEventListener('click', () => openImgPopup(cardData));
  template.querySelector('.btn_action_delete-card').addEventListener('click', deleteCard);
  template.querySelector('.btn_action_like').addEventListener('click', likeCard);

  return template;
};

const renderCard = (cardData) => {
  cardsContainer.prepend(createCard(cardData));
};

initialCards.forEach((cardData) => renderCard(cardData));

//Лайк карточки
function likeCard(evt) {
  evt.target.classList.toggle('btn_action_like-active');
};

//Удаление карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
};

//Открыть попап с картинкой
const openImgPopup = (cardData) => {
  imgPopupPhoto.src = cardData.link;
  imgPopupHeading.textContent = cardData.name;
  imgPopupPhoto.alt = cardData.name;
  openPopup(imgPopup); 
};