'use strict'
const store = require('../store')

let turn = true

const createGameSuccess = function (response) {
  turn = true
  const currentPlayer = turn ? 'X' : 'O'
    $('#message').text('The game has started! ' + 'it is ' + currentPlayer + '\'s' + ' turn')
    $('#end-message').text(' ')
    $('#player-stats').text(' ')
    store.game = response.game
//  The value of all cells (indexes in the array)
//  resets to empty string when this button is clicked
  $(".box").text('')
  return turn
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
    $('#message').text('It is ' + futurePlayer + '\'s' + ' turn')
  }
  store.game = response.game
  checkForWinner(store.game.cells)
  turn = !turn
  return turn
}
//   if checkForWinner returns true,
//     if (checkForWinner(store.game.cells) === true) {
//   //    change the property over from false to true
//   $(store.game).attr('over', 'true')
// // if no winners, change players
// } } else if (checkForWinner(store.game.cells) !== true) {

// if you pick an unavailable space, run updateGameFailure

//  Does this entire function need to be part of updateGameSuccess function above after
// store.game = response.game and before changePlayers()?

//  Create a function that takes in the array

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
//  and checks for a winning combo

//   and changes the over value within the game object to true

//  displays the message that person who made the last move has won the game ()


//  If those conditions aren't met, switch players and continue the game which is changePlayers()

// const checkforTie = function (gameBoard) {
//   //  if all of the indexes of the gameboard have values other than '' and it doesn't find any winning combos
//   if gameBoard
// //  display the message that its a tie
// $('#end-message').text('It is a tie!')
// }
const indexGameSuccess = function (response) {
  $('#player-stats').text(`You have played ${response.games.length - 1} games of tikTakTow` )
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  checkForWinner,
  indexGameSuccess
}
