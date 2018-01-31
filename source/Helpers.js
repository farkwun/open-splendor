export function addCoinAmount(coins, type, val) {
  let new_coins = coins.map(coin => {
    let new_coin = {...coin};
    if (new_coin.type === type) {
      new_coin.amount += val;
    }
    return new_coin;
  });
  return new_coins;
}
