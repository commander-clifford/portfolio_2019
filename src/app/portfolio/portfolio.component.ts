import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit { 

  private projects_cda: Entry<any>[] = []; // define a private class property to the class which defines that this component will include a collection of several projects
  projects: object;
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
    private contentfulApiService: ContenfulApiService,
  ) {
    this.getProjects();
  }

  ngOnInit() {}

  getProjects(): void {

    // the fake way
    this.projects = this.projectService.getProjects();

    // the contenful way
    this.contentfulApiService.getProjects().then(projects_cda => this.projects_cda = projects_cda);

  }

}
