import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    return of(PROJECTS.find(project => project.id === id));
  }

}
