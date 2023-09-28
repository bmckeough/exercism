// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Maximum humidity as a whole number meaning percentage
 */
const MAX_HUMIDITY = 70;

/**
 * Maximum temparature as degrees celsius
 */
const MAX_TEMP = 500;

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > MAX_HUMIDITY ) throw new Error('Excess humidity detected');
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) throw new ArgumentError('Temperature sensor is broken');
  if (temperature > MAX_TEMP) throw new OverheatingError(temperature);
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  const { check, alertDeadSensor, alertOverheating, shutdown } = actions;
  try {
    check();
  } catch (error) {
    if (error instanceof ArgumentError) return alertDeadSensor();
    if (error instanceof OverheatingError && error.temperature < 600) return alertOverheating();
    if (error instanceof OverheatingError) return shutdown();
    throw error;
  }
}
