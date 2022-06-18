import { Injectable } from '@angular/core';
import{Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddExp: boolean = false;
private subject= new Subject<any>();

private showAddEducation: boolean = false;
private subject2= new Subject<any>();


  constructor() { }

  toggleAddExp():void{
    this.showAddExp = !this.showAddExp;
    this.subject.next(this.showAddExp);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

  toggleAddEducation():void{
    this.showAddEducation = !this.showAddEducation;
    this.subject2.next(this.showAddEducation);
  }

onToggle2():Observable<any>{
  return this.subject2.asObservable();
}

}
