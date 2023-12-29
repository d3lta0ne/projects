# pylint: disable=unused-wildcard-import
"""
Dice Roller applications
"""
import tkinter

DICE_FACE = {
    -1: '?',  # Unicoode for No Dice Roll
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

APP = Tk()


def get_dice_face(roll: int) -> str:
    """Get the Unicode representation of a dice face.

    :param roll: int - The value obtained when rolling the dice.
    :return: str - The Unicode representation of the corresponding dice face.

    This function takes an integer representing the result of rolling a six-sided
    die and returns the Unicode character corresponding to the face with that value.
    If the provided roll is not within the valid range (1 to 12), it returns '?'.
    """
    return DICE_FACE.get(roll, -1)


def roll():
    from random import randint
    random_roll = randint(1, 6)
    msg = Label(APP, text=get_dice_face(-1),
                font=('Times', 100), foreground='white')


def main():
    """Main function

    :return: None - Main function does not return anything
    """
    DICE = Label(APP, text=get_dice_face(-1),
                 font=('Times', 100), foreground='white')
    DICE.grid(row=0, column=0, padx=25, pady=5)
    ROLL_BUTTON = Button(APP, text='Roll', command=roll)
    ROLL_BUTTON.grid(row=1, column=1)
    APP.mainloop()


if __name__ == "__main__":
    main()
