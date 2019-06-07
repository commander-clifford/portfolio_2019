import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  @Input() section: object;
  private sectionSys: object;

  constructor() { }

  ngOnInit() {

    // console.log('-----section- ',this.section);
    // this.sectionSys = this.section.sys;
    // this.section = this.section.fields;

  }

}
