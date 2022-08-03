import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SideNavComponent,
    HomePageComponent,
    HeaderComponent
  ],
  exports: [
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule {
}
