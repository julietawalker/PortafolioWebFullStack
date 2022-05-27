import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Softskill, Hardskill } from 'src/assets/data/Interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  SoftskillList: Softskill[]=[];
  HardskillList: Hardskill[]=[];

  constructor(private PorfolioService:PorfolioService) { }

  ngOnInit(): void {

    this.PorfolioService.getSoftskill().subscribe(skill=>{
      this.SoftskillList=skill
    });

    this.PorfolioService.getHardskill().subscribe(skill=>{
      this.HardskillList=skill
    });

}
}
