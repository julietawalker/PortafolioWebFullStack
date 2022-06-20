import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { project } from 'src/assets/data/Interfaces';
import { UiService } from 'src/app/servicios/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {

  proyectoAeditar: project= { name:"", start:"", end:"", description:""};
  showEdicionProyecto:boolean=false;
  subscription?:Subscription;
  indice:number = -1;


  ProyectosList: project[]=[];
  constructor(private datosPorfolio:PorfolioService, private uiService: UiService) {
    this.subscription=this.uiService.onToggle4().subscribe(value => this.showEdicionProyecto=value); }

  ngOnInit(): void {
    this.datosPorfolio.getProjectos().subscribe(proyectos=>{
      this.ProyectosList=proyectos;
    })
  }

  onDeleteProyecto(Proyecto: project){
    this.datosPorfolio.deleteProyecto(Proyecto).subscribe(()=>
    this.ProyectosList= this.ProyectosList.filter(t=>t.id!== Proyecto.id))
  }

  editProyecto(proyecto: project){
    this.indice = this.ProyectosList.indexOf(proyecto);
    this.proyectoAeditar=proyecto;
    this.uiService.toggleEditarProyecto();
    console.log(this.showEdicionProyecto);
    console.log(this.indice, this.ProyectosList[this.indice].id, proyecto);
  }

  editarProyecto(proyecto: project){
    console.log(proyecto, proyecto.id);
    this.datosPorfolio.UpdateProyecto(proyecto, this.indice).subscribe((t)=> 
      this.ProyectosList[this.indice]=proyecto);
    this.uiService.toggleEditarProyecto();
    
  }

  addProyecto(proyecto: project){
    this.datosPorfolio.AddProyecto(proyecto).subscribe((proyecto) =>{
      this.ProyectosList.push(proyecto);})
  }

  }

