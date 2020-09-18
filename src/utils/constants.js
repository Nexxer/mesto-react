// Профиль
export const popupButtonEditProfile = document.querySelector('.profile__button-edit');
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const popupProfile = document.querySelector('.popup_type_profile');
export const formPopupProfile = popupProfile.querySelector('#form-profile');
export const nameInputProfile = formPopupProfile.querySelector('#profile-name');
export const jobInputProfile = formPopupProfile.querySelector('#profile-profession');
export const editAvatarButton = document.querySelector('.profile__overlay');
export const popupAvatarSelector = document.querySelector('.popup_avatar');
export const formPopupAvatar = document.querySelector('#form-avatar');

// Добавление места
export const popupAddPlace = document.querySelector('.profile__button-add');
export const popupPlace = document.querySelector('.popup_type_add-place');
export const formPopupPlace = popupPlace.querySelector('#form-place');

// Просмотр фото
export const popupImage = document.querySelector('.popup_type_photo');
export const popupDeleteCard = document.querySelector('.popup_delete-card');

//Параметры валидации
export const validationParams = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

//Общие
export const submitButton = document.querySelector('.popup__button-save');
