
class Board {

    constructor(cardSet) {
        this.cardSet = cardSet
        this.lastOpenedCard = ''
        this.currentCard = ''
        this.status = 'playing'
    }

    getCardSet() {
        return this.cardSet
    }

    getLastOpenedCard() {
        return this.lastOpenedCard
    }

    getCurrentCard() {
        return this.currentCard
    }

    memorizeCards(clickedCard) {
        this.lastOpenedCard = this.currentCard
        this.currentCard = clickedCard
    }

    markGuessedCards() {
        if (this.lastOpenedCard !== '' && this.currentCard.getIcon() === this.lastOpenedCard.getIcon()) {
            this.currentCard.markAsGuessed()
            this.lastOpenedCard.markAsGuessed()
        }
    }
}

export { Board as default }