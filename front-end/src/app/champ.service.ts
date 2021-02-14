import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {  }

  public getChampionRotations(): Observable<any> {
    return this.http.get('https://localhost:44304/FreeChamp');
  }

  public getAllChamps(): Observable<any> {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/11.3.1/data/pt_BR/champion.json');
  }

}
