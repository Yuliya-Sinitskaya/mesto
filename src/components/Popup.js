export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup__opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup__opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if(evt.key == 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup__opened')) {
        this.close();
      }
      if (evt.target.classList.contains('btn_action_close-popup')) {
        this.close();
      }
    });
  }
}