import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (

    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <button className="element__delete element__delete_hide" />
      <div className="element__info">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes-container">
          <button type="button" className="element__like" />
          <p className="element__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;