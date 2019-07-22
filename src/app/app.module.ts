import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './_components/project/in-memory-data.service';

import { ContenfulApiService }  from './_services/contenful-api.service';
import { NguCarouselModule } from '@ngu/carousel';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { CustomReuseStrategy } from './_routing/route.reuse';
import { OrderModule } from 'ngx-order-pipe';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './_routing/app-routing.module';
import { CoverComponent } from './_components/cover/cover.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { ProjectComponent } from './_components/project/project.component';
import { PagePortfolioComponent } from './page-portfolio/page-portfolio.component';
import { PageResumeComponent } from './page-resume/page-resume.component';

import { NavigationComponent } from './_components/navigation/navigation.component';
import { SafePipe } from './safe.pipe';

import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';
import { ProjectCardComponent } from './_components/project-card/project-card.component';
import { ProjectSectionComponent } from './_components/project-section/project-section.component';
import { WhirligigComponent } from './_components/whirligig/whirligig.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InstagramFeedComponent } from './_components/instagram-feed/instagram-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageProjectsComponent,
    ProjectComponent,
    PagePortfolioComponent,
    PageResumeComponent,
    NavigationComponent,
    SafePipe,
    ProjectCardComponent,
    ProjectSectionComponent,
    InstagramFeedComponent,
    WhirligigComponent,
    FooterComponent,
    SanitizeHtmlPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    GoogleAnalyticsModule.forRoot(),
    HttpClientModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    NguCarouselModule,
    OrderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: GA_TOKEN, useValue: 'UA-139887211-2' },
    ContenfulApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
