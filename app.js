document.addEventListener('DOMContentLoaded', () => {

    // Card options
    const cardArray = [{
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
    ]

    // Sorting teh cards
    cardArray.sort(() => 0.5 - Math.random());

    // Selecting the grid
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWon = [];

    // Creating the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {

            // Set a var card creating an element img
            var card = document.createElement('img');

            // Setting the attributes src and data-id for the img element
            card.setAttribute('src', 'images/blankJs.png');
            card.setAttribute('data-id', i);

            // Excuting the flipCard function and appending the cards into the grid
            card.addEventListener('click', flipCard);
            grid.appendChild(card);

        }
    }

    // Check for matches
    function checkForMatch() {
        // select every img element inside the grid
        var cards = document.querySelectorAll('img');

        const optionOneId = cardsChosenID[0];
        const optionTwoId = cardsChosenID[1];

        if (cardsChosenID[0] == cardsChosenID[1]) {

            cards[optionOneId].setAttribute('src', 'images/blankJs.png');
            cards[optionTwoId].setAttribute('src', 'images/blankJs.png');

            alert('Sorry! You can not choose a card twice');
        } else {

            if (cardsChosen[0] === cardsChosen[1]) {
                alert("You've find a match");

                cards[optionOneId].setAttribute('src', 'images/white.png');
                cards[optionTwoId].setAttribute('src', 'images/white.png');

                cardsWon.push(cardsChosen);
            } else {
                cards[optionOneId].setAttribute('src', 'images/blankJs.png');
                cards[optionTwoId].setAttribute('src', 'images/blankJs.png');

                alert('Sorry! Try again');
            }

        }


        cardsChosen = [];
        cardsChosenID = [];

        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulation! You found them all';
            resultDisplay.setAttribute('style', 'color: red; text-transform: uppercase;');
        }
    }


    // FLip your card
    function flipCard() {

        var cardID = this.getAttribute('data-id');

        cardsChosen.push(cardArray[cardID].name);
        cardsChosenID.push(cardID);

        this.setAttribute('src', cardArray[cardID].img);

        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500);
        }
    }


    createBoard();

})