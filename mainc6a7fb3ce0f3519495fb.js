(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setCardData",value:function(){this._placeImg=this._newCard.querySelector(".card__img"),this._placeImg.src=this._link,this._placeImg.alt=this._name,this._placeHeadiing=this._newCard.querySelector(".card__heading"),this._placeHeadiing.textContent=this._name,this._placeDeleteBtn=this._newCard.querySelector(".btn_action_delete-card"),this._placeLikeBtn=this._newCard.querySelector(".btn_action_like")}},{key:"_handleClickDeleteCard",value:function(){this._newCard.remove()}},{key:"_handleLikeCard",value:function(){this._placeLikeBtn.classList.toggle("btn_action_like-active")}},{key:"_setListeners",value:function(){var t=this;this._placeDeleteBtn.addEventListener("click",(function(){return t._handleClickDeleteCard()})),this._placeLikeBtn.addEventListener("click",(function(){return t._handleLikeCard()})),this._placeImg.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"getView",value:function(){return this._newCard=this._getTemplate(),this._setCardData(),this._setListeners(),this._newCard}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();const r=n;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}const u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitBtnSelector=e.submitBtnSelector,this._inactiveButtonClass=e.inactiveBtnClass,this._errorClass=e.errorClass,this._inputErrorClass=e.inputErrorClass,this._buttonElement=n.querySelector(this._submitBtnSelector),this._inputsList=n.querySelectorAll(this._inputSelector),this._formElement=n}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){e.textContent=t.validationMessage,e.classList.add(this._errorClass),t.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){var e=this._formElement.querySelector("#".concat(t.name,"-error"));t.validity.valid?this._hideError(t,e):this._showError(t,e)}},{key:"_disableButton",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_enableButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputsList.forEach((function(e){var n=t._formElement.querySelector("#".concat(e.name,"-error"));t._hideError(e,n)}))}},{key:"_hasInvalidInput",value:function(){return Array.from(this._inputsList).some((function(t){return!t.validity.valid}))}},{key:"_setEventListener",value:function(){var t=this;this._toggleButtonState(),this._inputsList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState(e,t._buttonElement)}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function l(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var s=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"==t.key&&i.close()},(r=l(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup__opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup__opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup__opened")&&t.close(),e.target.classList.contains("btn_action_close-popup")&&t.close()}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(r);if(o){var n=b(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(e){return t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;y(b(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){y(b(u.prototype),"close",this).call(this),this._form.reset()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imgPopupPhoto=e._popup.querySelector(".popup__place-img"),e._imgPopupHeading=e._popup.querySelector(".popup__place-heading"),e}return e=u,(n=[{key:"open",value:function(t,e){this._imgPopupPhoto.src=e,this._imgPopupHeading.textContent=t,this._imgPopupPhoto.alt=t,_(S(u.prototype),"open",this).call(this)}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(s);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var j=function(){function t(e){var n=e.profileName,r=e.profileDescription;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userOccupation=document.querySelector(r)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userOccupation.textContent}}},{key:"setUserInfo",value:function(t){var e=t.userName,n=t.userInfo;this._userName.textContent=e,this._userOccupation.textContent=n}}],n&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var O=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=r}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}new(function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"getAllCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject(new Error("Возникла ошибка"))}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-74",headers:{authorization:"c7b37ba6-b121-49e8-b8ff-b6b8c542103c","Content-Type":"application/json"}}).getAllCards().then((function(t){t.forEach((function(e){t.renderItems(e),console.log(t)}))}));var B=document.querySelector(".popup__input_type_name"),D=document.querySelector(".popup__input_type_info"),q=document.querySelector(".btn_action_profile-edit"),I=document.querySelector(".popup_type_profile-edit"),T=document.querySelector(".popup_type_add-place"),H=document.querySelector(".btn_action_add-place");function V(t){return new r(t,"#card-template",A).getView()}var M=new O({items:[{name:"Баган, Мьянма",link:"https://images.unsplash.com/photo-1556199859-0a5f16d962a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},{name:"Ангкор-Ват, Камбоджа",link:"https://images.unsplash.com/photo-1644651051345-d642fc1fcbff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=848&q=80"},{name:"Байкал",link:"https://images.unsplash.com/photo-1552735855-557bdba3961a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"},{name:"Камчатка",link:"https://images.unsplash.com/photo-1568028476727-0c86534220fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"},{name:"Долина Йосемити, США",link:"https://images.unsplash.com/photo-1569597408915-cb395eee98b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"},{name:"Река Ли, Китай",link:"https://images.unsplash.com/photo-1556880003-4fcd06418af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"}],renderer:function(t){var e=V(t);M.addItem(e)}},".cards"),R=new g(".popup_type_open-img");function A(t,e){R.open(t,e)}R.setEventListeners();var G=new j({profileName:".profile__name",profileDescription:".profile__description"}),N=new h(".popup_type_profile-edit",(function(t){var e={userName:t.name,userInfo:t.info};G.setUserInfo(e)}));q.addEventListener("click",(function(){U.resetValidation(),N.open();var t=G.getUserInfo();B.value=t.name,D.value=t.info}));var W=new h(".popup_type_add-place",(function(t){var e=V({name:t.place,link:t.link});M.addItem(e)}));H.addEventListener("click",(function(){F.resetValidation(),W.open()}));var Y={formSelector:".popup__form",inputSelector:".popup__input",submitBtnSelector:".btn_action_save-popup",inactiveBtnClass:"btn_action_save-popup-disabled",inputErrorClass:"popup__input-error-active",errorClass:"popup__input-error"},U=new u(Y,I);U.enableValidation();var F=new u(Y,T);F.enableValidation(),N.setEventListeners(),W.setEventListeners()})();