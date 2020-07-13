class Board {

    constructor(cardSet) {
        this.lock = false;
        this.cardSet = cardSet;
        this.lastOpenedCard = '';
        this.currentCard = '';
        this.status = 'playing';
        this.counter = 0;
    }

    getStatus() {
        return this.status;
    }

    getCounter() {
        return this.counter;
    }

    setCounter(counter) {
        this.counter = counter;
    }

    isLock() {
        return this.lock;
    }

    setLock(lock) {
        this.lock = lock;
    }

    getCards() {
        return this.cardSet.cards;
    }

    getLastOpenedCard() {
        return this.lastOpenedCard;
    }

    getCurrentCard() {
        return this.currentCard;
    }

    findCardById(id) {
        return this.cardSet.findById(id);
    }

    memorizeCards(clickedCard) {
        this.lastOpenedCard = this.currentCard;
        this.currentCard = clickedCard;
    }

    markGuessedCards() {
        if (this.lastOpenedCard !== '' && !this.lastOpenedCard.isLock() && this.currentCard.getIcon() === this.lastOpenedCard.getIcon() && this.currentCard.getId() !== this.lastOpenedCard.getId()) {
            this.currentCard.markAsGuessed();
            this.lastOpenedCard.markAsGuessed();

            this.counter += 1;
            this.updateGameStatus();
            console.log(this.getStatus());

        } else if (this.lastOpenedCard !== '' && !this.lastOpenedCard.isGuessed() && !this.currentCard.isGuessed() && !this.lastOpenedCard.isLock()) {
            this.lastOpenedCard.toggleCard();
            this.currentCard.toggleCard();
        }
    }

    updateGameStatus() {
        this.status = this.cardSet.allGuessed() ? 'finished' : 'playing';
    }
}

export { Board as default };