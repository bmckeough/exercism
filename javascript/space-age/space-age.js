// Orbital periods in seconds
const earth_orbital_period = 31_557_600;

const orbital_periods = {
  mercury: 0.2408467 * earth_orbital_period,
  venus: 0.61519726 * earth_orbital_period,
  earth: 1.0 * earth_orbital_period,
  mars: 1.8808158 * earth_orbital_period,
  jupiter: 11.862615 * earth_orbital_period,
  saturn: 29.447498 * earth_orbital_period,
  uranus: 84.016846 * earth_orbital_period,
  neptune: 164.79132 * earth_orbital_period,
};

// returns a function that will round a number to the desired number of decimal
// places
const rounder = (decimal_places) => {
  const multiplierDivider = 10**decimal_places;
  return (value_to_round) => {
    return Math.round(value_to_round * multiplierDivider) / multiplierDivider;
  }
}

const roundToTwoDecimals = rounder(2);

export const age = (planet, age) => roundToTwoDecimals(age / orbital_periods[planet]);
