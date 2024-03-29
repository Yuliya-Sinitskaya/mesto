import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._popup.querySelector('.btn_action_save-popup');
    this._submitButtonText = this._submitButton.textContent;
    this._inputList = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Сохранение...`;
      this._handleFormSubmit(this._getInputValues());
    })
  };

  changeSaveBtnText(){
    this._submitButton.textContent = this._submitButtonText;
  }

  close() {
    super.close();
    this._form.reset();
  }

}