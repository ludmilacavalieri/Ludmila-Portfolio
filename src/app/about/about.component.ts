import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void {
    this.aboutService.getUser().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, usuario?: Usuario):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    (mode==='edit')
      this.editUsuario=usuario;
      button.setAttribute('data-target','#editUsuarioModal');
    
    container?.appendChild(button);
    button.click();
    }
    

}
