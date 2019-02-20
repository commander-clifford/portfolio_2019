import { Component, OnInit } from '@angular/core';
import { filter, map, share, pairwise, startWith } from 'rxjs/operators';
import { Project } from '../project/project';
import { routerTransition } from '../router.animations';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { ProjectsRoutingService } from './projects-routing.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';


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

  projects: Project[] = [];
  project: Project;
  projectChange$: Observable<number>;
  next$: Observable<number>;
  prev$: Observable<number>;
  routeTrigger$: Observable<object>;

  constructor(
    route: ActivatedRoute,
    projectService: ProjectService,
    projectsRouting: ProjectsRoutingService
  ) {

    const { id } = route.snapshot.params;

    this.projects = projectService.getProjects();
    // this.project = projectService.getProject(id);

    // console.log('PROJECTS.COMP this.project',this.project);
    console.log('PROJECTS.COMP this.projects',this.projects);
    // projectService.getProjects().subscribe(projects => this.projects = projects);

    this.projectChange$ = projectsRouting.projectChange$;

    this.setupRouting();


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
}
