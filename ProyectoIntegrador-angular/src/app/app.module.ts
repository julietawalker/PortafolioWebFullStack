import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';

import { AddExperienciaComponent } from './componentes/experiencia-y-educacion/add-experiencia/add-experiencia.component';
import { AddEduComponent } from '../app/componentes/experiencia-y-educacion/add-edu/add-edu.component';
import { AddProyectoComponent } from './componentes/proyectos/add-proyecto/add-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    AddExperienciaComponent,
    AddEduComponent,
    AddProyectoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
