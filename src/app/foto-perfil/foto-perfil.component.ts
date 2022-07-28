import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { PerfilService } from 'src/app/servicios/perfil.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit {
  
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private perfilService : PerfilService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void {
    this.perfilService.getUser().subscribe({
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
    
    public onUpdateUsuario(usuario: Usuario){
      this.editUsuario=usuario;
      document.getElementById('add-usuario-form')?.click();
      this.perfilService.updateUsuario(usuario).subscribe({
        next: (response: Usuario) => {
          console.log(response);
          this.getUser();
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message);
        }

      })
    }


}
