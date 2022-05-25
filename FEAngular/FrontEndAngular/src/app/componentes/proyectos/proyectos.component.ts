import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public proyectos:Proyectos[]=[];
  
  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  public obtenerProyectos():void{
    this.proyectosService.obtenerProyectos().subscribe({
      next:(Response:Proyectos[]) =>{
      this.proyectos=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    });
  }
}
