import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http : HttpClient) { }

  getPokemons(offset: number = 0): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`;
    return this.http.get<any>(url);
  }

  getPokemonsByType(type : string) : Observable<any> {
    const url = `https://pokeapi.co/api/v2/type/${type}`;
    return this.http.get<any>(url);
  }
}
