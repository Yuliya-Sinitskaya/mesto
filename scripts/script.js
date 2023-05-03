const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');
const editButton = document.querySelector('.btn_action_profile-edit');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const closeButton = document.querySelector('.btn_action_close-popup');
const saveButton = popup.querySelector('.btn_action_save-popup');

function openPopup() {
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  infoInput.value = profileDescription.textContent;
};

editButton.addEventListener('click', function() {
  openPopup(popup);
});

function closePopup() {
  popup.classList.remove('popup__opened');
};

closeButton.addEventListener('click', function() {
  closePopup(popup);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = infoInput.value;
  closePopup(popup);
}

saveButton.addEventListener('click', function(evt) {
  handleFormSubmit(evt);
});

//Набор карточек 

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

const createCard = (name, link) => {
  const template = cardTemplate.querySelector('.card').cloneNode(true);
  template.querySelector('.card__img').src = link;
  template.querySelector('.card__heading').textContent = name;
  template.querySelector('.card__img').alt = name;
  return template;
}

const templatesList = initialCards.map(({ name, link }) => 
createCard(name, link));

const renderCard = (name, link) => {
  cardsContainer.prepend(createCard(name, link));
};

cardsContainer.prepend(...templatesList);

//Удаление карточки

document.querySelector('.btn_action_delete-card').addEventListener('click', function() {
  document.querySelector('.card').remove();
});
