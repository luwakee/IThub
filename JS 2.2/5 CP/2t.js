let cards = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
];

let encryptedCards = cards.map(card => {
    let maskedCard = card.replace(/\D/g, '').split('');
    for (let i = 4; i < maskedCard.length - 4; i++) {
        maskedCard[i] = '*';
    }
    return maskedCard.join('');
});

console.log(encryptedCards);
