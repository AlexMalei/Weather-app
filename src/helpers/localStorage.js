import { getDifferenceInHours } from './date';

function LocalStorage() {
  return {
    getItem(name) {
      localStorage.getItem(name);
    },

    setItem(name, value) {
      localStorage.setItem(name, value);
    },

    removeItem(name) {
      localStorage.removeItem(name);
    },

    clearAll() {
      localStorage.clear();
    }
  };
}

function DataStorage() {
  const localStorage = new LocalStorage();

  function changeLastUpdateData() {
    localStorage.setItem(new Date().getTime());
  }

  function isNeedUpdateStorage() {
    const now = new Date().getTime();
    const lastUpdate = localStorage.getItem('updateTime');

    const differenceInHours = getDifferenceInHours(now, lastUpdate);

    return differenceInHours > 2;
  }

  return {
    setCity(city) {
      localStorage.setItem('city', city);
      changeLastUpdateData();
    },

    setWeatherService(weatherService) {
      localStorage.setItem('weatherService', weatherService);
      changeLastUpdateData();
    },

    setWeather(weather) {
      localStorage.setItem('weather', weather);
      changeLastUpdateData();
    },

    getCity() {
      return isNeedUpdateStorage() && localStorage.getItem('city');
    },

    getWeatherService() {
      return isNeedUpdateStorage() && localStorage.getItem('weatherService');
    },

    getWeather() {
      return isNeedUpdateStorage() && localStorage.getItem('weather');
    }
  };
}

export default DataStorage;
