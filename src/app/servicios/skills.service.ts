import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkill() {
    throw new Error('Method not implemented.');
  }
private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/skill/all`);
  }

  public addSkill(skill: Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.apiServerUrl}/skill/add`,skill);
  }

  public updateSkill(skill: Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/skill/update`,skill);
  }

  public deleteSkill(skillId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skill/delete/${skillId}`);
  }
}
