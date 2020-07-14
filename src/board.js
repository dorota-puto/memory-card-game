class Board {

    constructor(cardSet) {
        this.lock = false;
        this.cardSet = cardSet;
        this.lastOpenedCard = '';
        this.currentCard = '';
        this.status = 'playing';
        this.counter = 0;
        this.scores = this.loadScores();
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

        } else if (this.lastOpenedCard !== '' && !this.lastOpenedCard.isGuessed() && !this.currentCard.isGuessed() && !this.lastOpenedCard.isLock()) {
            this.lastOpenedCard.toggleCard();
            this.currentCard.toggleCard();
        }
    }

    updateGameStatus() {
        this.status = this.cardSet.allGuessed() ? 'finished' : 'playing';
    }

    loadScores() {
        const scoresJSON = localStorage.getItem('scores');

        try {
            return scoresJSON ? JSON.parse(scoresJSON) : [];
        } catch (e) {
            return [];
        }
    }

    rankScores() {
        return this.scores.sort(function (cur, pre) {
            if (cur.moves === pre.moves) {
                return cur.time > pre.time ? 1 : -1;
            }
            return cur.moves > pre.moves ? 1 : -1;
        });
    }

    saveScores() {
        this.rankScores();

        if (this.scores.length > 5) {
            this.scores.pop();
        }

        localStorage.setItem('scores', JSON.stringify(this.scores));
    }

    createScore(moves, time, timeStamp) {
        this.scores.push({
            moves: moves,
            time: time,
            timeStamp: timeStamp
        });
    }
}

export { Board as default };