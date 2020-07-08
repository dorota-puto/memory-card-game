
const displayBoard = (board) => {

    const boardEl = document.querySelector('.board')
    boardEl.innerHTML = ""

    let cards = [...board.getCardSet()]

    while (cards.length !== 0) {
        const colEl = document.createElement('div')
        colEl.classList.add('col')
        for (let i = 0; i < 4; i++) {
            colEl.appendChild(createCard(cards[i]))
        }
        boardEl.appendChild(colEl)
        cards.splice(0, 4)
    }
}

const updateBoardUI = (board) => {

    let cards = [...board.getCardSet()]

    for (let i = 0; i < cards.length; i++) {
        const cardUI = document.getElementById(`${cards[i].getId()}`)

        if (cards[i].isGuessed()) {
            cardUI.classList.remove('card__open')
            cardUI.classList.add('card__guessed')
        } else if (!cards[i].isLock()) {
            cardUI.classList.remove('card__lock')
            cardUI.classList.add('card__open')
        }
    }
}

const closeUnguessed = (board) => {

    const last = board.getLastOpenedCard()
    const cur = board.getCurrentCard()
    if (last !== '') {

        const curCardUI = document.getElementById(`${cur.getId()}`)
        const lastCardUI = document.getElementById(`${last.getId()}`)

        if (last.isLock() && cur.isLock()) {
            board.setLock(true)
            window.setTimeout(function () {
                lastCardUI.classList.remove('card__open')
                lastCardUI.classList.add('card__lock')
                curCardUI.classList.remove('card__open')
                curCardUI.classList.add('card__lock')
                board.setLock(false)
            }, 1000)
        }
    }
}



const createCard = (card) => {

    const cardEl = document.createElement('div')
    const iconEl = document.createElement('ion-icon')

    cardEl.classList.add('card')
    cardEl.setAttribute('id', `${card.getId()}`)
    iconEl.setAttribute('name', `${card.getIcon()}`)

    if (card.isLock()) {
        cardEl.classList.add('card__lock')
    } else {
        cardEl.classList.add('card__open')
    }

    cardEl.appendChild(iconEl)
    return cardEl
}

export { displayBoard, updateBoardUI, closeUnguessed }