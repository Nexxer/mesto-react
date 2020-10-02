class Api {
  constructor({ baseUrl, headers }) {
    this.url = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => this._getResponseData(res));
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => this._getResponseData(res));
  }

  setUserInfo(info) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about,
      }),
    })
    .then((res) => this._getResponseData(res));
  }

  setNewAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => this._getResponseData(res));
  }

  postNewCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._getResponseData(res));
  };

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => this._getResponseData(res));
  };

  // setLike(cardId) {
  //   return fetch(`${this.url}/cards/likes/${cardId}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: this.headers.authorization,
  //     },
  //   }).then((res) => this._getResponseData(res));
  // };

  // deleteLike(cardId) {
  //   return fetch(`${this.url}/cards/likes/${cardId}`, {
  //     method: "DELETE",
  //     headers: {
  //       authorization: this.headers.authorization,
  //     },
  //   }).then((res) => this._getResponseData(res));
  // };

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: (isLiked ? "PUT" : "DELETE"),
      headers: {
        authorization: this.headers.authorization,
      },
    }).then((res) => this._getResponseData(res));
  };


  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  };
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: '834b1617-1b88-4942-8049-fea5a8e726ef',
    'Content-Type': 'application/json'
  }
});