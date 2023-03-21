const nameInput = document.querySelector('.popup__input_type_name');
const infoInput = document.querySelector('.popup__input_type_info');
const editButton = document.querySelector('.btn_action_profile-edit');
const popup = document.querySelector('.popup');
const profileName = popup.querySelector('.profile__name');
const profileDescription = popup.querySelector('profile__description');
const closeButton = document.querySelector('.btn_action_close-popup');

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

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = infoInput.value;
  closePopup(popup);
}

popup.addEventListener('submit', handleFormSubmit);