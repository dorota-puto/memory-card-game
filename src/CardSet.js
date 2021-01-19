import Card from './Card';

const allIcons = ['bug', 'cut', 'boat', 'snow', 'heart', 'home', 'rainy', 'leaf'];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
class CardSet {

    constructor() {
        this.cards = [];
        const icons = [...allIcons, ...allIcons];
        shuffleArray(icons);
        for (let i = 0; i < icons.length; i++) {
            this.cards.push(new Card(i, icons[i]));
        }
    }

    allGuessed() {
        return this.cards.every(card => {
            return card.isGuessed();
        });
    }

    findById(id) {
        return this.cards.find(card => card.getId() == id);
    }

}

export default CardSet;