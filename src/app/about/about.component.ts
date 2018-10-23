import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import '../instafeed'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

  let feed = new Instafeed({
    get: 'user',
    userId: '3530247962',
    sortBy: 'most-recent',
    limit: '16',
    target: 'ig-cards',
    template: '<a class="ig-card" href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    clientId: '1c4b30b17e6140078e906c8437ec2eee',
    accessToken: '3530247962.1c4b30b.93182a17404b4aaaaae2f852c2f04086'
  });

  feed.run();


  }

  goBack(): void {
    this.location.back();
  }

}
