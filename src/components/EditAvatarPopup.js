import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
    evt.target.reset();
  };

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar-link"
        type="url"
        name="avatar"
        className="popup__input"
        placeholder="Ссылка на аватарку"
        required
        ref={avatarRef}
      />
      <span id="avatar-link-error" className="popup__input_error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;