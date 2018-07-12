import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url: string;

  constructor(private http: HttpClient) {
  }

  getTest() {
    // this.url = this.router.url;
    this.url = window.location.href + 'api/sampleData/all';
    console.log(this.url);
    return this.http.get(this.url);
  }

}
