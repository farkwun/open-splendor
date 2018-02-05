export function addCoinAmount(coins, type, val) {
  let new_coins = coins.map(coin => {
    let new_coin = { ...coin };
    if (new_coin.type === type) {
      new_coin.amount += val;
    }
    return new_coin;
  });
  return new_coins;
}

export function canTakeStash(player, stash) {
  let player_coins = numCoins(player);
  if (player_coins + stash.length > 10) {
    return false;
  }
  let types = new Set();
  let coin;
  for (let i = 0; i < stash.length; i++) {
    coin = stash[i];
    types.add(coin.type);
  }

  return (
    (types.size == 3 && stash.length == 3) ||
    (types.size == 1 && stash.length == 2) ||
    player_coins >= 8
  );
}

export function canBuyCard(player_coins, player_bonus, card) {
  let costs = 0;
  card.costs.map(cost => {
    let type = cost.type;
    let net_coins = player_coins[type] ? player_coins[type] : 0;
    let net_bonus = player_bonus[type] ? player_bonus[type] : 0;

    let net = cost.val - net_coins - net_bonus;
    if (net > 0) {
      costs += 1;
    }
  });
  return costs <= 0;
}

export function updateObject(key, objects, func) {
  let new_objects = objects.map(object => {
    if (object.id === key) {
      return func(object);
    }
    return object;
  });
  return new_objects;
}

export function mergeCoins(coins, stash) {
  let new_coins = [...coins];
  stash.map(coin => {
    let new_coin = new_coins.find(nc => nc.type === coin.type);
    if (new_coin) {
      new_coin.amount += 1;
    } else {
      new_coins.push({ type: coin.type, amount: 1 });
    }
  });
  return new_coins;
}

export function numCoins(player) {
  let num = 0;
  player.coins.map(coin => {
    num += coin.amount;
  });
  return num;
}

export function getCoinsFor(player) {
  let coins = {};
  player.coins.map(coin => {
    coins[coin.type] = coin.amount;
  });
  return coins;
}

export function getBonusesFor(player) {
  let bonuses = {};
  player.cards.map(card => {
    if (card.type in bonuses) {
      bonuses[card.type] += 1;
    } else {
      bonuses[card.type] = 1;
    }
  });
  return bonuses;
}
