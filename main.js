const deck = []
const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function startDeck() {

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = { Value: values[j], Suit: suits[i] };
      deck.push(card);
    }
  }

  return deck;
}

function shuffle() {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));

    let tmp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }

}

function showShuffledDeck() {
  let showDeck = document.getElementById('showDeck')
  showDeck.innerHTML = '';

  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement('div');
    let icon = ''

    if (deck[i].Suit === 'hearts') {
      icon = 'H'
    }
    else if (deck[i].Suit === 'spades') {
      icon = 'S'
    }
    else if (deck[i].Suit === 'diamonds') {
      icon = 'D'
    }
    else {
      icon = 'C'
    }

    card.innerHTML = deck[i].Value + '' + icon;
    showDeck.appendChild(card);
  }
}

window.addEventListener('load', function () {
  startDeck();
  shuffle();
  showShuffledDeck();
})
