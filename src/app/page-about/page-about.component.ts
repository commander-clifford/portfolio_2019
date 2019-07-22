import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Project } from '../_models/project';
import { ProjectService } from '../_services/project.service';
import { OrderPipe } from 'ngx-order-pipe';

import { ContenfulApiService } from '../_services/contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {

  public projects: object;
  public selectedProject: Project;
  public projects_cda: Entry<any>[] = []; // define a private class property to the class which defines that this component will include a collection of several projects

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public projectService: ProjectService,
    public contentfulApiService: ContenfulApiService,
  ) { }

  getProjects(): void {
    this.projects = this.projectService.getProjects();

    // the contenful way
    this.contentfulApiService.getProjects()
      .then(projects_cda => this.projects_cda = projects_cda)
      .then(projects_cda => console.log('Portfolio pieces',projects_cda));
  }

  ngOnInit() {
    this.getProjects();
  }

  goBack(): void {
    this.location.back();
  }

}
