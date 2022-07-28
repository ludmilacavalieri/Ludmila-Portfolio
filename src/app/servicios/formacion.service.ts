import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formacion } from '../models/formacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  getFormacion() {
    throw new Error('Method not implemented.');
  }
private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getFormaciones():Observable<Formacion[]>{
    return this.http.get<Formacion[]>(`${this.apiServerUrl}/educacion/all`);
  }

  public addFormacion(formacion: Formacion):Observable<Formacion>{
    return this.http.post<Formacion>(`${this.apiServerUrl}/educacion/add`,formacion);
  }

  public updateFormacion(formacion: Formacion):Observable<Formacion>{
    return this.http.put<Formacion>(`${this.apiServerUrl}/educacion/update`,formacion);
  }

  public deleteFormacion(formacionId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${formacionId}`);
  }
}
