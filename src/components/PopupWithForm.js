import React from 'react';


function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          id={`form-${props.name}`}
          className="popup__form"
          noValidate
        >
          {props.children}
          <button
            type="submit"
            className="popup__button-save"
            onSubmit={props.onSubmit}
          >Сохранить</button>
        </form>
        <button
          className="popup__button-close"
          onClick={props.onClose}
        />
      </div>
    </div>
  )
}

export default PopupWithForm