import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';
import { OrderPipe } from 'ngx-order-pipe';

import 'instafeed';
import * as Instafeed from 'instafeed';

// import 'planck-js';

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
    // https://www.npmjs.com/package/instafeed
    var feed1 = new Instafeed({
      get: 'user',
      userId: '3530247962',
      clientId: '1c4b30b17e6140078e906c8437ec2eee',
      accessToken: '3530247962.1c4b30b.93182a17404b4aaaaae2f852c2f04086',
      target: 'instafeed-1',
      sort: "most-recent",
      limit: 20,
      videoTemplate: "<a class=\"instafeed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\"></a>",
      carouselFrameTemplate: "<a class=\"instafeed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\"></a>",
      imageTemplate: "<a class=\"instafeed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{image}}\" width=\"{{width}}\" height=\"{{height}}\"></a>",
      onSuccess: function() {},
      onError: function(message) { console.log(message); }

    });
    feed1.run();

    var feed2 = new Instafeed({
      get: 'user',
      userId: '3530247962',
      clientId: '1c4b30b17e6140078e906c8437ec2eee',
      accessToken: '3530247962.1c4b30b.93182a17404b4aaaaae2f852c2f04086',
      target: 'instafeed-2',
      sort: "most-liked",
      limit: 20,
      videoTemplate: "<a class=\"instafeed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\"></a>",
      carouselFrameTemplate: "<a class=\"instafeed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{previewImage}}\" width=\"{{previewWidth}}\" height=\"{{previewHeight}}\"></a>",
      imageTemplate: "<a class=\"instafeed__card\" href=\"{{link}}\" target=\"_blank\"><img src=\"{{image}}\" width=\"{{width}}\" height=\"{{height}}\"></a>",
      onSuccess: function() {},
      onError: function(message) { console.log(message); }

    });
    feed2.run();

  }

  goBack(): void {
    this.location.back();
  }

}
