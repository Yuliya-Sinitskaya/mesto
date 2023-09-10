import Popup from './Popup.js';

export default class DeleteCardPopup extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.btn_action_save-popup');
    this._submitButtonText = this._submitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._submitButton.textContent = `${this._submitButton.textContent}...`;
      this._handleFormSubmit(this._cardId);
    }) 
  }
  
  savingDefaultText(){
    this._submitButton.textContent = this._submitButtonText;
  }

}