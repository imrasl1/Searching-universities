import { Injectable } from '@angular/core';
import { RootUniversities } from '../models/university.models';
import { HttpClient } from '@angular/common/http'
import { Root2, RootCountries } from '../models/coutries.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  constructor(private _httpClient: HttpClient) { }
  async getCountries(){
    let countriesName = await this._httpClient.get<RootCountries>('https://restcountries.com/v3.1/all').toPromise() as RootCountries
    return countriesName
  }
  async getUniversities (countryName: string) {
    let result = await this._httpClient.get<RootUniversities>('http://universities.hipolabs.com/search?country='+ countryName).toPromise() as RootUniversities
    return result
  }
}
