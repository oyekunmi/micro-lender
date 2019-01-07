import { User } from "./user.model";

export interface Profile {
  username: string;
  bio: string;
  sex: string;
  name: string;
  phone: string;
}

export interface CustomerProfile extends Profile{
  firstName: string;
  lastName: string;
  address: string;
}

export interface TellerProfile extends Profile{
  merchant: string;
}

export interface MerchantProfile extends Profile{

}