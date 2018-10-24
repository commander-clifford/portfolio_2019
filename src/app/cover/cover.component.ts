import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  @HostListener("window:scroll", ['$event'])
  scrollMe(event) {
    var scrollLimit = 16*1;
    if (window.scrollY >= scrollLimit) {
      this.router.navigate(['/about']);
    }

  }

  ngOnInit() {}

}
