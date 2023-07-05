export interface ILoginForm {
  email: string
  password: string
}
export interface IRegisterForm {
  username: string
  email: string
  password: string
  confPassword: string
}
export interface IUser {
  username: string
  email: string
  locations: []
  isVerified: boolean
}
export interface ISessionSettings {
  tempUnit: 'C' | 'F'
  speedUnit: "km/h"|'mph'
  theme: 'default' | 'light' | 'dark'
}
export interface IGeoLocationData {
  query: string;
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
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