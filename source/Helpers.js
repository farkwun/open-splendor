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

export function stashIsValid(stash){
  let types = new Set();
  let coin;
  for (let i = 0; i < stash.length; i++){
    coin = stash[i];
    types.add(coin.type);
  }

  return(
    (types.size == 3 && stash.length == 3) ||
    (types.size == 1 && stash.length == 2)
  );
}
