import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './route.reuse';
import { CoverComponent }   from '../cover/cover.component';
import { HomeComponent }   from '../home/home.component';
import { AboutComponent }   from '../about/about.component';
import { PortfolioComponent }   from '../portfolio/portfolio.component';
import { ProjectsComponent }   from '../projects/projects.component';
import { ProjectComponent }   from '../project/project.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutComponent, data: { state: 'home' } },
  { path: 'portfolio', component: PortfolioComponent, data: { state: 'portfolio' } },

  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' },
      children: [
        { path: '', redirectTo: '0', pathMatch: 'full'},
        { path: ':id', component: ProjectComponent, data: { state: 'project' } },
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
