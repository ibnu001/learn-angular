import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentAComponent} from "./component-a/component-a.component";
import {ChildAComponent} from "./component-a/child-a/child-a.component";
import {ChildBComponent} from "./component-a/child-b/child-b.component";

const routes: Routes = [
  {
    path: 'component-a',
    component: ComponentAComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent
      },
      {
        path: 'child-b',
        component: ChildBComponent
      },
      {
        path: 'child-b/:id',
        component: ChildBComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
