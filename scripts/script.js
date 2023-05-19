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

//Карточки для добавления
const initialCards = [
  {
    name: 'Баган, Мьянма',
    link: 'https://images.unsplash.com/photo-1556199859-0a5f16d962a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Ангкор-Ват, Камбоджа',
    link: 'https://images.unsplash.com/photo-1644651051345-d642fc1fcbff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1552735855-557bdba3961a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1568028476727-0c86534220fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80'
  },
  {
    name: 'Долина Йосемити, США',
    link: 'https://images.unsplash.com/photo-1569597408915-cb395eee98b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Река Ли, Китай',
    link: 'https://images.unsplash.com/photo-1556880003-4fcd06418af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
];

//Создание карточки
const createCard = (placeName, imageLink) => {
  const template = cardTemplate.content.querySelector('.card').cloneNode(true);
  const imgPlace = template.querySelector('.card__img');
  imgPlace.src = imageLink;
  template.querySelector('.card__heading').textContent = placeName;
  imgPlace.alt = placeName;
  imgPlace.addEventListener('click', () => openImgPopup(placeName, imageLink));

//Удаление карточки
  const deleteBtn = template.querySelector('.btn_action_delete-card');
  deleteBtn.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });

//Лайк карточки
  const likeCardBtn = template.querySelector('.btn_action_like');
  likeCardBtn.addEventListener ('click', () => {
    likeCardBtn.classList.toggle('btn_action_like-active');
  });

  return template;
};

const templatesList = initialCards.map(({name: placeName, link: imageLink}) => 
createCard(placeName, imageLink));

const renderCard = (placeName, imageLink) => {
  cardsContainer.prepend(createCard(placeName, imageLink));
};

cardsContainer.prepend(...templatesList);

const openImgPopup = (placeName, imageLink) => {
  imgPopup.querySelector('.popup__place-img').src = imageLink;
  imgPopup.querySelector('.popup__place-heading').textContent = placeName;
  imgPopup.querySelector('.popup__place-img').alt = placeName;
  openPopup(imgPopup); 
};