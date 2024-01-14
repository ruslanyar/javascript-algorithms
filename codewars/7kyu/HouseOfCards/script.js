// You want to build a standard house of cards, but you don't know how many cards you will need. Write a program which will count the minimal number of cards according to the number of floors you want to have. For example, if you want a one floor house, you will need 7 of them (two pairs of two cards on the base floor, one horizontal card and one pair to get the first floor).

function houseOfCards(floors) {
  if (floors < 1) throw new Error("Must be at least one floor");
  if (floors === 1) return (floors + 1) * 2 + floors + 2;
  return (floors + 1) * 2 + floors + houseOfCards(floors - 1);
}

console.log(houseOfCards(2));
