export const REQUEST_IP_URL = 'http://jsonip.com';
export const REQUEST_CITY_IP_URL_TEMPLATE =
  'http://api.ipstack.com/IP?access_key=fc4e84ea44987c1c554a04634efea854';

/*
  RU language used because request in EN return result "Vítebsk" with strange char 'í' (not usual i letter)
  Then weather service can't handle this city name.
 */
export const REQUEST_CITY_GEOLOCATION_URL_TEMPLATE =
  'https://api.opencagedata.com/geocode/v1/json?q=LATITUDE+LONGITUDE&key=adf6ad2a9c6042e2802c98b7c11353f5&language=ru';

export const REQUEST_WEATHER_URL_TEMPLATE =
  'http://api.openweathermap.org/data/2.5/weather?q=CITY&appid=cade3f70c80fedc625d11e7e74acc93b';
