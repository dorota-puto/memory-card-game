import Board from './board';
import CardSet from './CardSet';
import { displayBoard, updateBoardUI, closeUnguessed, displayTime, updateCounter, animateRestartIcon, checkIfFinished } from './views';
import Timer from 'easytimer.js';

const timer = new Timer();

const startGame = () => {
 
    const board = new Board(new CardSet());

    displayTime(timer);
    updateCounter(board);
    displayBoard(board);
   
    document.querySelectorAll('.card').forEach(card => card.addEventListener('click', (e) => {

        if (board.isLock()) {
            return;
        }
        const cardToToggle = board.findCardById(e.currentTarget.id);
        cardToToggle.toggleCard();

        updateBoardUI(board);
        board.memorizeCards(cardToToggle);
        board.markGuessedCards();
        updateBoardUI(board);

        closeUnguessed(board);
        updateCounter(board);
        checkIfFinished(board, timer);

    }));
};

startGame();

document.querySelector('.restart').addEventListener('click', () => {
    startGame();
    animateRestartIcon();
});

document.querySelector('.btn-close').addEventListener('click', () => {
    startGame();
    document.querySelector('.modal').classList.remove('is-active');
});