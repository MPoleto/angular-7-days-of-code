import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService<T> {

  private readonly API = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  obter(path: string, search?: string): Observable<T> {
    let buscar = search ? `/?search=${search}` : '';
    return this.http.get<T>(this.API + path + buscar);
  }
}
