import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  configUrl = './assets/mock_data/foods.json';

  constructor(private http: HttpClient) {
  }


  getProducts() {
    return this.http.get(this.configUrl);
  }

  getFoodDetails(id) {
    return this.http.get(this.configUrl)
  }
}


const httpOptions = {
  headers: new HttpHeaders({
    "x-rapidapi-host": "feeditem-walmart.p.rapidapi.com",
    "x-rapidapi-key": "b84cecb098mshe48cc9f7b185e0fp1c45ecjsn7d8a314b7924"
  })
};
