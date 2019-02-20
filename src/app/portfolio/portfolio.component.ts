import { Component, OnInit } from '@angular/core';
import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  projects: object;
  selectedProject: Project;

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

}
