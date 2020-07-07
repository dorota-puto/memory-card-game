
class Board {

    constructor(cardSet) {
        this.cardSet = cardSet
        this.status = 'playing'
    }

    getCardSet() {
        return this.cardSet
    }
}

export { Board as default }