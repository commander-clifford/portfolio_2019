import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})

export class ProjectSectionComponent implements OnInit {

  @Input() section: Entry<any>;
  private sectionSys: object;
  private body: string;

  constructor() {}

  ngOnInit() {

    this.body = documentToHtmlString(this.section.fields.content);

  }

}
