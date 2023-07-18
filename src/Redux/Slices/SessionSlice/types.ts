import { IWeatherData } from '../WeatherSlice/types';

export interface ILoginForm {
  email: string;
  password: string;
}
export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confPassword: string;
}
export interface IUser {
  username: string;
  email: string;
  locations: [];
  isVerified: boolean;
}
export interface ISessionSettings {
  tempUnit: 'C' | 'F';
  speedUnit: 'km/h' | 'mph';
  theme: 'default' | 'light' | 'dark';
}
export interface IGeoLocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}



export interface ISearchResult {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}
export type TSavedLocationsUrls = string[] | [];
export type TSavedLocations = IWeatherData[] | [];
