function showError(inputElement, errorElement, config) {
  errorElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.errorClass);
}

function hideError(inputElement, errorElement, config) {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.remove(config.errorClass);
}

function disabaleButton(buttonElement, config) {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass); 
}

function enableButton(buttonElement, config) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass); 
}

function toggleButtonState(buttonElement, isActive, config) {
  if (!isActive) {
    disabaleButton(buttonElement, config);
  } else {
    enableButton(buttonElement, config);
  }
}

function checkInputValidity(inputElement, formElement, config) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (!errorElement) return;


  if (!isInputValid) {
    showError(inputElement, errorElement, config);
  } else {
    hideError(inputElement, errorElement, config);
  }
};

function setEventListener(formElement, config) {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitBtnElement = formElement.querySelector(config.submitBtnSelector);

  toggleButtonState(submitBtnElement, formElement.checkValidity(), config);

  [...inputsList].forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      checkInputValidity(inputItem, formElement, config);
      toggleButtonState(submitBtnElement, formElement.checkValidity(), config);
    })
  })
}

function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);

  [...forms].forEach((formItem) => {
    setEventListener(formItem, config);
  })
}

enableValidation(configFormSelector);
