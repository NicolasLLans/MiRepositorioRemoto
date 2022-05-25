import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticaciónService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private autenticacionService : AutenticaciónService, private rutas:Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.autenticacionService.UsuarioAutenticado;
      if (currentUser && currentUser.accesToken){
        return true;  
      }else{
        this.rutas.navigate(['iniciar-sesion']);
        return false;
      }
  }
  
}
