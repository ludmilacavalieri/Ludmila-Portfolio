import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()

form:FormGroup;
//Inyectar en el constructor el formBuilder
  constructor(private formBuilder:FormBuilder) {

    //Creamos el grupo de controles para el formulario de login
    this.form=this.formBuilder.group({
     email:['',[Validators.required, Validators.email]],
     password:['',[Validators.required, Validators.minLength(8)]],


    })
   }

   onEnviar(event: Event) {
     //Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault;
    console.log("Hola, hice click!");
    this.btnClick.emit();

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra

    } else {
      //Corremos todas las validacioens para se ejecuten los mensajes de error en el template
     this.form.markAllAsTouched();
    }
   }

  ngOnInit(): void {
  }
get Email() {
return this.form.get('email');
  }
get Password() {
  return this.form.get('password');
  }
}
