import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoverComponent }   from './cover/cover.component';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { ProjectsComponent }   from './projects/projects.component';
import { ProjectComponent }   from './project/project.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: CoverComponent, data: { state: 'cover' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' } },
  { path: 'project/:id', component: ProjectComponent, data: { state: 'project' } },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
