export const useGetGeoLocation = async () => {
  try {
    const geolocation = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );

    const { latitude, longitude } = geolocation.coords;
    const coords = `${latitude},${longitude}`;

    return coords;
  } catch (err) {
    const message = String((err as Error).message);
    throw new Error(message);
  }
};
