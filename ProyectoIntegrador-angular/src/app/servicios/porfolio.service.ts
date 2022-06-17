import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import { educacion, experiencia, Softskill, Hardskill, project, Persona } from '../../../src/assets/data/Interfaces';

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'aplication/json'})}


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

  deleteExp(experiencia: experiencia): Observable<experiencia>{
    console.log(experiencia.id)
    const url=`${this.apiURL}/${experiencia.id}`
    return this.http.delete<experiencia>(url);
  }

  AddExp(experiencia: experiencia): Observable<experiencia>{
    console.log(experiencia);
    return this.http.post<experiencia>(this.apiURL,experiencia,httpOptions);
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
