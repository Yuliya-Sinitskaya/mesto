export default class UserInfo {
  constructor({profileName, profileDescription, profileAvatar, userId}) {
    this._userName = document.querySelector(profileName);
    this._userDescription = document.querySelector(profileDescription);
    this._userAvatar = document.querySelector(profileAvatar);
    this._userId = userId;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userDescription.textContent,
      avatar: this._userAvatar.src
    }
  }

  setUserInfo({name, about, avatar}) {
    this._userName.textContent = name;
    this._userDescription.textContent = about;
  }

  setAvatarInfo({avatar}) {
    this._userAvatar.src = avatar;
  }
}