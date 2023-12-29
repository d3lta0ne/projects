# pylint: disable=unused-wildcard-import
"""
Dice Roller applications
"""
from tkinter import *


DICE_FACE = {
    0: '?' # Unicoode for No Dice Roll
    1: '⚀',  # Unicode for Dice Face 1
    2: '⚁',  # Unicode for Dice Face 2
    3: '⚂',  # Unicode for Dice Face 3
    4: '⚃',  # Unicode for Dice Face 4
    5: '⚄',  # Unicode for Dice Face 5
    6: '⚅',  # Unicode for Dice Face 6
    7: '⚆',  # Unicode for Dice Face 7
    8: '⚇',  # Unicode for Dice Face 8
    9: '⚈',  # Unicode for Dice Face 9
    10: '⚉',  # Unicode for Dice Face 10
    11: '⚊',  # Unicode for Dice Face 11
    12: '⚋',  # Unicode for Dice Face 12
}


def get_dice_face(roll: int) -> str:
    """Get the Unicode representation of a dice face.

    :param roll: int - The value obtained when rolling the dice.
    :return: str - The Unicode representation of the corresponding dice face.

    This function takes an integer representing the result of rolling a six-sided
    die and returns the Unicode character corresponding to the face with that value.
    If the provided roll is not within the valid range (1 to 12), it returns 'Unknown'.
    """
    return DICE_FACE.get(roll, 'Unknown')


def main():
    """Main function

    :return: None - function does not return anything
    """


if __name__ == "__main__":
    main()
