import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  baseUrl = 'https://swapi.dev/api/people';

  // baseUrl = 'https://akabab.github.io/starwars-api/api/all.json';

    constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPage(url: string): Observable<any> {
    return this.http.get<any>(url)
  }

}