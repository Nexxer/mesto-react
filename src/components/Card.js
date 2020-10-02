import React from 'react';
import CurrentUserContext from './../contexts/CurrentUserContext';


function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete ${isOwn ? '' : 'element__delete element__delete_hide'}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like ${isLiked ? 'elememt__like_active' : ''}`
  );

  function handleClick() { props.onCardClick(props.card); }

  function handleLikeClick() { props.onCardLike(props.card); }

  function handleDeleteCard() { props.onCardDelete(props.card); }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <li className="element">
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
        <button
          className={cardDeleteButtonClassName}
          onClick={handleDeleteCard}
        />
        <div className="element__info">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__likes-container">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            />
            <p className="element__likes">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </CurrentUserContext.Provider >
  )
}

export default Card;