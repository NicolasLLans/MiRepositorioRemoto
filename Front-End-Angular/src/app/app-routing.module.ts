import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './component/porfolio/porfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'porfolio' ,component:PorfolioComponent, canActivate:[GuardGuard]},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
