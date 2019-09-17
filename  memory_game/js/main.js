// Cards avilable in game
var cards = [ {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


// Active cards in game
var cardsInPlay = [];


// Flip card and check for match
var flipCard = function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

var checkForMatch = function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match");
		} else {
			alert("Sorry, try again");
		}
}


//Creates board
var createBoard = function creatBoard() {
	for (var i = 0; i <cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();


	








