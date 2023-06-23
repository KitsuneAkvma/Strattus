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