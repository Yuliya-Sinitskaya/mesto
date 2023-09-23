class Card {
  constructor({cardData, userId, handleLikeCard}, handleDeleteConfirmation, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._userId = userId;
    this._myCard = userId === (cardData.owner ? cardData.owner._id : '');
    this._cardId = cardData._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteConfirmation = handleDeleteConfirmation;
    this._handleLikeCard = handleLikeCard;
  }

  _getTemplate() {
    const newTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);
    return newTemplate;
  }

  remove() {
   this._newCard.remove();
  }

  _deleteTrashBtn() {
    if (this._myCard) {
      this._placeDeleteBtn.style.display = 'block';
    } else {
     this._placeDeleteBtn.style.display = 'none';
   }
  }

  _setCardData() {
    this._placeImg = this._newCard.querySelector('.card__img');
    this._placeImg.src = this._link;
    this._placeImg.alt = this._name;
    this._placeHeadiing = this._newCard.querySelector('.card__heading');
    this._placeHeadiing.textContent = this._name;
    this._placeDeleteBtn = this._newCard.querySelector('.btn_action_delete-card');
    this._placeLikeBtn = this._newCard.querySelector('.btn_action_like');
    this._placeLikesQuantity = this._newCard.querySelector('.card__number-likes');
  }

  isLiked() {
    return this._likes.some(item => item._id === this._userId);
  }

  countLikes(data) {
    this._likes = data;
    this._placeLikesQuantity.textContent = data.length;
  }

  _getLikeStatus() {
    if (this.isLiked()) {
      this.addLike();
    } else {
      this.deleteLike();
    }
  }

  addLike = () => {
    this._placeLikeBtn.classList.add('btn_action_like-active');
  }

  deleteLike = () => {
    this._placeLikeBtn.classList.remove('btn_action_like-active');
  } 

 
  _setListeners() {
    this._placeDeleteBtn.addEventListener('click', () => {
      this._handleDeleteConfirmation({cardId: this._cardId, card: this});
    });
   
    this._placeLikeBtn.addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._placeImg.addEventListener('click', () => {
     this._handleCardClick(this._name, this._link)
    });
  }

  getView() {
    this._newCard = this._getTemplate()
    this._setCardData();
    this._setListeners();
    this.countLikes(this._likes);
    this._getLikeStatus();
    this._deleteTrashBtn();
   
    return this._newCard;
  }
}

export default Card;