import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { map } from 'rxjs';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { experiencia, educacion } from 'src/assets/data/Interfaces';


@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  @Output() onDeleteExp: EventEmitter<experiencia> = new EventEmitter()

  experienciaLista: experiencia[]=[];
  educacionLista: educacion[]=[];

  constructor(private PorfolioService:PorfolioService) {}

  ngOnInit(): void {
    this.PorfolioService.getExperiencia().subscribe(task=>{
      this.experienciaLista=task
    });

    this.PorfolioService.getEducacion().subscribe(carrera=>{
      this.educacionLista=carrera
    });

  }

  onDelete(experiencia: experiencia){
    this.PorfolioService.deleteExp(experiencia).subscribe(()=>
    this.experienciaLista= this.experienciaLista.filter(t=>t.id!== experiencia.id))
  }

  actualizarExp(experiencia: experiencia){
    console.log(experiencia);
  }

  addExperiencia(experiencia: experiencia){
    console.log(experiencia)
      this.PorfolioService.AddExp(experiencia).subscribe((exp) =>{
        this.experienciaLista.push(exp);
        console.log(exp);}
        );
  }

}
