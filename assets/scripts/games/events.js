'use strict'
//  Required files
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

//  Initialize players
let currentPlayer = "x"
const playerOne = "x"
const playerTwo = "o"
store.currentValue = currentPlayer

const onCreateGame = function (event) {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}


const onUpdateGame = function (event) {
  event.preventDefault()
  const clickedCell = event.target
  const clickedCellData = $(clickedCell).data('cell-index')
  store.currentBox = event.target


  console.log(event)
  console.log(event.target.id) // This gets me "box-one," but not the data-index
  console.log(store.game.cells)// This gets me the array of cells
  console.log(store.game.over) // This says "false" because the game isn't over
  console.log(store.game._id) //This is the game's ID
  console.log(store.game)


  api.updateGame(clickedCellData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}


//  create a variable to store the two players
// const playerOne = "x"
//  const playerTwo = "o"
//
//  get the stored game board from the API
//
// const gameBoard = store.game
//
//
//
//
// =  create a variable for the cell that is clicked (connected to the clicked cell's array index (event.target?))
// const cellClicked = event.target
// //  based on the cell clicked, update that index in the array with x or o, depending on whose turn
// //  add the x or o to the clicked cell and update the ui either x or o, depending on whose turn
// //  after each turn, check the board to see if there's a winner
// //    to see if there's a winner check the three rows (012, 345, 678)
// //    the three columns (036, 147, 258), and the two diags (048, 246) for matching values
// //    maybe if gameBoard[0]==gameBoard[1]==gameBoard[2] || gameBoard[3]==gameBoard[4]==gameBoard[5]
//
// //  if there's a match, display the winner
// //  if there isn't a match, switch to the other player and repeat the last three steps
// //  players can only choose empty index arrays
// //  continue until the no empty indexes remain (or 9 clicks have occurred) and display that its a draw
///     consider using the every array method to check when "no empty indexes remain"
// //  prompt the user to create a new game or log out







module.exports = {
  onCreateGame,
  //onShowGame,
  onUpdateGame
}

// //// 2. events.js add a click event for the element
// // 2.1 When board cell is clicked...
// const onBoardClick = (event) => {
//
//   // prevent default action
//   event.preventDefault()
//
//   // if no new game is created or game is over then do not play
//   if (!store.game || store.game.over) {
//     $('#jumboTron').text('Click the new game button to start a new game!')
//     return
//   }

  // 2.1.1 get position/index of game board 0 - 8 from ID of clicked element
//  const index = event.target.id

  // NEXT PROBLEM TO SOLVE
  // 2.1.2 get current player, X or O and save it to a variable


  // we will save these for later
  //
  //      2.1.3 add player to position in game board
  //      2.1.4 check for winner
  //      2.1.5 create game data object to send to API
  //      2.1.6 Pass game data to api.js function that makes API call

  // we will save this for later, focus on the problem above.
  // api.boardClick()
  //  .then(ui.boardClickSuccess)
  //  .catch(ui.boardClickFailure)

  // //// 1.  Create an empty game board
  // const gameBoard = ['', '', '', '', '', '', '', '', '']
  //
  // // 2.  Start the current player as X
  // const currentPlayer = "X"
  //
  // // 3.  Add current player to position top left on the game board
  // Then
  // 4. Change current player to O
  // 5. Add current player to a position on the game board
  //
  // Then
  // 6. Check if a player won
  // 7. Do not allow players to select an already taken spot
