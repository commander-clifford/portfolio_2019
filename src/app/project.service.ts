import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    // TODO: send the message _after_ fetching the projects
    this.messageService.add('ProjectService: fetched projects');
    return of(PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    // TODO: send the message _after_ fetching the project
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(PROJECTS.find(project => project.id === id));
  }


}
