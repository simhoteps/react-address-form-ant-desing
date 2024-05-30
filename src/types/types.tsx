export interface IAddressForm {
  name: string;
  surname: string;
  phone: string;
  city: string;
  district: string;
  neighborhood: string;
  fullAddress: string;
  addressName: string;
  date: string;
}


export interface IDistricts {
  text: string;
  neighborhoods: string[];
}
