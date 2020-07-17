'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// const onShowGame = function (id) {
//   event.preventDefault()
//   api.showGame()
//     .then(ui.showGameSuccess)
//     .catch(ui.showGameFailure)
// }

const onUpdateGame = function (event) {
  event.preventDefault()
  //  figure out who the current player is
  //  figure out of if someone won
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onCreateGame,
  //onShowGame,
  onUpdateGame
}
