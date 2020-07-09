import Score from './score'
import Card from './card'
import Board from './board'
import { displayBoard, updateBoardUI, closeUnguessed, displayTime, updateCounter } from './views'
import Timer from 'easytimer.js';

const timer = new Timer();

const startGame = () => {
    const icons = ['bug', 'bug', 'cut', 'cut', 'boat', 'boat', 'color-palette', 'color-palette', 'heart', 'heart', 'home', 'home', 'rainy', 'rainy', 'leaf', 'leaf']

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(icons)

    const cardSet = []
    for (let i = 0; i < icons.length; i++) {
        cardSet.push(new Card(i, icons[i]))
    }


    const score = new Score()
    const board = new Board(cardSet)

    displayTime(timer)
    updateCounter(score)
    displayBoard(board)

    document.querySelectorAll('.card').forEach(card => card.addEventListener('click', (e) => {

        if (board.isLock()) {
            return
        }
        const cardToToggle = cardSet.find(card => card.getId() == e.currentTarget.id);
        cardToToggle.toggleCard()

        updateBoardUI(board)
        board.memorizeCards(cardToToggle)

        board.markGuessedCards()
        updateBoardUI(board)
        closeUnguessed(board)
    }))
}

startGame()

document.querySelector('.restart').addEventListener('click', (e) => {

    startGame()

    const restertEl = document.querySelector('.restart--icon')
    restertEl.classList.add('animate__animated', 'animate__rotateIn')
    window.setTimeout(function () {
        restertEl.classList.remove('animate__animated', 'animate__rotateIn')
    }, 1000)
})