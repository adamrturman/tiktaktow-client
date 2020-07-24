'use strict'
const store = require('../store')
//  Initialize players (turns)
let turn = true
const createGameSuccess = function (response) {
  $('#update-game').show()
  turn = true
  // ternary to switch between x and o
  const currentPlayer = turn ? 'X' : 'O'
  $('#message').text('The game has started! ' + 'it is ' + currentPlayer + '\'s' + ' turn')
  $('#end-message').text(' ')
  $('#player-stats').text(' ')
  store.game = response.game
  $('.box').text('')
  return turn
}
const updateGameFailure = function (response) {
  const currentPlayer = turn ? 'x' : 'o'
  $('#message').text('Hey ' + currentPlayer + ' that is already taken!')
}

const updateGameSuccess = function (response) {
  const currentPlayer = turn ? 'X' : 'O'
  const futurePlayer = !turn ? 'X' : 'O'
  if (store.currentStatus) {
    $('#end-message').text('No! The game is over! Play again or log out!')
    $('#message').text('')
  } else {
    $(store.currentBox).text(currentPlayer)
    $('#message').text('Nice move ' + currentPlayer + ' It is ' + futurePlayer + '\'s' + ' turn')
  }
  store.game = response.game
  checkForWinner(store.game.cells)
  turn = !turn
  return turn
}
const checkForWinner = function (gameBoard) {
  const currentPlayer = turn ? 'X' : 'O'
  if (store.currentStatus) {
    return
  } else {
    if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] || gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] || gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] || gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] || gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] || gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] || gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] || gameBoard[6] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
      store.currentStatus = true
      $('#end-message').text(currentPlayer + ' has won the game!')
      $('#message').text(' ')
    } else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
      $('#end-message').text('It is a tie! Play again or log out')
      $('#message').text(' ')
    }
  }
}

const indexGameSuccess = function (response) {
  if (response.games.length - 1 === 0) {
    $('#player-stats').text('This is your first game of tikTakTow!')
  } else if (response.games.length - 1 === 1) {
    $('#player-stats').text(`You have only played ${response.games.length - 1} game of tikTakTow so far`)
  } else {
    $('#player-stats').text(`You have already played ${response.games.length - 1} games of tikTakTow`)
  }
}
module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  checkForWinner,
  indexGameSuccess
}
