import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

BehaviorSubject
@Injectable({
  providedIn: 'root'
})
export class AutenticaciónService {
url="http://Localhost:8080/usuario";
currentserSubject: BehaviorSubject<any>;
constructor(private http:HttpClient) {
  console.log("El servicio de autenticación esta corriendo");
  this.currentserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
 }

 IniciarSesion(credenciales:any):Observable<any>{
   return this.http.post(this.url, credenciales).pipe(map(data=>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentserSubject.next(data);
    return data;
   }))
 }

 get UsuarioAutenticado() {
   return this.currentserSubject.value;
 }
}
