class Phrase {
    constructor(phrase) {
        this.phrase = phrase;

    }
    addPhraseToDisplay(phrase) {
        $('#phrase ul li').remove();
        this._addPhraseToDisplay = $('#phrase ul').append(phrase);
    }
    checkLetter(value, array) {    
        if ($(array).hasClass(value)) {
            this.showMatchedLetter(value);
            game.checkForWin();
            return true;
        } else {
            game.removeLife();
            return false;
        }
    }
    showMatchedLetter(value) {
        var selector = "li:contains(" + value + ")";
        $(selector).removeClass('hide').addClass('show');
    }
}