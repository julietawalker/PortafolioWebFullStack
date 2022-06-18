import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { educacion} from 'src/assets/data/Interfaces';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {
  
  @Output() onAddEducacion: EventEmitter<educacion> = new EventEmitter();

institution: string="";
title: string="";
img:string="";
score: number=0;
start:string="";
end:string="";
showAddEdu:boolean=false;
subscription?:Subscription;

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle2().subscribe(value => this.showAddEdu=value);
   }

  ngOnInit(): void {
  }

  onSubmit(){ 
    if(this.institution.length==0){
      alert("Por favor complete la Institución");
    }
    if(this.title.length==0){
      alert("Por favor complete la Formación");
    }

    if(this.start.length==0){
      alert("Por favor cargue la fecha de inicio");
    }
    if(new Date(this.start)>new Date(this.end)){
      alert("La fecha de fin no puede ser anterior a la de inicio");
      return;
    }

    const {institution, title, img, score, start, end} =this;
    const newEducacion= {institution, title, img, score, start, end};
    console.log(newEducacion);
    this.onAddEducacion.emit(newEducacion);
  }
  
  addEducation(){
    this.uiService.toggleAddEducation();
    console.log(this.showAddEdu)
  }
}

