class Phrase {
    constructor(phrase) {
        this.phrase = phrase;

    }
    addPhraseToDisplay(phrase) {
        $('#phrase ul li').remove();
        this._addPhraseToDisplay = $('#phrase ul').append(phrase);
    }
    checkLetter(clickValue, keyValue, array) {
        if ($(array).hasClass(clickValue) || $(array).hasClass(keyValue)) {
            this.showMatchedLetter(clickValue, keyValue);
            game.checkForWin();
            return true;
        } else {
            game.removeLife();
            return false;
        }
    }
    showMatchedLetter(clickValue, keyValue) {
        $('#phrase li').each(function() {
            if ($(this).text() == clickValue || $(this).hasClass(keyValue)) {
                $(this).removeClass('hide').addClass('show');
            }
        })
    }
}