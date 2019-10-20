# Flappy Hand

### Description
  A very basic implementation of "flappy bird" style game.

### Motivation
  To learn basic html5 canvas manipulation. Additional goals were added to practice
  coding cleanly. Utilized module design pattern to make the game easier to maintain
  and add features later.

### Documentation
  - **controlModule:**
    A basic implementation of control where "arrowUp" is designated as the keystroke
    to move game avatar. The module will invoke the function which is passed in once
    control criteria has been met. The module is assumed to initial setting is assumed
    to be initialized in another module (in this case the gameModule).
  - **animateModule:**
    This module is to fps lock the game. Certain hardware that can output higher fps causes
    the game to animate faster due to how html5 canvas behaves.
  - **gameModule:**
    This is the primary module. Can initialize with two parameters that can characterize
    how the animation and controls behave. If no parameter then defaults to animating without
    limit and control scheme is just any keypress. Need to be weary of how images load
    asynchronously.

### Notes
  Need to improve documentation, proper game over mechanic, and needs to be stylized a
  bit more. Need to change gameover state, but for now just resets game's state.