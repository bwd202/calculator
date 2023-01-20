# calculator

An HTML/CSS calculator inspired by Apple's calculator for the iPhone.

It has 8 operation buttons: AC, plus-minus, percent, division, multiplication, subtraction, addition, and equality (or operate func)

It has 12 numbers or input buttons: ., 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

Functions:

When the user presses a number button, it is displayed in the screen.

The user can press a maximum of 9 buttons (or spaces).

The AC button clears the screen and appends '0' to it.

When the user presses an operation button, it is not displayed on the screen but it is saved somewhere.

After user presses operation button, he can press number buttons. The new inputs will clear the previous numbers that are on the screen (or '0' if there are no numbers.)

Pressing the equal button will trigger the operation previously selected on the numbers

\*there are two sets of numbers: the one before the operation button is pressed, and the number after.

ISSUES

- the div for the screen collapses when the screen is cleared (as when pressing the AC button)
- how to store the numbers
- how to run the operate function
