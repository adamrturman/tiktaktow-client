'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are signed up!')
  $('form').trigger('reset')
}
const signUpFailure = function (response) {
  $('#message').text('You did not sign up!')
}
const signInSuccess = function (response) {
  $('#message').text('You are signed in!')
  $('#clever').html('So clever!')
  store.user = response.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#update-game').hide()
  $('form').trigger('reset')
}
const signInFailure = function (response) {
  $('#message').text('You did not sign in!')
}
const changePasswordSuccess = function (response) {
  $('#message').text('You changed your password!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (response) {
  $('#message').text('You did not change your password!')
}
const signOutSuccess = function () {
  $('#message').text('You are signed out! Sign in and play again!')
  $('.box').text('')
  $('#end-message').text(' ')
  $('#player-stats').text(' ')
  $('#clever').html('How clever!')
  $('#unauthenticated').show()
  $('#authenticated').hide()
  store.user = null
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess

}
