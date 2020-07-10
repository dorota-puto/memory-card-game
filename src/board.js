import Timer from 'easytimer.js';

class Board {

    constructor(cardSet) {
        this.lock = false
        this.cardSet = cardSet
        this.lastOpenedCard = ''
        this.currentCard = ''
        this.status = 'playing'
        this.counter = 0
    }

    getStatus() {
        return this.status
    }

    getCounter() {
        return this.counter
    }

    setCounter(counter) {
        this.counter = counter
    }

    isLock() {
        return this.lock
    }

    setLock(lock) {
        this.lock = lock
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
        if (this.lastOpenedCard !== '' && !this.lastOpenedCard.isLock() && this.currentCard.getIcon() === this.lastOpenedCard.getIcon() && this.currentCard.getId() !== this.lastOpenedCard.getId()) {
            this.currentCard.markAsGuessed()
            this.lastOpenedCard.markAsGuessed()

            this.counter += 1
            this.updateGameStatus()
            console.log(this.getStatus())

        } else if (this.lastOpenedCard !== '' && !this.lastOpenedCard.isGuessed() && !this.currentCard.isGuessed() && !this.lastOpenedCard.isLock()) {
            this.lastOpenedCard.toggleCard()
            this.currentCard.toggleCard()
        }
    }

    updateGameStatus() {

        const finished = this.cardSet.every(card => {
            return card.isGuessed()
        });

        this.status = finished ? 'finished' : 'playing'
    }
}

export { Board as default }