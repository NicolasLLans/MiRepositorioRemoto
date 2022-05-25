import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiServerUrl=environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  public verPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}/ver/personas`);
  }
}
