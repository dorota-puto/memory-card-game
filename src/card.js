
class Card {

    constructor(id, icon) {
        this.id = id
        this.lock = true
        this.icon = icon
    }

    getId() {
        return this.id
    }

    getIcon() {
        return this.icon
    }

    isLock() {
        return this.lock
    }

    toggleCard() {
        this.lock === true ? this.lock = false : this.lock = true;
    }
}

export { Card as default }