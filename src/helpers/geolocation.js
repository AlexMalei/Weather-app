export function getGeolocationPromise() {
  function onSuccess(position, resolve) {
    resolve(position.coords);
  }

  function onError(error, reject) {
    reject(error.message);
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => onSuccess(position, resolve),
      error => onError(error, reject)
    );
  });
}
