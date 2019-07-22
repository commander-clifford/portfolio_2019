import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './route.reuse';

import { PageHomeComponent }   from '../page-home/page-home.component';
import { PageAboutComponent }   from '../page-about/page-about.component';
import { PageResumeComponent }   from '../page-resume/page-resume.component';
import { PagePortfolioComponent }   from '../page-portfolio/page-portfolio.component';
import { PageProjectsComponent }   from '../page-projects/page-projects.component';

import { ProjectComponent }   from '../_components/project/project.component';

const routes: Routes = [

  // Default to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: PageHomeComponent, data: { state: 'home' } },
  { path: 'about', component: PageAboutComponent, data: { state: 'about' } },
  { path: 'resume', component: PageResumeComponent, data: { state: 'resume' } },
  { path: 'portfolio', component: PagePortfolioComponent, data: { state: 'portfolio' } },
  { path: 'project', component: PageProjectsComponent, data: { state: 'projects' },
      children: [
        { path: '', redirectTo: '/', pathMatch: 'full'},
        { path: ':slug', component: ProjectComponent, data: { state: 'project' } },
      ]
  },

  // { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
