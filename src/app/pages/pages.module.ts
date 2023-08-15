import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {ComponentAComponent} from "./component-a/component-a.component";
import {ChildAComponent} from "./component-a/child-a/child-a.component";
import {ChildBComponent} from "./component-a/child-b/child-b.component";


@NgModule({
  declarations: [
    ComponentAComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
