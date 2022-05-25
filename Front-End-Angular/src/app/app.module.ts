import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { EncabezadoComponent } from './component/encabezado/encabezado.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { SkillsComponent } from './component/skills/skills.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './component/porfolio/porfolio.component'
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';
import { PorfolioService } from './servicios/porfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PorfolioService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
