import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HelloComponent} from "./hello/hello.component";
import {IbnuComponent} from "./ibnu/ibnu.component";
import { AlfatComponent } from './alfat/alfat.component';
import { HeaderComponent } from './shared.component/header/header.component';
import { FooterComponent } from './shared.component/footer/footer.component';
import { SidebarComponent } from './shared.component/sidebar/sidebar.component';
import { BodyComponent } from './shared.component/body/body.component';
import {LoginComponent} from "./auth/login/login.component";
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    IbnuComponent,
    AlfatComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    LoginComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
