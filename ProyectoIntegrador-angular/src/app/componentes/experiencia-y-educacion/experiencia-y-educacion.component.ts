import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { experiencia } from 'src/assets/data/ExperienciaInter';
import { educacion } from 'src/assets/data/FormacionInter';


@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  @Output() btnClick = new EventEmitter();
  experienciaLista2: experiencia[]=[];
  educacionLista: educacion[]=[];

  constructor(private PorfolioService:PorfolioService) {}

  ngOnInit(): void {
    this.PorfolioService.getExperiencia().subscribe(task=>{
      this.experienciaLista2=task
    });

    this.PorfolioService.getEducacion().subscribe(carrera=>{
      this.educacionLista=carrera
    });

  }

  onClick(){
    this.btnClick.emit();
  }

}
