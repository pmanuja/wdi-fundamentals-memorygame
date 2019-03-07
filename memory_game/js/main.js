console.log("Up and running!");
/*
var queen = "queen";
var queentMatch = "queen";
var king = "king";
var kingMatch = "king";
console.log("User flipped " + queen);
console.log("User flipped " + king);*/

var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	} 
	else 
	{
		alert("Sorry, try again.");
	}
};


var flipCard = function() 
{

	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log( cards[cardId].suit);
	console.log( cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src',cards[cardId].cardImage);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();

	}

};

var resetBoard = function(){
	
		var imgList = document.querySelectorAll('img');
		for (var i = 0; i < imgList.length; i++){
			imgList[i].setAttribute('src','images/back.png');
		}

	
};

var createBoard = function(){

	for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}

};

createBoard();

var resetbtn =  document.getElementById('reset');
resetbtn.addEventListener('click', resetBoard);

