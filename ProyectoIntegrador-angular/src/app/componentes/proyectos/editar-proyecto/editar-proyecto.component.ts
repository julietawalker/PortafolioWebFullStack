import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PorfolioService } from '../../../servicios/porfolio.service';
import { project } from 'src/assets/data/Interfaces';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})

export class EditarProyectoComponent implements OnInit {

  @Output() editarProyecto: EventEmitter<project> = new EventEmitter();
  @Input()
  showEditarProyecto: boolean = false;
  @Input()
  proyAeditar:project= { name:"", start:"", end:"", description:""};

  id=this.proyAeditar.id;
  name: string=this.proyAeditar.name;
  start:string=this.proyAeditar.start;
  end?:string=this.proyAeditar.end;
  description: string=this.proyAeditar.description;
 
  constructor(private datosPorfolio: PorfolioService) {
   }

  ngOnInit(): void {

  }

  onSubmit(){
    const {name, start, end, description} =this;
    const editProyecto= {name, start, end, description};
    console.log(editProyecto);
    this.editarProyecto.emit(editProyecto);
    this.showEditarProyecto!=this.showEditarProyecto;
  }


}
