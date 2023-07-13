import { useGetGeoLocation } from '../useGetGeoLocation';

describe('UseGetGeoLocation hook to get the current geolocation data', () => {
  test('I should always return geolocation data', async () => {
    const geoLocation = useGetGeoLocation();

    expect(geoLocation).toBeDefined();
  });
});
