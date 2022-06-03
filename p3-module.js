function validDenomination(coin) {
  const values = [1, 5, 10, 25, 50, 100];
  if (values.indexOf(coin) !== -1) return true;
  else return false;
}
//console.log(validDenomination(5));

function valueFromCoinObject(obj) {
  let { denom = 0, count = 0 } = obj;
  return validDenomination(denom) ? count * denom : 0;
}
//console.log(valueFromCoinObject({ denom: 5, count: 15 }));

function valueFromArray(arr) {
  return arr.reduce(
    (accumulater, coinObject) => accumulater + valueFromCoinObject(coinObject),
    0
  );
}

//console.log(valueFromArray([{ denom: 5, count: 10 }]));


function coinCount(...coinage) {
  return valueFromArray(coinage);
}
//console.log(coinCount({denom:25, count:2},{denom:10,count:5}))

module.exports = {
  coinCount,
};

console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
const coins = [
  { denom: 25, count: 2 },
  { denom: 1, count: 7 },
];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins)); // Extra credit
