// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const default_time = 2.5;
const juice_times = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5, 
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  return juice_times[name] || default_time;
}

const wedges_per_lime = {
  'small': 6,
  'medium': 8,
  'large': 10
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  return limes.reduce(wedgeReducer(wedgesNeeded, limes), 0);
//  let count = 0;
//  while (limes.length > 0 && wedgesNeeded > 0) {
//    let size = limes.shift();
//    let wedges = wedges_per_lime[size];
//    wedgesNeeded -= wedges;
//    count++;
//  }
//  return count;
}

function wedgeReducer(wedgesNeeded, limes) {
  let wedgesCount = 0;
  return function(limesCut, size) {
    if (wedgesCount < wedgesNeeded) {
      let wedges = wedges_per_lime[size];
      wedgesCount += wedges;
      limesCut++;
    }
    return limesCut;
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders.shift());
  }
  return orders;
}
