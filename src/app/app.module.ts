import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsideAppComponent } from './wrapper/aside-app/aside-app.component';
import { MainAppComponent } from './wrapper/main-app/main-app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavComponent } from './nav/nav.component';
import { VideoComponent } from './video/video.component';
import { AsideTopComponent } from './wrapper/aside-app/aside-top/aside-top.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideAppComponent,
    MainAppComponent,
    WrapperComponent,
    NavComponent,
    VideoComponent,
    AsideTopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
