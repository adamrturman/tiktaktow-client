'use strict'
const store = require('../store')


const createGameSuccess = function (response) {
    $('#message').text('The game has started!')

    store.game = response.game
  //  console.log(store.game)
    // console.log('store: ', store)
    // console.log('token: ', store.user.token)
    // console.log(store.game.cells)
    // console.log(store.game.over)
  }
//  This might be redundant
const createGameFailure = function () {
  $('#message').text('Umm....')
}

// const showGameSuccess = function (event) {
//   $('#message').text('Go!')
// }
//
// //This might be redundant
// const showGameFailure= function (event) {
//   $('#message').text('Umm...')
//  }
//  Initialize players
let currentPlayer = "x"
const playerOne = "x"
const playerTwo = "o"
store.currentValue = currentPlayer
const changePlayers = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
  store.currentValue = currentPlayer
}
const updateGameSuccess = function (response) {
  $('#message').text('Game update success!')
  $(store.currentBox).text(response.game.cells[store.currentBox.dataset.cellIndex])
  console.log(store.currentBox.dataset)
  store.game = response.game
  changePlayers()

}
const updateGameFailure = function () {
  $('#message').text('Game update failure!')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
}
