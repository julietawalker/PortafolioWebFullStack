import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { experiencia} from 'src/assets/data/Interfaces';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})
export class AddExperienciaComponent implements OnInit {
  
  @Output() onAddExperiencia: EventEmitter<experiencia> = new EventEmitter();

  position: string="";
  institution: string="";
  img:string="";
  start_year:string="";
  end_year:string="";


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.position.length==0){
      alert("Por favor complete la Posición");
    }
    if(this.institution.length==0){
      alert("Por favor complete la Empresa");
    }
    if(this.start_year.length==0){
      alert("Por favor cargue la fecha de inicio");
    }
    if(new Date(this.start_year)>new Date(this.end_year)){
      alert("La fecha de fin no puede ser anterior a la de inicio");
      return;
    }

    const {position,institution,img, start_year,end_year} =this;
    const newExperience= {position, institution, img, start_year, end_year};
    console.log(newExperience);
    this.onAddExperiencia.emit(newExperience);
  }
}


