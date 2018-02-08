export function addCoinAmount(coins, type, val) {
  let newCoins = coins.map(coin => {
    let newCoin = { ...coin };
    if (newCoin.type === type) {
      newCoin.amount += val;
    }
    return newCoin;
  });
  return newCoins;
}

export function canTakeStash(player, stash) {
  const playerCoins = numCoins(player);
  if (playerCoins + stash.length > 10) {
    return false;
  }

  const types = stash.reduce((acc, coin) => acc.add(coin.type), new Set());

  return (
    (types.size === 3 && stash.length === 3) ||
    (types.size === 1 && stash.length === 2) ||
    playerCoins >= 8
  );
}

export function canBuyCard(playerCoins, playerBonus, card) {
  return Object.keys(card.costs).reduce((buyable, type) => {
    const netCoins = playerCoins[type] ? playerCoins[type] : 0;
    const netBonus = playerBonus[type] ? playerBonus[type] : 0;
    return card.costs[type] - netCoins - netBonus <= 0 && buyable;
  }, true);
}

export function updateIn(list, cond, func) {
  return list.map(object => {
    if (cond(object)) {
      return func(object);
    }
    return object;
  });
}

export function mergeCoins(coins, stash) {
  return stash.reduce(
    (newCoins, { type }) =>
      newCoins[type] === undefined
        ? { ...newCoins, [type]: 1 }
        : ((newCoins[type] += 1), newCoins),
    coins
  );
}

export function numCoins(player) {
  return Object.keys(player.coins).reduce(
    (amount, key) => amount + player.coins[key],
    0
  );
}

export function getCoinAggregateFor(player) {
  return player.coins.reduce(
    (coinDict, coin) => ((coinDict[coin.type] = coin.amount), coinDict),
    {}
  );
}

export function getBonusAggregateFor(player, cards) {
  return player.cards.reduce((bonusDict, cardId) => {
    const card = cards[cardId];
    if (card.type in bonusDict) {
      bonusDict[card.type] += 1;
    } else {
      bonusDict[card.type] = 1;
    }
    return bonusDict;
  }, {});
}

export function coinsSpent(card, player, cards) {
  const bonuses = getBonusAggregateFor(player, cards);
  return Object.keys(card.costs).reduce((spent, type) => {
    const bonus = bonuses[type] ? bonuses[type] : 0;
    spent[type] = card.costs[type] - bonus;
    return spent;
  }, {});
}

export function replenishedCoins(coinsSpent, coins) {
  return Object.keys(coinsSpent).reduce(
    (newCoins, key) => ((newCoins[key] += coinsSpent[key]), newCoins),
    coins
  );
}

export function getCoinsLeft(coins, card, player, cards) {
  const costs = card.costs;
  const bonuses = getBonusAggregateFor(player, cards);
  return Object.keys(coins).reduce((coinsLeft, key) => {
    const bonus = bonuses[key] ? bonuses[key] : 0;
    const cost = costs[key] ? costs[key] : 0;
    if (coins[key] !== cost - bonus) {
      coinsLeft[key] = coins[key] - cost + bonus;
    }
    return coinsLeft;
  }, {});
}

export function getCostAggregate(costs) {
  return costs.reduce((dict, cost) => ((dict[cost.type] = cost.val), dict), {});
}

export function getPrestigeFor(list) {
  return list.reduce((prestige, item) => (prestige += item.prestige), 0);
}
