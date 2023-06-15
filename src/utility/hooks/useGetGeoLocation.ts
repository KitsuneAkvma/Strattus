import axios, { AxiosResponse } from "axios";
import { IGeoLocationData } from "../../Redux/Slices/SessionSlice/types";



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
