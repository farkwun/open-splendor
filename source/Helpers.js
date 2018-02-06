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
  const player_coins = numCoins(player);
  if (player_coins + stash.length > 10) {
    return false;
  }

  const types = stash.reduce((acc, coin) => acc.add(coin.type), new Set());

  return (
    (types.size == 3 && stash.length == 3) ||
    (types.size == 1 && stash.length == 2) ||
    player_coins >= 8
  );
}

export function canBuyCard(player_coins, player_bonus, card) {
  return card.costs.reduce((acc, cost) => {
    const type = cost.type;
    const net_coins = player_coins[type] ? player_coins[type] : 0;
    const net_bonus = player_bonus[type] ? player_bonus[type] : 0;
    return cost.val - net_coins - net_bonus <= 0 && acc;
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
  //TODO: Rewrite this function without using unnecessary map()
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
  return player.coins.reduce((amount, coin) => amount + coin.amount, 0);
}

export function getCoinAggregateFor(player) {
  return player.coins.reduce(
    (coin_dict, coin) => ((coin_dict[coin.type] = coin.amount), coin_dict),
    {}
  );
}

export function getBonusAggregateFor(player) {
  return player.cards.reduce((bonus_dict, card) => {
    if (card.type in bonus_dict) {
      bonus_dict[card.type] += 1;
    } else {
      bonus_dict[card.type] = 1;
    }
    return bonus_dict;
  }, {});
}

export function coinsSpent(card, player) {
  const bonuses = getBonusAggregateFor(player);
  return card.costs.reduce((spent, cost) => {
    const bonus = bonuses[cost.type] ? bonuses[cost.type] : 0;
    spent[cost.type] = cost.val - bonus;
    return spent;
  }, {});
}

export function replenishedCoins(coins_spent, coins) {
  return coins.map(coin => {
    const added = coins_spent[coin.type] ? coins_spent[coin.type] : 0;
    return { ...coin, amount: coin.amount + added };
  });
}

export function getCoinsLeft(coins, card, player) {
  const costs = getCostAggregate(card.costs);
  const bonuses = getBonusAggregateFor(player);
  return coins
    .map(coin => {
      if (coin.type in costs) {
        const bonus = bonuses[coin.type] ? bonuses[coin.type] : 0;
        return { ...coin, amount: coin.amount - costs[coin.type] - bonus };
      }
      return coin;
    })
    .filter(coin => coin.amount > 0);
}

export function getCostAggregate(costs) {
  return costs.reduce((dict, cost) => ((dict[cost.type] = cost.val), dict), {});
}

export function getPrestigeFor(list) {
  return list.reduce((prestige, item) => (prestige += item.prestige), 0);
}
