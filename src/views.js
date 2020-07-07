

const displayBoard = (board) => {

    const boardEl = document.querySelector('.board')

    let cards = [...board.getCardSet()]

    while (cards.length !== 0) {
        const rowEl = document.createElement('div')
        rowEl.classList.add('col')
        for (let i = 0; i < 4; i++) {

            rowEl.appendChild(createCard(cards[i]))
        }
        boardEl.appendChild(rowEl)
        cards.splice(0, 4)
    }

}

const createCard = (card) => {

    const cardEl = document.createElement('div')
    const iconEl = document.createElement('ion-icon')

    cardEl.classList.add('card')
    iconEl.setAttribute('name', `${card.getIcon()}`)
    cardEl.setAttribute('id',`${card.getId()}`)

    if (card.isLock()) {
        iconEl.classList.add('card__lock')
    } else {
        iconEl.classList.add('card__open')
    }

    cardEl.appendChild(iconEl)
    return cardEl
}


export { displayBoard }