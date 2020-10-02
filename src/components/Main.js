import React from 'react';
// import { api } from '../utils/api';
import Card from './Card';
import CurrentUserContext from './../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      {/* Профиль */}
      <section className="profile">
        <div className="profile__img">
          <span className="profile__overlay" onClick={onEditAvatar} />
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__title-row">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__button-edit" onClick={onEditProfile} />
          </div>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button className="profile__button-add" onClick={onAddPlace} />
      </section>
      {/* Места */}
      <section className="elements">
        <ul className="elements__list">

          {cards.map((card) => {
            return (
              <Card
                card={card}
                onCardClick={onCardClick}
                key={card._id}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            )
          })}

        </ul>
      </section>
    </main>
  )
}

export default Main;