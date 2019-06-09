import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-whirligig',
  templateUrl: './whirligig.component.html',
  styleUrls: ['./whirligig.component.scss']
})

export class WhirligigComponent implements OnInit {

  @Input() projects_cda;

  constructor() { }

  ngOnInit() {}

}
