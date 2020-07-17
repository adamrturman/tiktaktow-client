'use strict'
const store = require('../store')

const createGameSuccess = function (event) {
  $('#message').text('Let\'s play!')
}
//This might be redundant
const createGameFailure = function (event) {
  $('#message').text('Umm....')
}

// const showGameSuccess = function (event) {
//   $('#message').text('Go!')
// }
//
// //This might be redundant
// const showGameFailure= function (event) {
//   $('#message').text('Umm...')
//}
const updateGameSuccess = function () {
  $('#message').text('Game update success!')
}
const updateGameFailure = function () {
  $('#message').text('Game update failure!')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  // updateGameSuccess,
  // updateGameFailure
}
