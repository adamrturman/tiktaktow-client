'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

// const showGame = function (id) {
//   return $.ajax({
//     headers: {
//       Authorization: 'Bearer ' + store.user.game.id
//     },
//     url: config.apiUrl + '/games/' + id,
//     method: 'GET'
//   })
// }

const updateGame = function (store) {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.user.id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: store.game.cell.index,
          value: store.game.cell.value
        },
        over: store.game.over
      }
    }
  })
}

module.exports = {
  createGame,
  //showGame
   updateGame
}
