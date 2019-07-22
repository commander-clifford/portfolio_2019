import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { ProjectService } from '../_services/project/project.service';
import { OrderPipe } from 'ngx-order-pipe';
import { ContenfulApiService } from '../_services/contenful-api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-portfolio',
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.scss']
})

export class PagePortfolioComponent implements OnInit { 

  private projects_cda: Entry<any>[] = []; // define a private class property to the class which defines that this component will include a collection of several projects
  private projects: object;
  private selectedProject: Project;
  public isDataAvailable: boolean = false;

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
    this.contentfulApiService.getProjects()
      .then(projects_cda => this.projects_cda = projects_cda)
      .then(projects_cda => console.log('Portfolio pieces',projects_cda))
      .then(() => this.loadPage());
  }

  loadPage(){

    setTimeout(function(){
      this.isDataAvailable = true;
    }.bind(this), 400*4);

  }

}
