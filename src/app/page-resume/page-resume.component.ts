import { Component, OnInit } from '@angular/core';
import { Position } from './position';
import { PositionsService } from './positions.service';

@Component({
  selector: 'app-resume',
  templateUrl: './page-resume.component.html',
  styleUrls: ['./page-resume.component.scss']
})
export class PageResumeComponent implements OnInit {

  positions: Position[] = [];

  constructor(
    positionService: PositionsService,

  ) {




    this.positions = positionService.getPositions();
    console.log('RESUME.COMP this.positions',this.positions);




  }

  ngOnInit() {
  }

}
