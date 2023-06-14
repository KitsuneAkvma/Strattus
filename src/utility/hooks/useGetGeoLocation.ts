import axios, { AxiosResponse } from "axios";

export interface IGeoLocationData {
  city: { name: string; names: object };
  continent: {
    code: string;
    geoname_id: number;
    name: string;
    names: [object];
  };
  country: {
    capital: string;
    currency: string;
    flag: string;
    geoname_id: number;
    is_in_european_union: boolean;
    iso_code: string;
    languages: [{ iso_code: string; name: string; name_native: string }];
    name: string;
    native_name: string;
    names: [object];
    phone_code: string;
  };
  location: { latitude: number; longitude: number };
  subdivisions: [object];
  state: { name: string };
  datasource: [object];
  ip: string;
}

const API_KEY = process.env.GEOLOCATION_API_KEY;
const API_URL = API_KEY
  ? `https://api.geoapify.com/v1/ipinfo?&apiKey=${API_KEY}`
  : null;

export const useGetGeoLocation = async () => {
  try {
    if (!API_URL) {
      throw new Error("Missing geolocation API key");
    }
    const res: AxiosResponse<IGeoLocationData> = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    const message = String((err as Error).message);
    throw new Error(message);
  }
};
