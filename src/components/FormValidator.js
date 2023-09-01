class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitBtnSelector = config.submitBtnSelector;
    this._inactiveButtonClass = config.inactiveBtnClass;
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._buttonElement = formElement.querySelector(this._submitBtnSelector);
    this._inputsList = formElement.querySelectorAll(this._inputSelector);
    this._formElement = formElement;
  }
  
  _showError(inputElement, errorElement) {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }

  _hideError(inputElement, errorElement) {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
   
    if (!inputElement.validity.valid) {
      this._showError(inputElement, errorElement);
    } else {
      this._hideError(inputElement, errorElement);
    }
  };

  _disableButton() {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass); 
  }

  _enableButton() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._inactiveButtonClass); 
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  resetValidation() {
    this._toggleButtonState();
    
    this._inputsList.forEach(inputElement => {
      const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
      this._hideError(inputElement, errorElement);
    });
  }

  _hasInvalidInput() {
    return Array.from(this._inputsList).some(inputElement => 
      !inputElement.validity.valid
    );
  }

  _setEventListener() {
    this._toggleButtonState();

    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElement, this._buttonElement);
      })
    })
  }
 
  enableValidation() {
    this._setEventListener();
  }
}

export default FormValidator;
