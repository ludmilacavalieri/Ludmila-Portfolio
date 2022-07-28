import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AboutComponent } from './about/about.component';
import { LogrosComponent } from './logros/logros.component';
import { SkillComponent } from './aptitudes/aptitudes.component';
import { FooterComponent } from './footer/footer.component';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { TitulocvComponent } from './titulocv/titulocv.component';
import { Page404Component } from './page404/page404.component';

//En este componente construireemos un formulario de login
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

import { PortfolioComponent } from './portfolio/portfolio.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavBarComponent,
    CarruselComponent,
    FormacionComponent,
    ExperienciaComponent,
    AboutComponent,
    SkillComponent,
    LogrosComponent,
    FooterComponent,
    FotoPerfilComponent,
    TitulocvComponent,
    Page404Component,
    IniciarSesionComponent,
    PortfolioComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  
//declarations: [
//AppComponent,IniciarSesionComponent, 
// ]

providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
