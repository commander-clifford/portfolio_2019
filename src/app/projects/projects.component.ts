import { Component, OnInit } from '@angular/core';
import { filter, map, share, pairwise, startWith } from 'rxjs/operators';
import { Project } from '../project/project';
import { routerTransition } from '../router.animations';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { ProjectsRoutingService } from './projects-routing.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsRoutingService],
  animations: [
    routerTransition
  ]
})

export class ProjectsComponent {

  private id: number;
  private projects: Project[] = [];
  private project: Project;
  private prevProject: Project;
  private nextProject: Project;
  private projectChange$: Observable<number>;
  private next$: Observable<number>;
  private prev$: Observable<number>;
  private routeTrigger$: Observable<object>;

  constructor(

    private router: Router,
    private projectService: ProjectService,
    private projectsRouting: ProjectsRoutingService,

  ) {

    // let url = router.routerState.snapshot.url;
    // let sub = url.lastIndexOf('/');
    // let tid = url.substring(sub + 1);
    // this.id = parseInt(tid);
    //
    // this.projects = projectService.getProjects();
    // console.log('PROJECTS.COMP this.projects',this.projects);
    //
    // this.project = projectService.getProject(this.id);
    // console.log('PROJECTS.COMP this.project',this.project);
    //
    // this.nextProject = projectService.getProject(this.id+1);
    // this.nextProject = this.nextProject ? this.nextProject : null;
    // console.log('-------- PROJECTS.COMP NEXT.project',this.nextProject);
    //
    // this.prevProject = projectService.getProject(this.id-1);
    // this.prevProject = this.prevProject ? this.prevProject : null;
    // console.log('-------- PROJECTS.COMP PREV.project',this.prevProject);
    //
    // this.projectChange$ = projectsRouting.projectChange$;

    // this.setupRouting();

  }

  ngOnInit(){}

  private setupRouting() {
    this.prev$ = this.projectChange$
      .pipe(
        map(index => index === 0 ? index : index - 1),
        share()
      );
    this.next$ = this.projectChange$
      .pipe(
        map(index => index === this.projects.length - 1 ? index : index + 1),
        share()
      );

    this.routeTrigger$ = this.projectChange$
      .pipe(
        startWith(0),
        pairwise(),
        map(([prev, curr]) => ({
          value: curr,
          params: {
            offsetEnter: prev > curr ? 100 : -100,
            offsetLeave: prev > curr ? -100 : 100
          }
        })),
      );
  }

  getState(outlet) {
    let state = outlet.activatedRouteData.state;
    return outlet.activatedRouteData.state;
  }
}
