import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURl: string = 'https://demo0989699.mockable.io/';

  constructor(private http: HttpClient) { };

  getAllEmp() {
    return this.http.get(`${this.apiURl}employees`);
  }

  updateEmp() {
    return this.http.put
  }

  createNewEmp(obj: any) {
    return this.http.post(`${this.apiURl}create`, obj);
  }
}
