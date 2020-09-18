export const setLoading = function (isLoading) {

  const popupSelector = document.querySelector('.popup_opened')
  const saveButton = popupSelector.querySelector('.popup__button-save');

  if (isLoading === true) {
    saveButton.textContent = 'Сохранение...'
  }
  else {
    saveButton.textContent = 'Сохранить'
  }
};
