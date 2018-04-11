import { cards } from "../data/static";

export const maxCoins = 10;

const YELLOW = "yellow";

export function canTakeStash(player, stash, coins) {
  const playerCoins = numCoins(player);
  if (playerCoins + stash.length > maxCoins) {
    return false;
  }

  const types = stash.reduce((acc, coin) => acc.add(coin.type), new Set());

  if (types.size === 1 && stash.length === 2) {
    return coins[stash[0].type] + stash.length >= 4;
  }

  return (types.size === 3 && stash.length === 3) || playerCoins >= 8;
}

export function canBuyCard(player, cardId) {
  const playerBonus = getBonusAggregateFor(player);
  const playerJokers = player.coins[YELLOW] ? player.coins[YELLOW] : 0;
  return (
    Object.keys(cards[cardId].costs).reduce((costs, type) => {
      const netCoins = player.coins[type] ? player.coins[type] : 0;
      const netBonus = playerBonus[type] ? playerBonus[type] : 0;
      return (
        costs + Math.max(cards[cardId].costs[type] - netCoins - netBonus, 0)
      );
    }, 0) <= playerJokers
  );
}

export function canReserveCard(player) {
  return player.reserved.length <= 2;
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

export function getBonusAggregateFor(player) {
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

export function coinsSpent(cardId, player) {
  const bonuses = getBonusAggregateFor(player);
  return Object.keys(cards[cardId].costs).reduce((spent, type) => {
    const bonus = bonuses[type] ? bonuses[type] : 0;
    spent[type] = cards[cardId].costs[type] - bonus;
    return spent;
  }, {});
}

export function replenishedCoins(coinsSpent, coins) {
  return Object.keys(coinsSpent).reduce(
    (newCoins, key) => ((newCoins[key] += coinsSpent[key]), newCoins),
    coins
  );
}

export function getCoinsLeft(coins, cardId, player) {
  const costs = cards[cardId].costs;
  const bonuses = getBonusAggregateFor(player);
  return Object.keys(coins).reduce((coinsLeft, key) => {
    const bonus = bonuses[key] ? bonuses[key] : 0;
    const cost = costs[key] ? costs[key] : 0;
    if (coins[key] !== cost - bonus) {
      coinsLeft[key] = coins[key] - cost + bonus;
    }
    return coinsLeft;
  }, {});
}

export function getPrestigeFor(list) {
  return list.reduce((prestige, item) => (prestige += item.prestige), 0);
}

export function getCurrentTooltip(history) {
  return history[history.length - 1];
}

export function range(a, b = null) {
  let ret = [];
  const min = b ? a : 0;
  const max = b || a;

  for (let i = min; i < max; i++) {
    ret.push(i);
  }

  return ret;
}
