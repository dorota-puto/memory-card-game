class Card {

    constructor(id, icon) {
        this.id = id;
        this.lock = true;
        this.guessed = false;
        this.icon = icon;
    }

    getId() {
        return this.id;
    }

    getIcon() {
        return this.icon;
    }

    isLock() {
        return this.lock;
    }

    isGuessed() {
        return this.guessed;
    }

    markAsGuessed() {
        this.guessed = true;
    }

    toggleCard() {
        this.lock = !this.lock;
    }
}

export { Card as default };