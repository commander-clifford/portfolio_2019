import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';
import { ProjectsRoutingService } from '../projects/projects-routing.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  project: Project;
  projectService;
  nextProjectId;
  prevProjectId;

  constructor(

    route: ActivatedRoute,
    projectService: ProjectService,
    projectsRouting: ProjectsRoutingService,


  ) {

    const { id } = route.snapshot.params;

    this.project = projectService.getProject(id);
    console.log('project.component loading',this.project.name);

    projectsRouting.projectChange$.next(+id);

    this.nextProjectId = id -1;
    this.prevProjectId = id +1;

  }


}



//
//
//
//
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
// import { slideInOutAnimation } from '../router.animations';
// import { ProjectService }  from '../project.service';
// import { Project } from '../project';
// import { Router } from '@angular/router';
//
//
// @Component({
//   selector: 'app-project',
//   animations: [ slideInOutAnimation ],
//   templateUrl: './project.component.html',
//   styleUrls: ['./project.component.scss']
// })
//
// export class ProjectComponent implements OnInit {
//
//   project: Project;
//   projects: Project[];
//   nextProjectId: number;
//   prevProjectId: number;
//   mainState;
//
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private projectService: ProjectService,
//     private location: Location
//   ) {}
//
//   ngOnInit(): void {
//     this.getProject();
//     this.getProjects();
//
//     this.mainState = 'next';
//     var delayAnim = setTimeout(() => {
//       this.mainState = 'new';
//     },3000);
//
//   }
//
//   private navigateProjects(dir): void {
//     if(dir === 'next'){
//       // alert('next');
//       // this.mainState = 'next';
//       this.router.navigate(["/projects/" + this.nextProjectId ]);
//     } else {
//       // alert('prev');
//       // this.mainState = 'prev';
//       this.router.navigate(["/projects/" + this.prevProjectId ]);
//     }
//   }
//
//
//
//   getProject(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.projectService.getProject(id)
//       .subscribe(project => this.project = project);
//
//     this.nextProjectId = id -1;
//     this.prevProjectId = id +1;
//
//   }
//
//   getProjects(): void {
//     this.projectService.getProjects()
//         .subscribe(projects => this.projects = projects);
//     console.log('PROJECTS LENGTH',this.projects.length);
//   }
//
//   goBack(): void {
//     this.location.back();
//   }
//
// }
