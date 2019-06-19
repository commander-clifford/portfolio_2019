import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  projects: object;
  selectedProject: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private projectService: ProjectService,
  ) { }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit() {
    this.getProjects();
  }

  goBack(): void {
    this.location.back();
  }

}
