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