'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are signed up!')
}
const signUpFailure = function (response) {
  $('#message').text('You did not sign up!')
}
const signInSuccess = function (response) {
  $('#message').text('You are signed in!')
  store.user = response.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
}
const signInFailure = function (response) {
  $('#message').text('You did not sign in!')
}
const changePasswordSuccess = function (response) {
  $('#message').text('You changed your password!')
}
const changePasswordFailure = function (response) {
  $('#message').text('You did not change your password!')
}
const signOutSuccess = function () {
  $('#message').text('You are signed out!')
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
