import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopledetailService {

  constructor(private http: HttpClient) { }

  getPeople(url: string): Observable<any> {
    return this.http.get<any>(url)
  }
}
