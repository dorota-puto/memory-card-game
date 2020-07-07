
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
        this.lock = !this.lock ;
    }
}

export { Card as default }