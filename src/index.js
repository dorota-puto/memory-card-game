import Card from './card'
import Board from './board'
import { displayBoard } from './views'

const icons = ['bug', 'bug', 'cut', 'cut', 'boat', 'boat', 'color-palette', 'color-palette', 'heart', 'heart', 'home', 'home', 'rainy', 'rainy', 'leaf', 'leaf']

const cardSet = []
for (let i = 0; i < icons.length; i++) {
    cardSet.push(new Card(i, icons[i]))
}

const board = new Board(cardSet)

displayBoard(board)

document.querySelectorAll('.card').forEach(card => card.addEventListener('click', (e) => {
    console.log(e.target.id)
 
  const cardToToggle = cardSet.find(card => card.getId() == e.target.id);
       
 cardToToggle.toggleCard()

 })) 