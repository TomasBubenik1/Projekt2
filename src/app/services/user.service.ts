import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Observable<IUsata> {
    return this.Http.get<IUsata>(`${this.baseUrl}/users`);
  }

  private _loggedInUser: IUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}') as IUser;

  get loggedInUser(): IUser {
    return this._loggedInUser;
  }
  private baseUrl = 'https://dummyjson.com';

  set loggedInUser(user: IUser) {
    this._loggedInUser = user;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  constructor(private Http: HttpClient) { }

 
  data : Observable<IUsata>= new Observable((subscriber)=>{this.Http.get<IUsata>("https://dummyjson.com/users").subscribe((data:IUsata)=>{subscriber.next(data)})})

  
}
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    postalCode: string;
    state: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    department: string;
    name: string;
    title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}
export interface IUsata {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}

