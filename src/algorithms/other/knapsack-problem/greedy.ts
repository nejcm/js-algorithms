import {Item} from './Item';

// greedy approach
export default function knapsackProblem(
  items: Item[],
  limit: number,
  fractions = false,
): Item[] {
  if (!items.length) return items;

  // sort items by value
  let sortedItems = [...items].sort((item1, item2) => item2.value - item1.value);
  // sort items by value per weight ration
  sortedItems = sortedItems.sort(
    (item1, item2) => item2.value / item2.weight - item1.value / item1.weight,
  );

  let totalWeight = 0;
  const result: Item[] = [];
  // loop all items
  for (let i = 0; i < sortedItems.length; i++) {
    // break if knapsack is full
    if (totalWeight >= limit) break;

    // copy item
    const current = {...sortedItems[i]};
    // calculate available weight
    const availableWeight = limit - totalWeight;
    // calculate amount of current items we can fit in the knapsack
    let maxAvailable = availableWeight / current.weight;
    // if fractions allowed
    maxAvailable = fractions ? maxAvailable : Math.floor(maxAvailable);
    // add only the amount that will fit
    const quantity = Math.min(1, maxAvailable);
    // skip item if it does not fit
    if (quantity === 0) continue;
    // update current ad total weight
    current.weight *= quantity;
    current.value *= quantity;
    totalWeight += current.weight;
    // add item to result
    result.push(current);
  }

  return result;
}
