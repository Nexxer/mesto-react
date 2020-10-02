import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from './../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handlDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(name);
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="profile-name"
        type="text"
        name="name"
        className="popup__input"
        placeholder="Имя"
        required
        minLength={2}
        maxLength={40}
        value={name || ""}
        onChange={handleNameChange}
      />

      <span id="profile-name-error" className="popup__input_error" />

      <input
        id="profile-profession"
        type="text"
        name="about"
        className="popup__input popup__input_compl"
        placeholder="О себе"
        required
        minLength={2}
        maxLength={200}
        value={description || ""}
        onChange={handlDescriptionChange}
      />

      <span id="profile-profession-error" className="popup__input_error" />
    </PopupWithForm>
  )
}

export default EditProfilePopup;