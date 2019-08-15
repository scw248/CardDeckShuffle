const deck = []
const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function getDeck() {

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }

  return deck;
}

function shuffle() {
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor((Math.random() * deck.length));
    let location2 = Math.floor((Math.random() * deck.length));

    let tmp = deck[location1];
    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

function renderDeck() {
  let showDeck = document.createElement('div')
  showDeck.innerHTML = '';

  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement('div');
    let icon = ''

    if (deck[i].Suit === 'hearts') {
      icon = '?'
    }
    else if (deck[i].Suit === 'spades') {
      icon = '?'
    }
    else if (deck[i].Suit === 'diamonds') {
      icon = '?'
    }
    else {
      icon = '?'
    }

    card.innerHTML = deck[i].Value + '' + icon;
    card.className = 'card';
    showDeck.appendChild(card);
  }
}
