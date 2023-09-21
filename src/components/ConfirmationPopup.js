import Popup from './Popup.js';

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._confirmForm = document.querySelector('.popup__form-delete');
    this._confirmDeleteButton = document.querySelector('.btn_action_save-popup-delete');
    this._confirmDeleteText = this._confirmDeleteButton.textContent;
  }

  setConfirmation(callback) {
    this._handleFormSubmit = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit({ cardId: this._cardId, card: this._cardElement });
      this._confirmDeleteButton.textContent = `Удаление...`;
    });
  } 

  open = ({cardId, card}) => {
    super.open();
    this._cardId = cardId
    this._cardElement = card;
  }

  changeDeleteBtnText() {
    this._confirmDeleteButton.textContent = this._confirmDeleteText;
  }
}
  