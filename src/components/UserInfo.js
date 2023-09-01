export default class UserInfo {
  constructor({profileName, profileDescription}) {
    this._userName = document.querySelector(profileName);
    this._userOccupation = document.querySelector(profileDescription);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userOccupation.textContent
    }
  }

  setUserInfo({userName, userInfo}) {
    this._userName.textContent = userName;
    this._userOccupation.textContent = userInfo;
  }
}