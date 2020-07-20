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

//console.log(createGame)
// const showGame = function (id) {
//   return $.ajax({
//     headers: {
//       Authorization: 'Bearer ' + store.user.game.id
//     },
//     url: config.apiUrl + '/games/' + id,
//     method: 'GET'
//   })
// }

const updateGame = function (clickedCellData) {
  //Checks to see if I'm accessing store
  console.log(store.user.token) // returns token
  console.log(store.user._id) // returns id
  console.log(store.game.cells)  // returns empty array
  console.log(store.game.over) // returns false
  console.log(store.game._id) //  returns game id
  console.log(store.game.owner) // returns user id



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
        "over": store.game.over
      }
}
  })
}



module.exports = {
  createGame,
  //showGame
   updateGame
}
