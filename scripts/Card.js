class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const newTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return newTemplate;
  }

  _setCardData() {
    this._placeImg = this._newCard.querySelector('.card__img');
    this._placeImg.src = this._link;
    this._placeImg.alt = this._name;
    this._placeHeadiing = this._newCard.querySelector('.card__heading');
    this._placeHeadiing.textContent = this._name;

    this._placeDeleteBtn = this._newCard.querySelector('.btn_action_delete-card');
    this._placeLikeBtn = this._newCard.querySelector('.btn_action_like');
  }

  _handleClickDeleteCard() {
    this._newCard.remove();
  }

  _handleLikeCard() {
    this._placeLikeBtn.classList.toggle('btn_action_like-active');
  }

  _openImgPopup() {
    imgPopupPhoto.src = this._link;
    imgPopupHeading.textContent = this._name;
    imgPopupPhoto.alt = this._name;
    openPopup(imgPopup); 
};
  
  _setListeners() {
    this._placeDeleteBtn.addEventListener('click', () => this._handleClickDeleteCard());
    this._placeLikeBtn.addEventListener('click', () => this._handleLikeCard());
    this._placeImg.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  getView() {
    this._newCard = this._getTemplate()
    this._setCardData();
    this._setListeners();
   
    return this._newCard;
  }
}

export default Card;