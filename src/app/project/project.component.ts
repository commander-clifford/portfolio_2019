import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectService }  from '../project.service';
import { Project } from '../project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  project: Project;
  nextProjectId: number;
  prevProjectId: number;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
    this.nextProjectId = this.project.id +1;
    this.prevProjectId = this.project.id -1;
    console.log(this.project.id);
    console.log(this.nextProjectId);
  }

  getProject(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

}