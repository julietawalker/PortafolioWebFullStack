import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { experiencia } from 'src/assets/data/ExperienciaInter';
import { educacion } from 'src/assets/data/FormacionInter';
import { Softskill, Hardskill, project, Persona } from 'src/assets/data/Interfaces';

@Injectable({
  providedIn: 'root'
})

export class PorfolioService {

  private apiURL= 'http://localhost:5000/experience'
  private apiURL2= 'http://localhost:5000/education'
  private apiURL3= 'http://localhost:5000/Hardskill'
  private apiURL4= 'http://localhost:5000/Softskill'
  private apiURL5= 'http://localhost:5000/Persona'
  private apiURL6= 'http://localhost:5000/project'

  constructor(private http:HttpClient) { }

  //Desde el Servicio y el archivo experiencia
  getExperiencia(): Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.apiURL)
  }

  getEducacion(): Observable<educacion[]>{
    return this.http.get<educacion[]>(this.apiURL2)
  }

  getHardskill(): Observable<Hardskill[]>{
    return this.http.get<Hardskill[]>(this.apiURL3)
  }
  getSoftskill(): Observable<Softskill[]>{
    return this.http.get<Softskill[]>(this.apiURL4)
  }

  getPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiURL5)
  }

  getProjectos(): Observable<project[]>{
    return this.http.get<project[]>(this.apiURL6)
  }

}
