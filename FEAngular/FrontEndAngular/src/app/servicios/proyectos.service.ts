import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  
  private apiServerUrl=environment.apiBaseUrl

  constructor(private http:HttpClient) { }

  public obtenerProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}/Proyectos/all`);
  }

  public addProyectos(proyectos: Proyectos):Observable<Proyectos>{
    return this.http.post<Proyectos>(`${this.apiServerUrl}/Proyectos/add`,proyectos);
  }
  public editarProyectos(proyectos: Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>(`${this.apiServerUrl}/Proyectos/update`,proyectos);
  }
  public borrarProyectos(proyectosId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Proyectos/delete/${proyectosId}`);
  }
}
