import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiServerUrl=environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  public obtenerSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills/all`);
  }

}
