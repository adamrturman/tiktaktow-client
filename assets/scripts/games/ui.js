'use strict'
const store = require('../store')


const createGameSuccess = function (response) {
    $('#message').text('The game has started!')
    store.game = response.game

//  The value of all cells (indexes in the array)
//  resets to empty string when this button is clicked
  $(".box").text('')


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
//Remove all restart button stuff
const restartGameSuccess = function (response) {
  $('#message').text('A new game has started!')
  store.game = response.game
  $('.cell').text('')
  console.log('we are in the restart')
}

const restartGameFailure = function (response) {
  $('#message').text('New game failed to start')
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

const changePlayers = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else {
    currentPlayer = playerOne
  }
  store.currentValue = currentPlayer
}
const updateGameFailure = function () {
  $('#message').text('Hey ' + currentPlayer + ' that is already taken!')
}
const updateGameSuccess = function (response) {
  if ($(store.currentBox).text() === '') {
    $('#message').text(currentPlayer + ' just went!')
    $(store.currentBox).text(response.game.cells[store.currentBox.dataset.cellIndex])
    checkForWinner(store.game.cells)


    // if checkForWinner returns true,
//     if (checkForWinner(store.game.cells) === true) {
//   //    change the property over from false to true
//   $(store.game).attr('over', 'true')
// // if no winners, change players
// } } else if (checkForWinner(store.game.cells) !== true) {
    changePlayers()
// if you pick an unavailable space, run updateGameFailure
  } else {
    updateGameFailure()
  }
}
//  Does this entire function need to be part of updateGameSuccess function above after
// store.game = response.game and before changePlayers()?

//  Create a function that takes in the array

const checkForWinner = function (gameBoard) {
//  and checks for a winning combo
 if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] ||
     gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] ||
     gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]  ||
     gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]  ||
     gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]  ||
     gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]  ||
     gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]  ||
     gameBoard[6] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])
//   and changes the over value within the game object to true

//  displays the message that person who made the last move has won the game ()
 $('#end-message').text(currentPlayer + ' has won the game!')
}
//  If those conditions aren't met, switch players and continue the game which is changePlayers()

// const checkforTie = function (gameBoard) {
//   //  if all of the indexes of the gameboard have values other than '' and it doesn't find any winning combos
//   if gameBoard
// //  display the message that its a tie
// $('#end-message').text('It is a tie!')
// }


module.exports = {
  createGameSuccess,
  createGameFailure,
  restartGameSuccess,
  restartGameFailure,
  updateGameSuccess,
  updateGameFailure,
  checkForWinner
}
