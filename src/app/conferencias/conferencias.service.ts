import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conferencias } from './conferencias';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConferenciasService {
  private apiUrl = environment.baseUrl ;
constructor(private http: HttpClient) { }

getConferencias(): Observable<Conferencias[]> {
  return this.http.get<Conferencias[]>(this.apiUrl);
}
}
