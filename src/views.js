const displayTime = (timer) => {

    timer.reset();
    timer.start();

    timer.addEventListener('secondsUpdated', function() {
        document.querySelector('#basicUsage').innerHTML = timer.getTimeValues().toString();
    });

};

const updateCounter = (board) => {

    const counterEl = document.querySelector('.counter');
    counterEl.innerHTML = `moves: ${board.getCounter()}`;
};

const checkIfFinished = (board, timer) => {

    const h = timer.getTimeValues().hours.toString();
    const m = timer.getTimeValues().minutes.toString();
    const s = timer.getTimeValues().seconds.toString();

    if (board.getStatus() === 'finished') {
        const messageEl = document.querySelector('.modal-content--message');
        messageEl.innerHTML = `You have won in ${h} hours ${m} minutes ${s} seconds using ${board.getCounter()} moves`;
        document.querySelector('.modal').classList.add('is-active');
    }
};

const displayBoard = (board) => {

    const boardEl = document.querySelector('.board');
    boardEl.innerHTML = "";

    let cards = [...board.getCards()];

    while (cards.length !== 0) {
        const colEl = document.createElement('div');
        colEl.classList.add('col');
        for (let i = 0; i < 4; i++) {
            colEl.appendChild(createCard(cards[i]));
        }
        boardEl.appendChild(colEl);
        cards.splice(0, 4);
    }
};

const animateRestartIcon = () => {
    const restertEl = document.querySelector('.restart--icon');
    restertEl.classList.add('animate__animated', 'animate__rotateIn');
    window.setTimeout(function() {
        restertEl.classList.remove('animate__animated', 'animate__rotateIn');
    }, 1000);
};

const updateBoardUI = (board) => {

    let cards = [...board.getCards()];

    for (let i = 0; i < cards.length; i++) {
        const cardUI = document.getElementById(`${cards[i].getId()}`);

        if (cards[i].isGuessed()) {
            cardUI.classList.remove('card--open');
            cardUI.classList.add('card--guessed');
        } else if (!cards[i].isLock()) {
            cardUI.classList.remove('card--lock');
            cardUI.classList.add('card--open');
        }
    }
};

const closeUnguessed = (board) => {

    const last = board.getLastOpenedCard();
    const cur = board.getCurrentCard();
    if (last !== '') {

        const curCardUI = document.getElementById(`${cur.getId()}`);
        const lastCardUI = document.getElementById(`${last.getId()}`);

        if (last.isLock() && cur.isLock()) {

            board.setCounter(board.getCounter() + 1);

            board.setLock(true);
            window.setTimeout(function() {
                lastCardUI.classList.remove('card--open');
                lastCardUI.classList.add('card--lock');
                curCardUI.classList.remove('card--open');
                curCardUI.classList.add('card--lock');
                board.setLock(false);
            }, 1000);
        }
    }
};

const createCard = (card) => {

    const cardEl = document.createElement('div');
    const iconEl = document.createElement('ion-icon');

    cardEl.classList.add('card');
    cardEl.setAttribute('id', `${card.getId()}`);
    iconEl.setAttribute('name', `${card.getIcon()}`);

    if (card.isLock()) {
        cardEl.classList.add('card--lock');
    } else {
        cardEl.classList.add('card--open');
    }

    cardEl.appendChild(iconEl);
    return cardEl;
};

export { displayBoard, updateBoardUI, closeUnguessed, displayTime, updateCounter, animateRestartIcon, checkIfFinished };