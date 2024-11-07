import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface AddressDTO {
  id: number;
  street: String;
  number: String;
  postalCode: String;
  city: String;
  country: String;
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private UrlAddress: string = 'http://localhost:5050/address';
  constructor(private http: HttpClient) { }

  getAllAddress(): Observable<AddressDTO[]> {
    return this.http.get<AddressDTO[]>(this.UrlAddress);
  }
}
