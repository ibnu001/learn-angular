import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/component/not-found/not-found.component";
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./auth/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pages', // kosong karna agar tidak menulis path component-a 2x
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [authGuard]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
