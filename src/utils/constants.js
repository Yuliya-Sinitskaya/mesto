export const nameInput = document.querySelector('.popup__input_type_name');
export const infoInput = document.querySelector('.popup__input_type_info');

export const editBtn = document.querySelector('.btn_action_profile-edit');
export const editProfilePopup = document.querySelector('.popup_type_profile-edit');

export const addPlacePopup = document.querySelector('.popup_type_add-place');
export const addPlaceBtn = document.querySelector('.btn_action_add-place');

export const editAvatarPopup = document.querySelector('.popup_type_avatar-edit');
export const editAvatarBtn = document.querySelector('.profile__avatar-btn');

//Валидация форм 
export const configFormValidator = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitBtnSelector: '.btn_action_save-popup',
  inactiveBtnClass: 'btn_action_save-popup-disabled',
  inputErrorClass: 'popup__input-error-active',
  errorClass: 'popup__input-error'
}