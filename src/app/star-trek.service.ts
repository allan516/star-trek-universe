import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from './interfaces/characters.interface';
import { Ship } from './interfaces/ships.interface';
import { Civilization } from './interfaces/civilization.interface';

@Injectable({
  providedIn: 'root',
})
export class StarTrekService {
  baseUrl: string = 'https://api-star-trek.vercel.app';
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseUrl}/api/characters`);
  }

  getShipsById(id: number): Observable<Ship> {
    return this.http.get<Ship>(`${this.baseUrl}/api/ships/${id}`);
  }

  getCivilizationById(id: number): Observable<Civilization> {
    return this.http.get<Civilization>(
      `${this.baseUrl}/api/civilizations/${id}`
    );
  }
}
