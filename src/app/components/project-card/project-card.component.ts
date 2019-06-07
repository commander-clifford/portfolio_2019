import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project;
  private projectSys: object;

  constructor() {}

  ngOnInit() {
    console.log('-project:',this.project.fields.title,this.project);
    this.projectSys = this.project.sys;
    this.project = this.project.fields;
  }

}
