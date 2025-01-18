import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarTrekService {
  baseUrl: string = 'https://api-star-trek.vercel.app/';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<HttpClient> {
    return this.http.get<HttpClient>(`${this.baseUrl}api/characters`);
  }
}
