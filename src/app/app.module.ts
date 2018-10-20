import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AnimedlrComponent } from './components/animedlr/animedlr.component';
import { MangadlrComponent } from './components/mangadlr/mangadlr.component';
import { DownloadAppButtonComponent } from './components/download-app-button/download-app-button.component';
import { DownloadAppService } from './services/download-app.service';
import { KamuyComponent } from './components/kamuy/kamuy.component';
import { RanobeComponent } from './components/ranobe/ranobe.component';
import { Http404Component } from './components/http404/http404.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadAppButtonComponent,
    HomeComponent,
    AppCardComponent,
    AnimedlrComponent,
    MangadlrComponent,
    KamuyComponent,
    RanobeComponent,
    Http404Component
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot( [
      {path: '', component: HomeComponent},
      {path: 'animedlr', component: AnimedlrComponent},
      {path: 'mangadlr', component: MangadlrComponent},
      {path: 'kamuy', component: KamuyComponent},
      {path: 'ranobe', component: RanobeComponent},

      {path: '404', component: Http404Component, pathMatch: 'full'},
      {path: '**', redirectTo: '/404'}
    ]),

    NgxImageGalleryModule

  ],
  providers: [DownloadAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }