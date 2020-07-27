# tikTakTow

Here is my first application: a single player version of the classic game Tic-Tac-Toe.
Although it appears minimalist at first, this project uses token authentication
through an API to store information about users and past games.
The app also uses AJAX calls to allow the user to seamlessly flow
from creating an account to playing the game.


## Links to the project

* [Github Repository](https://github.com/adamrturman/tiktaktow-client)

* [Deployed App](https://adamrturman.github.io/tiktaktow-client/)

## Planning Story & Problem Solving
The first thing I did to plan for the project was to "plan with the end in mind": create a timeline that worked in reverse from my goal.

![Game Project Plan](https://i.imgur.com/l8gD3Ca.jpg)

As I began tackling the requirements, I would try to connect the task at
hand to a previous lesson and refer back to that code as a basis. This
process allowed me to set up the user authenication. I ran into more
difficulty when it came to making the API calls for the game itself. It
was a slower learning curve for me as I navigated these questions:
* What data is needed from the store to complete the next step?
* How do I access the data needed from the store.js file?

When I encountered a problem, my first step was to look in the issue queue.
Is someone else asking the same question? Did someone else already solve
this problem? If I couldn't make the connection that way, I would frame my
question in the most detailed way possible, sometimes answering my own
question in the process. Sometimes I tried to tackle too many things at
once and didn't realize there was a common error.
I was able to work through the logic for the game ending in a win or a tie
and all of the subsequent messaging independently. I wrote a lot of
pseudocode to frame those code blocks and I would insert frequent
console.log's to test what I had just written.


## User stories

* As a first time user, I want to be able to create an account
with a password that I confirm.
* As a first time user, I want to be able to sign in only with the password I created.
* As a signed in user, I want to be able to change my password.
* As a signed in user, I want to be able to log out.
* As a signed in user, I want to see how many games I’ve played.
* As a signed in user, I want to be able to create a new game (at any time).
* As a signed in user, I want to play the game with traditional rules
(x goes first and alternates with o, only open spaces can be chosen,
the first to three in a row horizontally/vertically/diagonally wins
and the game ends.
* As a signed in user, I want to see messaging that guides my user experience.
* As a signed in user, I don’t want to see unnecessary information (inputs, buttons, etc.)
* As a signed in user who has won or lost, I want to have the option
of logging out or playing again.

## Unresolved Issues & Stretch Goals

I would like to continue to improve the styling and the user interface.
For styling, I would add animations to enhance moments when a user story
is successfully completed, rather than just displaying a message as it
does currently. I would also utilize media query styling and bootstrap
to make sure my app looks good “mobile-first”.  For the user interface,
I would put input fields in buttons into a drop down or a navigation bar.
Ideally, my user is only seeing one or two things at once so they can
move seamlessly through the game. I would also move some of my messaging
into modals for a more slick, professional presentation.

## Technologies used

* HTML5
* CSS / Sass
* Bootstrap 4
* Javascript
* jQuery
* Atom

## Screenshots of Wireframes

![Wireframe #1](https://i.imgur.com/dxNQNpT.jpg)
![Wireframe #2](https://i.imgur.com/DuRndp3.jpg)
