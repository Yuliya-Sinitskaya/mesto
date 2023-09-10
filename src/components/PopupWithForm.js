import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.btn_action_save-popup');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      this._submitButton.textContent = `${this._submitButton.textContent}...`;
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  };

  savingDefaultText(){
    this._submitButton.textContent = this._submitButtonText;
 }

  close() {
    super.close();
    this._form.reset();
  }

}