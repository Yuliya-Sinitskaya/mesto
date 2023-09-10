import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imgPopupPhoto = this._popup.querySelector('.popup__place-img');
    this._imgPopupHeading = this._popup.querySelector('.popup__place-heading');
  }

  open(name, link) {
    super.open();
    this._imgPopupPhoto.src = link;
    this._imgPopupHeading.textContent = name;
    this._imgPopupPhoto.alt = name;
  }
}