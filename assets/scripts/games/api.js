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


const updateGame = function (clickedCellData) {
  return $.ajax({
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      "game": {
        "cell": {
          "index": clickedCellData,
          "value": store.currentValue
        },
        "over": store.currentStatus
    }
  }
})
}
const indexGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'GET',
    data: {
      games: []
    }
  })
}
module.exports = {
  createGame,
  updateGame,
  indexGame
}
