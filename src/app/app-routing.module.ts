import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/component/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', // kosong karna agar tidak menulis path component-a 2x
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  {
    path: '',
    redirectTo: 'list',
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
