import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { project} from 'src/assets/data/Interfaces';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  @Output() onAddProyecto: EventEmitter<project> = new EventEmitter();

  name: string="";
  start:string="";
  end:string="";
  description: string="";

  showAddProyecto:boolean=false;
  subscription?:Subscription;


  constructor(private uiService: UiService) {  
    this.subscription=this.uiService.onToggle3().subscribe(value => this.showAddProyecto=value);}

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.name.length==0){
      alert("Por favor complete la Posición");
    }
    if(this.start.length==0){
      alert("Por favor cargue la fecha de inicio");
    }
    if(new Date(this.start)>new Date(this.end)){
      alert("La fecha de fin no puede ser anterior a la de inicio");
      return;
    }

    const {name, start, end, description} =this;
    const newProject= {name, start, end, description};
    this.onAddProyecto.emit(newProject);
  }

  addProyecto(){
    this.uiService.toggleAddProyecto();
    console.log(this.showAddProyecto);
  }

}
