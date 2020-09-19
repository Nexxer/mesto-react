import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((values) => {
        const [userInfo, startCards] = values;
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(startCards);
      })
  }, []);

  return (
    <main className="content">
      {/* Профиль */}
      <section className="profile">
        <div className="profile__img">
          <span className="profile__overlay" onClick={onEditAvatar} />
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__title-row">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button-edit" onClick={onEditProfile} />
          </div>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button className="profile__button-add" onClick={onAddPlace} />
      </section>
      {/* Места */}
      <section className="elements">
        <ul className="elements__list">

          {cards.map((card) => {
            return (
              <Card card={card} onCardClick={onCardClick} key={card._id} />
            )
          })}

        </ul>d
      </section>
    </main>
  )
}

export default Main;