
document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'facebook',
            img: 'images/facebook.jpg'
        },
        {
            name: 'facebook',
            img: 'images/facebook.jpg'
        },
        {
            name: 'instagram',
            img: 'images/instagram.jpg'
        },
        {
            name: 'instagram',
            img: 'images/instagram.jpg'
        },
        {
            name: 'skype',
            img: 'images/skype.jpg'
        },
        {
            name: 'skype',
            img: 'images/skype.jpg'
        },
        {
            name: 'twitter',
            img: 'images/twitter.jpg'
        },
        {
            name: 'twitter',
            img: 'images/twitter.jpg'
        },
        {
            name: 'whatsapp',
            img: 'images/whatsapp.jpg'
        },
        {
            name: 'whatsapp',
            img: 'images/whatsapp.jpg'
        },
        {
            name: 'youtube',
            img: 'images/youtube.jpg'
        },
        {
            name: 'youtube',
            img: 'images/youtube.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // creating the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.setAttribute('width', 100)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            toastr.success('Found a match!')
            cards[optionOneId].setAttribute('src', 'images/white100.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white100.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            toastr.info('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! YOU WON!"
        }
    }


    // flip the card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        // pushes cards based on the cardID to cardsChosen array. And once located the card gets the name.
        cardsChosen.push(cardArray[cardId].name)
        // pushes the cardId to the cardChosenId array
        cardsChosenId.push(cardId)
        // adds the image attribute to the clicked image, based on the cardId it holds
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    // document.getElementById('resetButton').addEventListener('click', function(){
    //     remove()
    //     createBoard()
    // })

    function remove(){
        var del = document.getElementById('grid')
        while(myNode.lastElementChild){
            myNode.removeChild(myNode.lastElementChild)
        }
        // del.parentNode.removeChild(del)
        // createBoard()
    }

    resetButton.onclick = () => {
        var myNode = document.getElementById('grid')
        while(myNode.lastElementChild){
            myNode.removeChild(myNode.lastElementChild)
            
        }
        document.getElementById('result').innerHTML = ''
        createBoard()
    }

    createBoard()

})
