import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  public personas:Persona[]=[];
  constructor(private personaService:PersonaService ) { }

  ngOnInit(): void {
    this.verPersona();
  }
  public verPersona():void{
    this.personaService.verPersona().subscribe({
      next:(Response:Persona[]) =>{
      this.personas=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message)
      }
    });
  }

}
