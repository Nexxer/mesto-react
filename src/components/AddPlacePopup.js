import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };
  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
    setName('');
    setLink('');
  };

  return (
    <PopupWithForm
      name="add-place"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="place-name"
        type="text"
        name="photoname"
        className="popup__input"
        placeholder="Название"
        required
        minLength={2} maxLength={30}
        value={name}
        onChange={handleNameChange}
      />
      <span id="place-name-error" className="popup__input_error" />
      <input
        id="place-link"
        type="url"
        name="photolink"
        className="popup__input popup__input_compl"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
      />
      <span id="place-link-error" className="popup__input_error" />
    </PopupWithForm>

  );
}
export default AddPlacePopup;