import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Skill } from '../models/skills';
import { SkillService } from '../servicios/skills.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class SkillComponent implements OnInit {

  public skills: Skill[]=[];
  public editSkill:Skill | undefined;
  public deleteSkill:Skill | undefined;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }

    public getSkills():void {
      this.skillService.getSkills().subscribe({
        next:(Response: Skill[]) =>{
          this.skills=Response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
    public onOpenModal(mode:String, skill?: Skill):void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.style.display='none';
      button.setAttribute('data-toggle', 'modal');
      if(mode==='add'){
        button.setAttribute('data-target', '#addSkillModal');
      }else if (mode==='delete'){
        this.deleteSkill=skill;
        button.setAttribute('data-target','#deleteSkillModal');
      }else if (mode==='edit'){
        this.editSkill=skill;
        button.setAttribute('data-target','#editSkillModal');
      }
      container?.appendChild(button);
      button.click();

      }
      public onAddSkill(addForm: NgForm){
        document.getElementById('add-skill-form')?.click();
        this.skillService.addSkill(addForm.value).subscribe({
          next: (response: Skill) => {
            console.log(response);
            this.getSkills();
            addForm.reset();
          },
          error:(error:HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          }
        })
      }

      public onUpdateSkill(skill: Skill){
        this.editSkill=skill;
        document.getElementById('add-skill-form')?.click();
        this.skillService.updateSkill(skill).subscribe({
          next: (response: Skill) => {
            console.log(response);
            this.getSkills();
          },
          error:(error:HttpErrorResponse) => {
            alert(error.message);
          }

        })
      }

      public onDeleteSkill(idSkill: number):void{
         this.skillService.deleteSkill(idSkill).subscribe({
          next: (response:void) => {
            console.log(response);
            this.getSkills();
          },
          error:(error:HttpErrorResponse) => {
            alert(error.message);
          }

        })
      }

    }

