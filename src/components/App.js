import React from 'react';
import './index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <input
            id="avatar-link"
            type="url"
            name="avatar"
            className="popup__input"
            placeholder="Ссылка на аватарку"
            required />

          <span id="avatar-link-error" className="popup__input_error" />
        </PopupWithForm>

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <input
            id="profile-name"
            type="text" name="name"
            className="popup__input"
            placeholder="Имя"
            required
            minLength={2} maxLength={40} />

          <span id="profile-name-error" className="popup__input_error" />

          <input
            id="profile-profession"
            type="text" name="about"
            className="popup__input popup__input_compl"
            placeholder="О себе"
            required
            minLength={2} maxLength={200} />

          <span id="profile-profession-error" className="popup__input_error" />
        </PopupWithForm>

        <PopupWithForm
          name="add-place"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <input
            id="place-name"
            type="text"
            name="photoname"
            className="popup__input"
            placeholder="Название"
            required
            minLength={2} maxLength={30} />

          <span id="place-name-error" className="popup__input_error" />

          <input
            id="place-link"
            type="url"
            name="photolink"
            className="popup__input popup__input_compl"
            placeholder="Ссылка на картинку"
            required />

          <span id="place-link-error" className="popup__input_error" />
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          isOpen={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </div >

  );
}

export default App;
