import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from './interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class StarTrekService {
  baseUrl: string = 'https://api-star-trek.vercel.app';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseUrl}/api/characters`);
  }
}
