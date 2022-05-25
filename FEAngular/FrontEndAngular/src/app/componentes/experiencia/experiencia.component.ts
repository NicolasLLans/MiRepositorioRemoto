import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:Experiencia[]=[];

  constructor(private experienciaService:ExperienciaService ) { }

  ngOnInit(): void {
    this.obtenerExperiencia();
  }
  public obtenerExperiencia():void{
    this.experienciaService.obtenerExperiencia().subscribe({
      next:(Response:Experiencia[]) =>{
      this.experiencias=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    });
  }

}
