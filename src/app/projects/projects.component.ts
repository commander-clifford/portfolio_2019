import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, share, pairwise, startWith } from 'rxjs/operators';
import { Project } from '../project/project';
import { routerTransition } from '../router.animations';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from '../project/project.service';
import { ProjectsRoutingService } from './projects-routing.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ContenfulApiService } from '../contenful-api.service';
import { Entry } from 'contentful';

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

  private isDataAvailable: boolean = false;
  private project: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects
  private projectPrev: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects
  private projectNext: Entry<any>; // define a private class property to the class which defines that this component will include a collection of several projects

  private id: number;
  private projects: Project[] = [];
  // private project: Project;
  private prevProject: Project;
  private nextProject: Project;
  private projectChange$: Observable<number>;
  private next$: Observable<number>;
  private prev$: Observable<number>;
  private routeTrigger$: Observable<object>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private projectsRouting: ProjectsRoutingService,
    private contentfulApiService: ContenfulApiService,

  ) {

    // const { slug } = route.snapshot.params;
    // console.log('S Define ID',slug);

    let url = router.routerState.snapshot.url;
    let sub = url.lastIndexOf('/');
    let slug = url.substring(sub + 1);
    console.log('S Define ID',slug);
    // console.log('this.data',this.data);

    this.getProject(slug);
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

  getProject(slug): void {
    console.log('-- go get',slug);
    this.contentfulApiService.getProjectBySlug(slug)
      .then(project => this.project = project)
      .then(project => console.log('GOT',this.project))
      .then(project => console.log('SGOT',this.project.fields.displayOrder))
      .then(() => this.getPrevProject(this.project.fields.displayOrder-1))
      .then(() => this.getNextProject(this.project.fields.displayOrder+1))
      .then(() => this.loadPage())
  }

  getPrevProject(id): void {
    console.log('getPrevProject',id);
    this.contentfulApiService.getProjectByOrderId(id)
    .then(projectPrev => this.projectPrev = projectPrev)
    .then(projectPrev => console.log('GOT-',this.projectPrev))
  }
  getNextProject(id): void {
    console.log('getNextProject',id);
    this.contentfulApiService.getProjectByOrderId(id)
    .then(projectNext => this.projectNext = projectNext)
    .then(projectNext => console.log('GOT+',this.projectNext))
  }

  loadPage(){
    setTimeout(function(){
      this.isDataAvailable = true;
    }.bind(this), 400*2);
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
