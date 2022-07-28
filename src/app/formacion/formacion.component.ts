import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formacion } from '../models/formacion';
import { FormacionService } from '../servicios/formacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  public formaciones: Formacion[]=[];
  public editFormacion:Formacion | undefined;
  public deleteFormacion:Formacion | undefined;

  constructor(private formacionService: FormacionService) { }

  ngOnInit(): void {
    this.getFormaciones();
  }

    public getFormaciones():void {
      this.formacionService.getFormaciones().subscribe({
        next:(Response: Formacion[]) =>{
          this.formaciones=Response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
    public onOpenModal(mode:String, formacion?: Formacion):void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.style.display='none';
      button.setAttribute('data-toggle', 'modal');
      if(mode==='add'){
        button.setAttribute('data-target', '#addFormacionModal');
      }else if (mode==='delete'){
        this.deleteFormacion=formacion;
        button.setAttribute('data-target','#deleteFormacionModal');
      }else if (mode==='edit'){
        this.editFormacion=formacion;
        button.setAttribute('data-target','#editFormacionModal');
      }
      container?.appendChild(button);
      button.click();

      }
      public onAddFormacion(addForm: NgForm){
        document.getElementById('add-formacion-form')?.click();
        this.formacionService.addFormacion(addForm.value).subscribe({
          next: (response: Formacion) => {
            console.log(response);
            this.getFormaciones();
            addForm.reset();
          },
          error:(error:HttpErrorResponse) => {
            alert(error.message);
            addForm.reset();
          }
        })
      }

      public onUpdateFormacion(formacion: Formacion){
        this.editFormacion=formacion;
        document.getElementById('add-formacion-form')?.click();
        this.formacionService.updateFormacion(formacion).subscribe({
          next: (response: Formacion) => {
            console.log(response);
            this.getFormaciones();
          },
          error:(error:HttpErrorResponse) => {
            alert(error.message);
          }

        })
      }

      public onDeleteFormacion(idEdu: number):void{
         this.formacionService.deleteFormacion(idEdu).subscribe({
          next: (response:void) => {
            console.log(response);
            this.getFormaciones();
          },
          error:(error:HttpErrorResponse) => {
            alert(error.message);
          }

        })
      }

    }

