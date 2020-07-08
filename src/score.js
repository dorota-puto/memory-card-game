
class Score {

    constructor () {
        this.status = 'playing'
        this.counter = 0
    }

    getCounter() {
        return this.counter
    }
}

export { Score as default }