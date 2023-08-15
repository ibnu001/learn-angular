import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentBComponent} from "./component-b/component-b.component";
import {NotFoundComponent} from "./shared/component/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', // kosong karna agar tidak menulis path component-a 2x
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  {
    path: 'component-b',
    component: ComponentBComponent
  },
  {
    path: '',
    redirectTo: 'component-b',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
