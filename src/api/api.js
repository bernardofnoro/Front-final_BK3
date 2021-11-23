const Api = {
  apiUrl: 'https://api-front-back.herokuapp.com/rpg',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listall`),
  fetchGetById: id => fetch(`${Api.apiUrl}/listid/${id}`),
  fetchPost: (jogo) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jogo)
    })
  },
  fetchPut: (jogo, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(jogo)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;