import React from 'react'

function ImagePopup(props) {

  if (!props.card) {
    return (
      props.card
        ? (
          <div className={`popup popup_type_photo ${props.isOpen && `popup_opened`}`}>
            <figure className="popup__content">
              <img className="popup__image" src={props.card.link} alt="Фото места" />
              <figcaption className="popup__caption">{props.card.name}</figcaption>
              <button className="popup__button-close popup__button-close_for_img" onClick={props.onClose} />
            </figure>
          </div>
        )
        : null
    )
  }
}

export default ImagePopup