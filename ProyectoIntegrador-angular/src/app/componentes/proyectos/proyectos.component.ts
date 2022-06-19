import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { project } from 'src/assets/data/Interfaces';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
  ProyectosList: project[]=[];
  constructor(private datosPorfolio:PorfolioService) { }

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
    const indice = this.ProyectosList.indexOf(proyecto);
      if (indice==-1) {
        alert('No hay proyecto con ese indice');}
        else {
          console.log(indice, this.ProyectosList[indice].id);
        }
    this.datosPorfolio.UpdateProyecto(proyecto).subscribe((t)=>
    this.ProyectosList[indice]= t)
  }


  addProyecto(proyecto: project){
    this.datosPorfolio.AddProyecto(proyecto).subscribe((proyecto) =>{
      this.ProyectosList.push(proyecto);})
  }

  }

