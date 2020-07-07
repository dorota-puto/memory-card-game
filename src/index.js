import Card from './card'
import Board from './board'
import { displayBoard, updateBoard } from './views'

const icons = ['bug', 'bug', 'cut', 'cut', 'boat', 'boat', 'color-palette', 'color-palette', 'heart', 'heart', 'home', 'home', 'rainy', 'rainy', 'leaf', 'leaf']

const cardSet = []
for (let i = 0; i < icons.length; i++) {
    cardSet.push(new Card(i, icons[i]))
}

const board = new Board(cardSet)

displayBoard(board)

document.querySelectorAll('.card').forEach(card => card.addEventListener('click', (e) => {

    const cardToToggle = cardSet.find(card => card.getId() == e.currentTarget.id);

    cardToToggle.toggleCard()

    updateBoard(board)

})) 