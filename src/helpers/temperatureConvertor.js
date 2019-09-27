const KELVIN_CELSIUS_CONSTANT = 273;

export function kelvinToCelsius(degreesInKelvin) {
  return Math.round(degreesInKelvin - KELVIN_CELSIUS_CONSTANT);
}

export function celsiusToKalvin(degreesInCelsius) {
  return Math.round(degreesInCelsius + KELVIN_CELSIUS_CONSTANT);
}
